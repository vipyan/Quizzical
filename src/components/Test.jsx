import Question from "./Question";
export default function Test({ click, data, showQuestion }) {
  try {
    const question = data.map((item) => {
      //   const incorrect = item.incorrect_answers.map(
      //     (question) => question.incorrect_answers
      //   );
      return (
        <Question
          key={item.question}
          question={item.question}
          correct={item.correct_answer}
          incorrect={item.incorrect_answers}
        />
      );
    });

    return (
      <section className={`test ${showQuestion ? "" : "hidden"}`}>
        {question}

        <button onClick={click} className="btn">
          Check answers
        </button>
      </section>
    );
  } catch (err) {
    console.log("error", err);
  }
}
