import React, { useRef, useState, useEffect, useCallback } from "react";
import { questionnaireData, translations } from "./questionnaireData";
import Webcam from "react-webcam";
import { useReactToPrint } from "react-to-print";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import "./Questionaries.css";
import logo from "../public/gwpl-logo.png";
import enventoLogo from "../public/enventoLab.png";
import { iconMap } from "./components/QuestionIcons";

const createInitialDeclaration = () => ({
  visitorName: "",
  company: "",
  date: new Date().toISOString().split("T")[0],
});

export const SafetyQuestionnaire = () => {
  const [answers, setAnswers] = useState({});
  const [declaration, setDeclaration] = useState(createInitialDeclaration);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [isPrintReady, setIsPrintReady] = useState(false);
  const [error, setError] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [language, setLanguage] = useState("en");
  const webcamRef = useRef(null);
  const checklistRef = useRef();

  const t = translations[language];

  const handlePrintChecklist = useReactToPrint({
    contentRef: checklistRef,
    documentTitle: "Safety_Checklist_Form",
    onBeforeGetContent: () => {
      console.log("Preparing to print...");
      return Promise.resolve();
    },
    onAfterPrint: () => {
      console.log("Print dialog closed");
      setIsPrintReady(true);
    },
    onPrintError: (error) => {
      console.error("Print error:", error);
      setError("Failed to open print dialog. Please try again.");
    },
  });

  const handleDownloadPDF = useCallback(async () => {
    const element = checklistRef.current;
    if (!element) {
      throw new Error("Checklist element not ready");
    }

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const imageData = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const imageWidth = pageWidth;
    const imageHeight = (canvas.height * imageWidth) / canvas.width;

    let position = 0;
    let heightLeft = imageHeight;

    pdf.addImage(imageData, "PNG", 0, position, imageWidth, imageHeight);
    heightLeft -= pageHeight;

    while (heightLeft > -0.5) {
      position = heightLeft - imageHeight;
      pdf.addPage();
      pdf.addImage(imageData, "PNG", 0, position, imageWidth, imageHeight);
      heightLeft -= pageHeight;
    }

    pdf.save("Safety_Checklist.pdf");
  }, []);

  useEffect(() => {
    if (!isSubmitted) {
      return;
    }

    let isMounted = true;

    const prepareDocument = async () => {
      setStatusMessage("Preparing document for print...");
      setError("");

      try {
        await new Promise((resolve) => setTimeout(resolve, 500));

        if (!isMounted) {
          return;
        }

        setStatusMessage(
          "Document ready. Click 'Print Checklist' to print or download."
        );
      } catch (err) {
        console.error(err);
        if (!isMounted) {
          return;
        }
        setError(
          "Failed to prepare the printable checklist. Please try again."
        );
        setStatusMessage("");
      } finally {
        if (isMounted) {
          setIsPrintReady(true);
        }
      }
    };

    prepareDocument();

    return () => {
      isMounted = false;
    };
  }, [handleDownloadPDF, isSubmitted]);

  const capturePhoto = () => {
    if (webcamRef.current) {
      const image = webcamRef.current.getScreenshot();
      setImageSrc(image);
      setError("");
    }
  };

  const handleAnswerChange = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
    if (error) {
      setError("");
    }
  };

  const handleDeclarationChange = (field, value) => {
    setDeclaration((prev) => ({ ...prev, [field]: value }));
    if (error) {
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setStatusMessage("");

    if (answeredQuestions < totalQuestions) {
      setError(
        `Please answer the remaining ${
          totalQuestions - answeredQuestions
        } questions.`
      );
      return;
    }

    if (!declaration.visitorName || !declaration.date) {
      setError("Please complete the visitor name and date fields.");
      return;
    }

    if (!imageSrc) {
      setError("Capture a visitor photo before submitting.");
      return;
    }

    setIsPrintReady(false);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setAnswers({});
    setDeclaration(createInitialDeclaration());
    setImageSrc(null);
    setIsSubmitted(false);
    setIsPrintReady(false);
    setStatusMessage("");
    setError("");
  };

  const handleManualPrint = () => {
    console.log("Print button clicked");
    setStatusMessage("Opening print dialog...");
    setError("");
    
    if (!checklistRef.current) {
      setError("Checklist not ready. Please wait a moment and try again.");
      setStatusMessage("");
      return;
    }
    
    try {
      handlePrintChecklist();
      setTimeout(() => setStatusMessage(""), 1000);
    } catch (err) {
      console.error("Print error:", err);
      setError("Failed to open print dialog. Please try again.");
      setStatusMessage("");
    }
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
            <div className="language-selector">
              <button
                type="button"
                className={`language-btn ${language === "en" ? "active" : ""}`}
                onClick={() => setLanguage("en")}
              >
                English
              </button>
              <button
                type="button"
                className={`language-btn ${language === "hi" ? "active" : ""}`}
                onClick={() => setLanguage("hi")}
              >
                हिंदी
              </button>
              <button
                type="button"
                className={`language-btn ${language === "mr" ? "active" : ""}`}
                onClick={() => setLanguage("mr")}
              >
                मराठी
              </button>
            </div>
            <div className="logo-container">
              <div className="logo-shield corner-logo">
                <img src={logo} alt="Logo" className="logo-svg corner-logo-img" />
              </div>
              <h1 className="title">{t.title}</h1>
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
                <h2 className="section-title">
                  {language === "hi"
                    ? section.sectionTitleHi
                    : language === "mr"
                    ? section.sectionTitleMr
                    : section.sectionTitle}
                </h2>
                <div className="questions-grid">
                  {section.questions.map((q) => {
                    const IconComponent = iconMap[q.id];
                    return (
                      <div
                        key={q.id}
                        className={`question-card ${
                          answers[q.id] ? "answered" : ""
                        }`}
                      >
                        {IconComponent && <IconComponent />}
                        <p className="question-text">
                          {language === "hi"
                            ? q.questionTextHi
                            : language === "mr"
                            ? q.questionTextMr
                            : q.questionText}
                        </p>
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
                            <span className="option-text">
                              {option.value === "yes" ? t.yes : t.no}
                            </span>
                            {option.note && (
                              <span className="option-note">{option.note}</span>
                            )}
                          </label>
                        ))}
                      </div>
                    </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>

          <div className="declaration-section">
            <p className="declaration-statement">{t.photoPrompt}</p>
            <div className="photo-capture-container">
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt="Visitor"
                  className="captured-photo"
                />
              ) : (
                <>
                  <Webcam
                    audio={false}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"
                    width={160}
                    height={120}
                    className="webcam-preview"
                  />
                  <button
                    type="button"
                    onClick={capturePhoto}
                    className="capture-button"
                  >
                    {t.capturePhoto}
                  </button>
                </>
              )}
            </div>
          </div>

          <div className="declaration-section">
            <p className="declaration-statement">{t.declaration}</p>
            <div className="declaration-fields">
              {questionnaireData.declaration.fields.map((field) => (
                <div key={field.key} className="input-group">
                  <label>{t[field.key]}</label>
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
            {error && <div className="form-feedback error">{error}</div>}
            <div className="form-actions">
              <button
                type="submit"
                className="submit-button"
                disabled={answeredQuestions < totalQuestions || !imageSrc}
              >
                {t.submitButton}
              </button>
            </div>
          </div>
        </form>
      </div>

      <div style={{ display: isSubmitted ? "block" : "none" }}>
        <div>
          {statusMessage && (
            <div className="form-feedback status">{statusMessage}</div>
          )}
          {error && <div className="form-feedback error">{error}</div>}
        </div>
        <div ref={checklistRef} className="checklist-form">
          <div className="checklist-header-logo">
            <div className="checklist-logo-shield">
              <img src={logo} alt="Logo" className="checklist-logo-svg" />
            </div>
            <h1 className="checklist-title">Safety Checklist Form</h1>
          </div>
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
            type="button"
            onClick={handleManualPrint}
            className="submit-button"
            disabled={!isPrintReady}
          >
            {isPrintReady ? "Print Checklist" : "Preparing Document..."}
          </button>
          <button
            type="button"
            onClick={handleDownloadPDF}
            className="secondary-button"
            disabled={!isPrintReady}
          >
            Download PDF
          </button>
          <button
            type="button"
            onClick={resetForm}
            className="secondary-button"
          >
            Start New Submission
          </button>
        </div>
      </div>
      
      <div className="powered-by-footer no-print">
        <span className="powered-text">Powered by</span>
        <img src={enventoLogo} alt="EnventoLab" className="powered-logo" />
      </div>
    </div>
  );
};
