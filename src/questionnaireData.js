// Questionnaire data
export const questionnaireData = {
  title: "Visitor Safety Questionnaire -- Extended Version",
  sections: [
    {
      sectionTitle: "General Safety Awareness",
      questions: [
        {
          id: 1,
          questionText: "Have you signed in at the security/reception desk?",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        },
        {
          id: 2,
          questionText:
            "Have you received a site safety induction or briefing?",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        },
        {
          id: 3,
          questionText:
            "Do you agree to follow all posted safety signs and instructions?",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        },
        {
          id: 4,
          questionText:
            "Do you understand that failure to follow safety rules may result in removal from the site?",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        },
      ],
    },
    {
      sectionTitle: "PPE & Clothing",
      questions: [
        {
          id: 5,
          questionText: "Are you wearing closed-toe, non-slip footwear?",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        },
        {
          id: 6,
          questionText:
            "Are you wearing loose clothing, scarves, or jewelry that could get caught in machinery?",
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
          questionText:
            "Are you carrying any personal items that must be declared (e.g., tools, electronics)?",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        },
      ],
    },
    {
      sectionTitle: "Work Area Rules",
      questions: [
        {
          id: 8,
          questionText:
            "Do you understand that eating, drinking, or smoking is only allowed in designated areas?",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        },
        {
          id: 9,
          questionText:
            "Will you avoid using your phone while walking or in work areas?",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        },
        {
          id: 10,
          questionText:
            "Do you agree not to interfere with any ongoing work processes or employees at work?",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        },
      ],
    },
    {
      sectionTitle: "Emergency & Incident Protocol",
      questions: [
        {
          id: 11,
          questionText:
            "Do you know how to report an accident, injury, or near miss?",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        },
        {
          id: 12,
          questionText:
            "Have you been shown the location of first aid stations?",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        },
        {
          id: 13,
          questionText:
            "In case of emergency, do you know who your emergency contact on-site is?",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        },
      ],
    },
    {
      sectionTitle: "Restricted Areas",
      questions: [
        {
          id: 14,
          questionText:
            "Do you understand that entry into production areas or machine enclosures is not permitted without authorization?",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        },
        {
          id: 15,
          questionText:
            "Will you stay within visitor-approved zones at all times?",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        },
      ],
    },
    {
      sectionTitle: "Traffic Safety on Site",
      questions: [
        {
          id: 16,
          questionText:
            "Have you been informed about site traffic rules, including pedestrian walkways and vehicle lanes?",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        },
        {
          id: 17,
          questionText:
            "Will you use zebra crossings or marked pedestrian paths only?",
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
