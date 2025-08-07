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
    correctIndex:number
}

type startQuestionProps = {
    startAnswer: () => void
    questions: FormattedQuestions[]
    click: (id: string, index: number) => void
}

export default function StartQuestion(props: startQuestionProps): JSX.Element {
    
    function handleClick(id:string,index:number):void {
      props.click(id,index)
  }
    
    //console.log("formated questions from Start quiz are", props.questions)
    
    const questionEl = props.questions.map((question,i) => {
        const ansEl = question.answers.map((answer, index) =>
            <button
                className={clsx({
                    blue: question.isClicked && question.clickedIndex === index
                    
                })}
                onClick={() => handleClick(question.id, index)}
                disabled={question.isClicked}
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
            <section className='section section-questions'>
                
                <div className="question-container">
                    {questionEl}
                    
                </div>
                <button
                    className='btn'
                    onClick={props.startAnswer}>Check answers</button>
            </section>
        </>
    )
}