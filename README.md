# Gate Pass – Visitor Safety Questionnaire

This project is a bilingual/multilingual web application used at the Allow Wheel Company to collect visitor safety declarations before they enter the site. Visitors can complete a detailed safety questionnaire, capture a photo for their badge, and generate a printable checklist/waiver that can be stored or shared with security personnel.

The application is built with Vite + React and is deployed on Netlify.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Environment Setup](#environment-setup)
- [Available Scripts](#available-scripts)
- [Build Outputs](#build-outputs)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [License](#license)

---

## Features

- **Visitor Questionnaire** – 17 safety questions grouped by topic to confirm visitor compliance.
- **Multi-language support** – English, Hindi, and Marathi content via `translations` in `src/questionnaireData.js`.
- **Animated SVG icons** – Each question has a custom animated icon (`src/components/QuestionIcons.jsx`).
- **Photo capture** – Webcam-based photo capture for visitor badges using `react-webcam`.
- **Real-time progress** – Completion bar and validation ensure all questions are answered.
- **Printable checklist** – Generates a formatted checklist ready for printing or PDF export.
- **Downloadable PDF** – Uses `html2canvas` and `jspdf` to export a signed declaration.
- **Responsive design** – Optimized for desktop, tablet, and mobile, including print layout styling.

---

## Tech Stack

- **Frontend**: React 18 with Vite 5
- **Styling**: CSS Modules / standard CSS
- **Utilities**: `react-webcam`, `html2canvas`, `jspdf`, `react-to-print`
- **Build & Tooling**: Vite, ESLint
- **Deployment**: Netlify

---

## Environment Setup

### Prerequisites

- Node.js 18.0+ (recommended)
- npm 9+

### Installation

```bash
git clone https://github.com/Yogesh-developer/gate-pass.git
cd gate-pass
npm install
```

If you need environment variables, create `.env` files (see `.example.env` if available). By default no special keys are required.

---

## Available Scripts

Run these commands from the project root:

### `npm run dev`

Starts the local development server on [http://localhost:5173](http://localhost:5173). Hot module replacement (HMR) is enabled.

### `npm run build`

Builds the production bundle into the `dist/` directory. The output is optimized and ready for deployment.

### `npm run preview`

Serves the production build locally. Useful to verify the `dist/` output before deploying.

### `npm run lint`

Runs ESLint checks.

---

## Build Outputs

- The production build lives in `dist/` (already ignored via `.gitignore`).
- Static assets (logos) are under `public/`.

---

## Deployment

### Netlify (recommended)

The project includes `netlify.toml` for build configuration. Follow these steps:

1. **Build** the project locally (optional but recommended):
   ```bash
   npm run build
   ```
2. **Deploy via Netlify CLI**:
   ```bash
   netlify deploy --prod
   ```
   - Build command: `npm run build`
   - Publish directory: `dist`
3. The site is currently live at `https://gwpl-safety-questionnaire.netlify.app`.

Alternatively, connect the GitHub repository in Netlify to trigger builds automatically on push.

### Other Hosts

Any static host (Vercel, Firebase Hosting, GitHub Pages) can serve the `dist/` directory. Update build/publish commands according to the platform.

---

## Project Structure

```
gate-pass/
├── public/
│   ├── enventoLab.png
│   └── gwpl-logo.png
├── src/
│   ├── components/
│   │   └── QuestionIcons.jsx
│   ├── Questionaries.jsx
│   ├── Questionaries.css
│   ├── questionnaireData.js
│   ├── main.jsx
│   └── ...
├── netlify.toml
├── vite.config.mjs
└── README.md
```

Key files:

- `src/Questionaries.jsx` – Main questionnaire component.
- `src/questionnaireData.js` – Question copy, translations, and configuration.
- `src/components/QuestionIcons.jsx` – Animated SVG icons.
- `src/Questionaries.css` – Styling for the questionnaire and print layout.

---

## Customization

- **Questions & Sections**: Modify `questionnaireData.js` to change text, translations, or structure.
- **Languages**: Update the `translations` object for additional languages or to change strings.
- **Branding**: Replace assets in `public/` and tweak CSS classes (`logo-shield`, `.powered-by-footer`, etc.).
- **Print layout**: Adjust print-specific styling in `Questionaries.css` under `@media print` blocks.

---

## License

This project is proprietary to Allow Wheel Company. All rights reserved. Contact the project maintainers for reuse permissions.

---

## Support

For issues or enhancements, open a ticket in the repository or contact the maintainers directly.
