
# Quizzical

Quizzical is a simple React + TypeScript quiz application that fetches trivia questions from the [Open Trivia Database](https://opentdb.com/). Users can test their knowledge, check answers, see their score, and play again.

## Features

- Fetches 5 random trivia questions (multiple choice and true/false)
- Highlights correct and incorrect answers after submission
- Displays your score after completing the quiz
- Option to play again
- Responsive and clean UI

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/Quizzical.git
    cd Quizzical
    ```

2. **Install dependencies:**
    ```sh
    npm install
    # or
    yarn
    ```

3. **Start the development server:**
    ```sh
    npm run dev
    # or
    yarn dev
    ```

4. **Open your browser to** [http://localhost:5173](http://localhost:5173) **(or as indicated in your terminal).**

## Project Structure

```
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── StartQuiz.tsx
│   │   ├── StartQuestion.tsx
│   │   └── StartAnswer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── mock-data.ts
│   └── index.css
├── index.html
├── package.json
├── tsconfig*.json
└── vite.config.ts
```

## Acknowledgements

- [Open Trivia Database](https://opentdb.com/) for the trivia questions API

