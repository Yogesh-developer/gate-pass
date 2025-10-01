// Questionnaire data with multi-language support
export const translations = {
  en: {
    title: "Visitor Safety Questionnaire",
    yes: "Yes",
    no: "No",
    photoPrompt: "Take a photo for visitor badge:",
    capturePhoto: "Capture Photo",
    submitButton: "Submit Safety Questionnaire",
    visitorName: "Visitor Name",
    company: "Company (if applicable)",
    date: "Date",
    declaration: "I confirm that I have read, understood, and will follow the Allow Wheel Company's safety policies and procedures during my visit.",
  },
  hi: {
    title: "आगंतुक सुरक्षा प्रश्नावली",
    yes: "हाँ",
    no: "नहीं",
    photoPrompt: "आगंतुक बैज के लिए फोटो लें:",
    capturePhoto: "फोटो लें",
    submitButton: "सुरक्षा प्रश्नावली जमा करें",
    visitorName: "आगंतुक का नाम",
    company: "कंपनी (यदि लागू हो)",
    date: "तारीख",
    declaration: "मैं पुष्टि करता/करती हूं कि मैंने एलो व्हील कंपनी की सुरक्षा नीतियों और प्रक्रियाओं को पढ़ा, समझा है और अपनी यात्रा के दौरान इनका पालन करूंगा/करूंगी।",
  },
  mr: {
    title: "अभ्यागत सुरक्षा प्रश्नावली",
    yes: "होय",
    no: "नाही",
    photoPrompt: "अभ्यागत बॅजसाठी फोटो घ्या:",
    capturePhoto: "फोटो घ्या",
    submitButton: "सुरक्षा प्रश्नावली सबमिट करा",
    visitorName: "अभ्यागताचे नाव",
    company: "कंपनी (लागू असल्यास)",
    date: "तारीख",
    declaration: "मी पुष्टी करतो की मी अॅलो व्हील कंपनीच्या सुरक्षा धोरणे आणि प्रक्रिया वाचल्या आहेत, समजल्या आहेत आणि माझ्या भेटीदरम्यान त्यांचे पालन करेन.",
  },
};

