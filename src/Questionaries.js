import React, { useRef, useState, useEffect } from "react";
import { questionnaireData } from "./questionnaireData";
import Webcam from "react-webcam";
import { useReactToPrint } from "react-to-print";
import html2pdf from "html2pdf.js";
import "./Questionaries.css";
import logo from "./logo.svg";
export const SafetyQuestionnaire = () => {
  const [answers, setAnswers] = useState({});
  const [declaration, setDeclaration] = useState({
    visitorName: "",
    company: "",
    date: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [isPrintReady, setIsPrintReady] = useState(false);
  const webcamRef = useRef(null);
  const checklistRef = useRef();

  const handlePrintChecklist = useReactToPrint({
    content: () => checklistRef.current,
    documentTitle: "Safety Checklist Form",
    onBeforeGetContent: () => {
      setIsPrintReady(true);
      return Promise.resolve();
    },
    onAfterPrint: () => setIsPrintReady(false),
  });

  const handleDownloadPDF = () => {
    const element = checklistRef.current;
    const opt = {
      margin: 0.5,
      filename: "Safety_Checklist.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
  };

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        if (checklistRef.current) {
          handlePrintChecklist();
          setTimeout(() => {
            handleDownloadPDF();
          }, 1500);
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const capturePhoto = () => {
    if (webcamRef.current) {
      const image = webcamRef.current.getScreenshot();
      setImageSrc(image);
    }
  };

  const handleAnswerChange = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleDeclarationChange = (field, value) => {
    setDeclaration((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const totalQuestions = questionnaireData.sections.reduce(
    (total, section) => total + section.questions.length,
    0
  );
  const answeredQuestions = Object.keys(answers).length;
  const completionPercentage = Math.round(
    (answeredQuestions / totalQuestions) * 100
  );

  return (
    <div className="questionnaire-container">
      <div style={{ display: isSubmitted ? "none" : "block" }}>
        <form onSubmit={handleSubmit} className="questionnaire-form">
          <div className="header">
            <div className="logo-container">
              <div className="logo-shield">
                <img src={logo} alt="Logo" className="logo-svg" />
              </div>
              <h1 className="title">{questionnaireData.title}</h1>
            </div>
            <div className="progress-container">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${completionPercentage}%` }}
                ></div>
              </div>
              <div className="progress-text">
                {answeredQuestions} of {totalQuestions} answered (
                {completionPercentage}%)
              </div>
            </div>
          </div>

          <div className="sections-container">
            {questionnaireData.sections.map((section, i) => (
              <section key={i} className="question-section">
                <h2 className="section-title">{section.sectionTitle}</h2>
                <div className="questions-grid">
                  {section.questions.map((q) => (
                    <div
                      key={q.id}
                      className={`question-card ${
                        answers[q.id] ? "answered" : ""
                      }`}
                    >
                      <p className="question-text">{q.questionText}</p>
                      <div className="options-container">
                        {q.options.map((option, i) => (
                          <label
                            key={i}
                            className={`option-label ${
                              answers[q.id] === option.value ? "selected" : ""
                            }`}
                          >
                            <input
                              type="radio"
                              name={`question-${q.id}`}
                              value={option.value}
                              checked={answers[q.id] === option.value}
                              onChange={() =>
                                handleAnswerChange(q.id, option.value)
                              }
                              className="option-input"
                            />
                            <span className="option-text">{option.text}</span>
                            {option.note && (
                              <span className="option-note">{option.note}</span>
                            )}
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="declaration-section">
            <p className="declaration-statement">
              Take a photo for visitor badge:
            </p>
            {imageSrc ? (
              <img
                src={imageSrc}
                alt="Visitor"
                style={{ width: 160, borderRadius: 8 }}
              />
            ) : (
              <div>
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  width={160}
                  height={120}
                  style={{ borderRadius: 8, marginBottom: 10 }}
                />
                <button
                  type="button"
                  onClick={capturePhoto}
                  className="submit-button"
                >
                  Capture Photo
                </button>
              </div>
            )}
          </div>

          <div className="declaration-section">
            <p className="declaration-statement">
              {questionnaireData.declaration.statement}
            </p>
            <div className="declaration-fields">
              {questionnaireData.declaration.fields.map((field) => (
                <div key={field.key} className="input-group">
                  <label>{field.name}</label>
                  <input
                    type={field.type}
                    value={declaration[field.key]}
                    onChange={(e) =>
                      handleDeclarationChange(field.key, e.target.value)
                    }
                    className="declaration-input"
                    required
                    placeholder={`Enter ${field.name.toLowerCase()}`}
                  />
                </div>
              ))}
            </div>
            <div className="form-actions">
              <button
                type="submit"
                className="submit-button"
                disabled={answeredQuestions < totalQuestions || !imageSrc}
              >
                Submit Safety Questionnaire
              </button>
            </div>
          </div>
        </form>
      </div>

      <div style={{ display: isSubmitted ? "block" : "none" }}>
        <div ref={checklistRef} className="checklist-form">
          <h1 className="checklist-title">Safety Checklist Form</h1>
          <hr className="divider" />

          <div className="personal-section">
            <div className="personal-info">
              <div className="personal-row">
                <div>
                  <label>Name: </label>
                  <span className="filled-field">
                    {declaration.visitorName}
                  </span>
                </div>
                <div>
                  <label>Date: </label>
                  <span className="filled-field">{declaration.date}</span>
                </div>
              </div>
              <div className="personal-row">
                <div>
                  <label>Company: </label>
                  <span className="filled-field">{declaration.company}</span>
                </div>
              </div>
            </div>
            <div className="photo-container">
              {imageSrc && (
                <img src={imageSrc} alt="Visitor" className="visitor-photo" />
              )}
            </div>
          </div>

          <hr className="divider" />

          <div className="safety-questions-section">
            <h2 className="section-header">SAFETY QUESTIONS</h2>
            {questionnaireData.sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="safety-section">
                <h3 className="subsection-header">{section.sectionTitle}</h3>
                {section.questions.map((question) => (
                  <div key={question.id} className="safety-question">
                    <p className="question-text">{question.questionText}</p>
                    <div className="answer-container">
                      <span className="answer-label">Answer:</span>
                      <span className="answer-value">
                        {answers[question.id] || "Not answered"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <hr className="divider" />

          <div className="declaration-section">
            <p className="declaration-statement">
              {questionnaireData.declaration.statement}
            </p>
            <div className="signature-section">
              <div className="signature-field">
                <label>Signature:</label>
                <div className="signature-line"></div>
              </div>
              <div className="date-field">
                <label>Date:</label>
                <span className="filled-field">{declaration.date}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="form-actions" style={{ marginTop: "2rem" }}>
          <button
            onClick={handlePrintChecklist}
            className="submit-button"
            disabled={!isPrintReady}
          >
            {isPrintReady ? "Print Checklist" : "Preparing Document..."}
          </button>
        </div>
      </div>
    </div>
  );
};
