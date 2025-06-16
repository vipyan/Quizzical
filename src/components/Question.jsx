export default function Question({ question, correct, incorrect }) {
  const allAnswers = [...incorrect, correct].sort(() => Math.random() - 0.5);

  return (
    <div className="question">
      <p>{question}</p>
      <div className="answers">
        {allAnswers.map((answer, index) => (
          <button key={index} className="answer-btn">
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}
