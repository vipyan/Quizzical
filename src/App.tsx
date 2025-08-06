import { useState, useEffect, useRef } from 'react'
import type { JSX } from 'react'
import StartQuiz from "./components/StartQuiz"
import StartQuestion from './components/StartQuestion'
import StartAnswer from './components/StartAnswer' 
import { nanoid } from 'nanoid';
import { decode } from 'he'
import { mockResults } from './mock-data'

export type TriviaQuestion = {
  category: string;
  type: 'multiple' | 'boolean';
  difficulty: 'easy' | 'medium' | 'hard';
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

// type TriviaResponse = {
//   response_code: number;
//   results: TriviaQuestion[];
// }

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


function App(): JSX.Element {

  const [isStartQuiz, setIsStartQuiz] = useState<boolean>(true)
  const [shouldShowQuestions, setShouldShowQuestions] = useState<boolean>(false)
  const [shouldShowAnswer, setShouldShowAnswer] = useState<boolean>(false)
  const [questions, setQuestions] = useState<FormattedQuestions[]>([])
  const [isGameOver, setIsGameOver] = useState<boolean>(false)
  
  
  

  const didFetch = useRef(false);
  
  

 useEffect(() => {
  if (didFetch.current) return
  didFetch.current = true

  const useMock = false  // toggle this to switch
  let p: Promise<{ results: TriviaQuestion[] }>

  if (useMock) {
    p = Promise.resolve({ results: mockResults })
  } else {
    p = fetch('https://opentdb.com/api.php?amount=5')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
  }

   p.then((data) => {
     
     
     
     
     const formattedQuestions: FormattedQuestions[] = data.results.map((question) => {
      const answers:string[] = [...question.incorrect_answers, question.correct_answer]
      return {
        question: decode(question.question),
        correctAnswer: question.correct_answer,
        answers: answers.sort(() => Math.random() - 0.5),
        id: nanoid(),
        isClicked: false,
        isCorrect: false,
        clickedIndex: null,
        correctIndex:answers.indexOf(question.correct_answer)
      }
     })
     
     return setQuestions(formattedQuestions)
   })
   .catch(err => console.error('Error fetching data', err))
}, [isGameOver])

  //Derived values
  const score:number = questions.filter(question => question.isCorrect).length
  
  // Functions

  function processQuestionClick(id:string,index:number):void {
  
    setQuestions(prev => prev.map(question => {
      if (question.id === id) { 
        
        return {
          ...question,
          isClicked: true,
          isCorrect: question.answers[index] === question.correctAnswer,
          clickedIndex: index
        }
      }
      return question
    }))

  }

  
  
  function startQuiz():void {
    setIsStartQuiz(false)
    setShouldShowQuestions(true)
  }
  function checkAnswers():void {
    setShouldShowQuestions(false)
    setShouldShowAnswer(true)
  }
   function playAgain():void {
    setShouldShowAnswer(false)
     setIsStartQuiz(true)
     didFetch.current = false
     setIsGameOver(prev => !prev)
  }


  return (
    <>
      
      
      {/* Start section */}
      { isStartQuiz && <StartQuiz startQuiz={ startQuiz } />}

      {/* Question section */}
      {shouldShowQuestions && <StartQuestion
                                            click = {processQuestionClick}
                                            questions={questions}
                                            startAnswer={checkAnswers} />}
                                  

      {/* Answer section */}
      {shouldShowAnswer && <StartAnswer
                                        score = {score}
                                        questions={questions}
                                        startQuiz={playAgain} />}

    </>
  )
}

export default App
