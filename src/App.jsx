import { useState, useEffect, useRef } from "react";
import Intro from "./components/Intro";
import Test from "./components/Test";
import Answers from "./components/Answers.jsx";

export default function App() {
  const [quizData, setQuizData] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const didFetch = useRef(false);

  useEffect(() => {
    if (didFetch.current) return;
    didFetch.current = true;

    async function fetchQuizData() {
      try {
        const res = await fetch("https://opentdb.com/api.php?amount=3");
        const data = await res.json();
        setQuizData(data.results);
      } catch (err) {
        console.error(err);
      }
    }

    fetchQuizData();
  }, []);

  console.log("Quiz Data:from app", quizData);

  function helper() {
    setQuizStarted(true);
    setIsHidden(true);
    setShowQuestion(true);
  }

  function helperShowAnswer() {
    {
      setShowAnswer(true);
      setShowQuestion(false);
    }
  }

  console.log("Quiz started", quizStarted);
  console.log("Show question is", showQuestion);
  console.log("Show answer is", showAnswer);

  return (
    <main className="app-container">
      {!quizStarted && <Intro click={helper} />}
      {quizStarted &&
        !showAnswer &&
        (!quizData || quizData.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <Test
            click={helperShowAnswer}
            showQuestion={showQuestion}
            data={quizData}
          />
        ))}
      {quizStarted && showAnswer && !showQuestion && <Answers />}
    </main>
  );
}
