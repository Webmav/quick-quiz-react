# QuickQuiz

A fast, five-question quiz built with React. Enter your details, answer the questions, and see your score at the end.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

## Table of Contents

- [About](#about)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [How It Works](#how-it-works)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Roadmap](#roadmap)
- [Demo](#demo)
- [Author](#author)
- [License](#license)

## About

QuickQuiz is a multi-stage quiz app. The player starts on a **Details** form (name and email), moves through **five questions**, and finishes on a **Score** screen. Applicant details are saved to a local `json-server` backend.

The questions are currently hardcoded. A future version will load them from a JSON file as reusable question cards, so adding more questions will not need any new components.

## Features

- Multi-stage flow: Details, five questions, then Score
- Scoring at 10 points per correct answer
- Applicant details (name and email) saved through a local REST API
- Toast notifications with `react-toastify`
- Client-side routing with React Router
- Styled with Tailwind CSS 4

## Screenshots

<!-- Add your screenshots to a /screenshots folder and update the paths below. -->

| Details | Question | Score |
| :-----: | :------: | :---: |
| ![Details screen](./screenshots/details.png) | ![Question screen](./screenshots/question.png) | ![Score screen](./screenshots/score.png) |

## Tech Stack

| Area | Tools |
| --- | --- |
| UI | React 19, React DOM |
| Routing | React Router 7 |
| Styling | Tailwind CSS 4 (`@tailwindcss/vite`) |
| Notifications | React Toastify |
| Backend (local) | json-server |
| Build tool | Vite 8 |
| Linting | ESLint 10 with React Hooks and React Refresh plugins |

## How It Works

1. **Details:** the player enters a name and email. The data is sent with a `POST` request to `/api/applicants`.
2. **Questions:** five question components (`FirstQuestion` to `FifthQuestion`) are shown one after another.
3. **Score:** the final screen shows the result, calculated as 10 points for each correct answer.

`HomePage.jsx` switches between these stages using submitted-state flags.

During development, Vite proxies `/api` requests to `json-server` on port `8002`, and applicants are stored in `json/applicants.json`. The `json` folder is ignored by Vite's file watcher, so saving an applicant does not trigger a page reload.

> Applicant data is currently only stored and is not used anywhere else in the app.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (a current LTS version, v20.19 or newer, is recommended)
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/Webmav/quick-quiz-react.git

# Move into the project folder
cd quick-quiz-react

# Install dependencies
npm install
```

### Run the app

The app needs two processes running, so open **two terminals** in the project folder.

**Terminal 1: start the web app**

```bash
npm run dev
```

**Terminal 2: start the json-server backend**

```bash
npm run server
```

Then open the local URL that Vite prints in the terminal (usually `http://localhost:5173`).

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run server` | Start `json-server` on port 8002, watching `json/applicants.json` |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint on the project |

## Project Structure

```text
.
├── json
│   └── applicants.json        # json-server data file
├── src
│   ├── assets
│   │   ├── components
│   │   │   ├── Copyright.jsx
│   │   │   ├── Details.jsx
│   │   │   ├── FirstQuestion.jsx
│   │   │   ├── SecondQuestion.jsx
│   │   │   ├── ThirdQuestion.jsx
│   │   │   ├── FourthQuestion.jsx
│   │   │   ├── FifthQuestion.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── NavBar.jsx
│   │   │   └── Score.jsx
│   │   ├── layouts
│   │   │   └── MainLayout.jsx
│   │   └── pages
│   │       └── HomePage.jsx   # controls the quiz flow
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
└── package.json
```

## Roadmap

- [ ] Load questions from a JSON file using reusable question cards
- [ ] Support any number of questions, with the total score adjusting automatically
- [ ] More improvements to come

## Demo

Live demo: _coming soon_

## Author

**Munawar Ali (WebMav)**

- GitHub: [@Webmav](https://github.com/Webmav)
- Portfolio: _coming soon_

## License

Distributed under the MIT License. Add a `LICENSE` file to the repository to make it official.