import type { JSX } from 'react'

type startQuizProps = {
    startQuiz: () => void
}

export default function startQuiz(props: startQuizProps):JSX.Element {
    return (
        <>
            <section className='section section-start'>
                <h1>Quizzical</h1>
                <p>Challenge your knowledge</p>
                <button onClick={ props.startQuiz }>Start Quiz</button>

            </section>
        </>
    )
}