import type { JSX } from 'react'
import { decode } from 'he'
import clsx from 'clsx';

type FormattedQuestions = {
    question: string;
    correctAnswer: string;
    answers: string[];
    id: string;
    isClicked: boolean;
    isCorrect: boolean;
    clickedIndex: number | null;
    correctIndex: number;
}

type startAnswerProps = {
    startQuiz: () => void
    questions: FormattedQuestions[]
    score:number
}



export default function StartAnswer(props: startAnswerProps): JSX.Element {

    const questionEl = props.questions.map((question,i) => {
            const ansEl = question.answers.map((answer, index) =>
                <button
                    className={clsx({
                                        //blue:  question.clickedIndex === index,
                                        green:  question.correctIndex === index  ,
                                        red: !question.isCorrect && question.clickedIndex === index
                                    })}
                    disabled={true}
                    key={index}>{decode(answer)}</button>)
                    
            return (<div
                        className='question'
                        key={ question.id }>
                <p >{ i + 1 }){question.question}</p>
                {ansEl}
                <hr />
            </div>)
        })
              
    
    
    
    

    return (
        <>
            <section className='section section-answers'>
                
                <div className="answer-container">

                    {questionEl}
                </div>

                <div className='score-container'>

                    <p>You scored {props.score}/{props.questions.length} correct answers</p>
                    <button onClick={ props.startQuiz } >Play Again</button>
                </div>
            </section>
        </>
    )
}