export const questionnaireData = {
  title: "Visitor Safety Questionnaire",
  sections: [
    {
      sectionTitle: "General Safety Awareness",
      sectionTitleHi: "सामान्य सुरक्षा जागरूकता",
      sectionTitleMr: "सामान्य सुरक्षा जागरूकता",
      questions: [
        {
          id: 1,
          emoji: "✍️",
          questionText: "Have you signed in at the security/reception desk?",
          questionTextHi: "क्या आपने सुरक्षा/रिसेप्शन डेस्क पर साइन इन किया है?",
          questionTextMr: "तुम्ही सुरक्षा/रिसेप्शन डेस्कवर साइन इन केले आहे का?",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        },
        {
          id: 2,
          emoji: "📋",
          questionText:
            "Have you received a site safety induction or briefing?",
          questionTextHi: "क्या आपको साइट सुरक्षा प्रेरण या ब्रीफिंग मिली है?",
          questionTextMr: "तुम्हाला साइट सुरक्षा प्रेरण किंवा ब्रीफिंग मिळाली आहे का?",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        },
        {
          id: 3,
          emoji: "⚠️",
          questionText:
            "Do you agree to follow all posted safety signs and instructions?",
          questionTextHi: "क्या आप सभी पोस्ट किए गए सुरक्षा संकेतों और निर्देशों का पालन करने के लिए सहमत हैं?",
          questionTextMr: "तुम्ही सर्व पोस्ट केलेल्या सुरक्षा चिन्हे आणि सूचनांचे पालन करण्यास सहमत आहात का?",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        },
        {
          id: 4,
          emoji: "🚫",
          questionText:
            "Do you understand that failure to follow safety rules may result in removal from the site?",
          questionTextHi: "क्या आप समझते हैं कि सुरक्षा नियमों का पालन न करने पर साइट से हटाया जा सकता है?",
          questionTextMr: "तुम्हाला समजते का की सुरक्षा नियमांचे पालन न केल्यास साइटवरून काढले जाऊ शकते?",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        },
      ],
    },
    {
      sectionTitle: "PPE & Clothing",
      sectionTitleHi: "पीपीई और कपड़े",
      sectionTitleMr: "पीपीई आणि कपडे",
      questions: [
        {
          id: 5,
          emoji: "👟",
          questionText: "Are you wearing closed-toe, non-slip footwear?",
          questionTextHi: "क्या आप बंद पैर की अंगुली वाले, फिसलन रोधी जूते पहन रहे हैं?",
          questionTextMr: "तुम्ही बंद पायाचे बोट असलेले, घसरणरोधी पादत्राणे घातले आहेत का?",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        },
        {
          id: 6,
          emoji: "👔",
          questionText:
            "Are you wearing loose clothing, scarves, or jewelry that could get caught in machinery?",
          questionTextHi: "क्या आप ढीले कपड़े, स्कार्फ या आभूषण पहन रहे हैं जो मशीनरी में फंस सकते हैं?",
          questionTextMr: "तुम्ही सैल कपडे, स्कार्फ किंवा दागिने घातले आहेत जे यंत्रसामग्रीत अडकू शकतात का?",
          options: [
            { text: "No", value: "no" },
            {
              text: "Yes",
              value: "yes",
              note: "If yes, access may be restricted",
            },
          ],
        },
        {
          id: 7,
          emoji: "🎒",
          questionText:
            "Are you carrying any personal items that must be declared (e.g., tools, electronics)?",
          questionTextHi: "क्या आप कोई व्यक्तिगत सामान ले जा रहे हैं जिसे घोषित किया जाना चाहिए (जैसे, उपकरण, इलेक्ट्रॉनिक्स)?",
          questionTextMr: "तुम्ही कोणत्याही वैयक्तिक वस्तू घेऊन जात आहात ज्या घोषित केल्या पाहिजेत (उदा., साधने, इलेक्ट्रॉनिक्स)?",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        },
      ],
    },
    {
      sectionTitle: "Work Area Rules",
      sectionTitleHi: "कार्य क्षेत्र नियम",
      sectionTitleMr: "कार्य क्षेत्र नियम",
      questions: [
        {
          id: 8,
          emoji: "🍔",
          questionText:
            "Do you understand that eating, drinking, or smoking is only allowed in designated areas?",
          questionTextHi: "क्या आप समझते हैं कि खाना, पीना या धूम्रपान केवल निर्धारित क्षेत्रों में ही अनुमत है?",
          questionTextMr: "तुम्हाला समजते का की खाणे, पिणे किंवा धूम्रपान फक्त नियुक्त केलेल्या भागात अनुमत आहे?",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        },
        {
          id: 9,
          emoji: "📱",
          questionText:
            "Will you avoid using your phone while walking or in work areas?",
          questionTextHi: "क्या आप चलते समय या कार्य क्षेत्रों में अपने फोन का उपयोग करने से बचेंगे?",
          questionTextMr: "तुम्ही चालताना किंवा कार्य क्षेत्रात तुमचा फोन वापरणे टाळाल का?",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        },
        {
          id: 10,
          emoji: "🤝",
          questionText:
            "Do you agree not to interfere with any ongoing work processes or employees at work?",
          questionTextHi: "क्या आप किसी भी चल रही कार्य प्रक्रियाओं या काम पर कर्मचारियों में हस्तक्षेप न करने के लिए सहमत हैं?",
          questionTextMr: "तुम्ही कोणत्याही चालू कार्य प्रक्रियेत किंवा कामावरील कर्मचार्‍यांमध्ये हस्तक्षेप न करण्यास सहमत आहात का?",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        },
      ],
    },
    {
      sectionTitle: "Emergency & Incident Protocol",
      sectionTitleHi: "आपातकालीन और घटना प्रोटोकॉल",
      sectionTitleMr: "आपत्कालीन आणि घटना प्रोटोकॉल",
      questions: [
        {
          id: 11,
          emoji: "🚨",
          questionText:
            "Do you know how to report an accident, injury, or near miss?",
          questionTextHi: "क्या आप जानते हैं कि दुर्घटना, चोट या निकट चूक की रिपोर्ट कैसे करें?",
          questionTextMr: "तुम्हाला अपघात, दुखापत किंवा जवळच्या चुकीचा अहवाल कसा द्यायचा माहित आहे का?",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        },
        {
          id: 12,
          emoji: "🏥",
          questionText:
            "Have you been shown the location of first aid stations?",
          questionTextHi: "क्या आपको प्राथमिक चिकित्सा स्टेशनों का स्थान दिखाया गया है?",
          questionTextMr: "तुम्हाला प्रथमोपचार केंद्रांचे स्थान दाखवले गेले आहे का?",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        },
        {
          id: 13,
          emoji: "☎️",
          questionText:
            "In case of emergency, do you know who your emergency contact on-site is?",
          questionTextHi: "आपातकाल की स्थिति में, क्या आप जानते हैं कि साइट पर आपका आपातकालीन संपर्क कौन है?",
          questionTextMr: "आपत्कालीन परिस्थितीत, तुम्हाला माहित आहे का की साइटवर तुमचा आपत्कालीन संपर्क कोण आहे?",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        },
      ],
    },
    {
      sectionTitle: "Restricted Areas",
      sectionTitleHi: "प्रतिबंधित क्षेत्र",
      sectionTitleMr: "प्रतिबंधित क्षेत्र",
      questions: [
        {
          id: 14,
          emoji: "🔒",
          questionText:
            "Do you understand that entry into production areas or machine enclosures is not permitted without authorization?",
          questionTextHi: "क्या आप समझते हैं कि अनुमति के बिना उत्पादन क्षेत्रों या मशीन बाड़ों में प्रवेश की अनुमति नहीं है?",
          questionTextMr: "तुम्हाला समजते का की अधिकृततेशिवाय उत्पादन क्षेत्र किंवा यंत्र संलग्नकांमध्ये प्रवेश करण्याची परवानगी नाही?",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        },
        {
          id: 15,
          emoji: "📍",
          questionText:
            "Will you stay within visitor-approved zones at all times?",
          questionTextHi: "क्या आप हर समय आगंतुक-अनुमोदित क्षेत्रों के भीतर रहेंगे?",
          questionTextMr: "तुम्ही नेहमी अभ्यागत-मंजूर क्षेत्रांमध्ये राहाल का?",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        },
      ],
    },
    {
      sectionTitle: "Traffic Safety on Site",
      sectionTitleHi: "साइट पर यातायात सुरक्षा",
      sectionTitleMr: "साइटवर वाहतूक सुरक्षा",
      questions: [
        {
          id: 16,
          emoji: "🚗",
          questionText:
            "Have you been informed about site traffic rules, including pedestrian walkways and vehicle lanes?",
          questionTextHi: "क्या आपको पैदल यात्री मार्गों और वाहन लेन सहित साइट यातायात नियमों के बारे में सूचित किया गया है?",
          questionTextMr: "तुम्हाला पादचारी मार्ग आणि वाहन लेन समावेश असलेल्या साइट वाहतूक नियमांबद्दल माहिती दिली गेली आहे का?",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        },
        {
          id: 17,
          emoji: "🚶",
          questionText:
            "Will you use zebra crossings or marked pedestrian paths only?",
          questionTextHi: "क्या आप केवल ज़ेबरा क्रॉसिंग या चिह्नित पैदल यात्री मार्गों का उपयोग करेंगे?",
          questionTextMr: "तुम्ही फक्त झेब्रा क्रॉसिंग किंवा चिन्हांकित पादचारी मार्ग वापराल का?",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        },
      ],
    },
  ],
  declaration: {
    statement:
      "I confirm that I have read, understood, and will follow the Allow Wheel Company's safety policies and procedures during my visit.",
    fields: [
      { name: "Visitor Name", type: "text", key: "visitorName" },
      { name: "Company (if applicable)", type: "text", key: "company" },
      { name: "Date", type: "date", key: "date" },
    ],
  },
};
