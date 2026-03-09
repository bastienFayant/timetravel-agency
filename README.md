# TimeTravel Agency — Interactive Web App

> A modern, immersive web experience for a fictional luxury time travel agency.

![TimeTravel Agency](https://img.shields.io/badge/version-1.0.0-gold)
![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-4-purple)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3-teal)

---

## Overview

TimeTravel Agency is a premium landing page combined with an interactive AI-powered product experience. The application showcases three luxury time travel destinations while offering personalized recommendations through an intelligent quiz system and an AI chatbot assistant.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| **React** | 18 | UI component architecture |
| **Vite** | 4 | Lightning-fast dev server & bundler |
| **Tailwind CSS** | 3 | Utility-first styling |
| **Framer Motion** | 11 | Animations & transitions |

---

## Features

### 🌐 Landing Page
- Cinematic hero section with parallax effect
- Animated gradient mesh background
- Smooth scroll navigation
- Premium typography (Cormorant Garamond + Josefin Sans)

### 🗺 Destination Gallery
- 3 interactive destination cards (Paris 1889, Crétacé, Florence 1504)
- Hover animations with elevation and glow effects
- Expandable detail panels
- Price, difficulty, and duration badges

### 🤖 AI Chatbot
- Floating chat widget with gold UI
- Rule-based NLP system using keyword detection
- Quick-prompt suggestions
- Typing animation for realism
- Contextual responses about all destinations

### 🧠 Personalized Recommendation Quiz
- 4-step profiling questionnaire
- Weighted scoring algorithm (`recommendationEngine.js`)
- Personalized destination recommendation
- Detailed explanation of the match

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx           # Sticky navigation with scroll behavior
│   ├── Hero.jsx             # Cinematic hero with parallax
│   ├── DestinationsSection.jsx  # Grid layout for destination cards
│   ├── DestinationCard.jsx  # Individual destination card
│   ├── QuizSection.jsx      # AI profiling quiz
│   ├── ChatWidget.jsx       # Floating chatbot
│   └── Footer.jsx           # Footer with links
├── data/
│   ├── destinations.js      # Destination data objects
│   └── faq.js               # Chatbot knowledge base
├── utils/
│   └── recommendationEngine.js  # Scoring algorithm
├── App.jsx
├── main.jsx
└── index.css                # Global styles & design tokens
```

---

## Installation

```bash
# Clone the project
git clone https://github.com/your-repo/timetravel-agency

# Install dependencies
npm install

# Start development server
npm run dev
```

The app runs on `http://localhost:5173`

---

## Build & Deploy

```bash
# Production build
npm run build

# Preview production build
npm run preview
```

### Recommended Deployment: Vercel

1. Push to GitHub
2. Connect repo on [vercel.com](https://vercel.com)
3. Select **Vite** as framework preset
4. Deploy — zero configuration required

---

## AI Tools Used

This project was developed with the assistance of **Claude (Anthropic)** for:

- **Architecture design** — Component structure and data flow planning
- **Code generation** — React components, utility functions, and styling
- **UX writing** — French copy, destination descriptions, chatbot responses
- **Algorithm design** — Weighted scoring matrix for the recommendation engine
- **Design direction** — Dark luxury aesthetic, gold accent system, typography pairing

The AI chatbot in the application itself uses a **rule-based keyword detection system** (not a live LLM) to simulate intelligent responses from a local knowledge base (`src/data/faq.js`).

---

## Design Philosophy

The visual direction draws inspiration from:
- **Apple** — Restraint, negative space, premium feel
- **SpaceX** — Dark cinematic backgrounds, technical aesthetic
- **Luxury travel brands** — Gold accents, editorial typography

Key design decisions:
- **Cormorant Garamond** for display (serif elegance)
- **Josefin Sans** for UI (geometric, refined)
- **DM Mono** for technical labels (precision)
- `#c9951a → #f5d78e` gold gradient as primary accent
- `#070709` near-black as primary background

---

## License

MIT — Feel free to use for educational purposes.
