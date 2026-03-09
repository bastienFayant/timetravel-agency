# TimeTravel Agency — Interactive Web App

> A modern, immersive web experience for a fictional luxury time travel agency.

![Version](https://img.shields.io/badge/version-1.0.0-gold)
![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-4-purple)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3-teal)
![License](https://img.shields.io/badge/license-educational-green)

---

# Live Demo

🌐 **Online application**

https://timetravel-agency-beta.vercel.app/

---

# Overview

TimeTravel Agency is a modern web application created as part of a university project focused on **AI-assisted development and modern web technologies**.

The application simulates a **luxury time travel agency** offering immersive journeys to historical and prehistoric eras.

Users can:

- explore unique time travel destinations
- interact with a virtual travel assistant
- receive personalized travel recommendations
- experience a cinematic and modern web interface

The project demonstrates how **AI-assisted development tools can accelerate frontend development while maintaining high design quality**.

---

# Tech Stack

| Technology | Purpose |
|---|---|
| React | Component-based UI framework |
| Vite | Fast build tool & dev server |
| Tailwind CSS | Utility-first styling |
| Framer Motion | Animations and transitions |
| Node.js / npm | Development environment |
| Vercel | Deployment platform |

---

# Features

## Landing Page

- Cinematic hero section
- Animated gradient background
- Smooth scrolling navigation
- Premium typography system

---

## Destination Gallery

Three luxury time travel experiences are presented through animated cards.

### Paris 1889

Experience the **Belle Époque** during the Universal Exposition and the inauguration of the Eiffel Tower.

Highlights:

- historic Paris atmosphere
- artistic innovation
- cultural elegance

Price: **4900 €**

---

### Crétacé

Travel **65 million years into the past** and explore prehistoric ecosystems.

Highlights:

- adventure exploration
- wildlife observation
- untouched nature

Price: **7900 €**

---

### Florence 1504

Discover the **Italian Renaissance** at the time of Michelangelo and Leonardo da Vinci.

Highlights:

- art and architecture
- renaissance culture
- intellectual exploration

Price: **5400 €**

---

## AI Chatbot Assistant

A floating chatbot widget acts as a **virtual travel concierge**.

Capabilities:

- answers questions about destinations
- provides travel recommendations
- explains prices and activities
- simulates an AI assistant

The chatbot uses a **rule-based natural language simulation with keyword detection**.

---

## Personalized Recommendation Quiz

An interactive quiz helps users determine the **best destination for their profile**.

Features:

- 4 question personality profiling
- weighted scoring algorithm
- personalized recommendation result
- explanation of why the destination matches the user

The algorithm is implemented in:
src/utils/recommendationEngine.js

---

# User Experience

The application focuses on delivering a **premium, immersive experience**.

UX highlights:

- responsive mobile-first layout
- smooth animations
- interactive cards
- elegant dark UI theme
- luxury-inspired visual identity

Animations are powered by **Framer Motion**.

---

# Project Structure
src
├── components
│ ├── Navbar.jsx
│ ├── Hero.jsx
│ ├── DestinationsSection.jsx
│ ├── DestinationCard.jsx
│ ├── QuizSection.jsx
│ ├── ChatWidget.jsx
│ └── Footer.jsx
│
├── data
│ ├── destinations.js
│ └── faq.js
│
├── utils
│ └── recommendationEngine.js
│
├── App.jsx
├── main.jsx
└── index.css

The project follows a **modular React component architecture** for maintainability and scalability.

---

# Installation

Clone the repository:

```bash
git clone https://github.com/bastienFayant/timetravel-agency
