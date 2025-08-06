import type { TriviaQuestion } from './App'

export const mockResults: TriviaQuestion[] = [
  {
    category: 'Science & Nature',
    type: 'multiple',
    difficulty: 'easy',
    question: 'What is the chemical symbol for water?',
    correct_answer: 'H₂O',
    incorrect_answers: ['O₂', 'HO₂', 'H₂O₂'],
  },
  {
    category: 'Geography',
    type: 'boolean',
    difficulty: 'easy',
    question: 'The Nile is the longest river in the world.',
    correct_answer: 'True',
    incorrect_answers: ['False'],
  },
  {
    category: 'History',
    type: 'multiple',
    difficulty: 'medium',
    question: 'Which empire was ruled by Suleiman the Magnificent in the 16th century?',
    correct_answer: 'Ottoman Empire',
    incorrect_answers: ['Roman Empire', 'Mughal Empire', 'Holy Roman Empire'],
  },
  {
    category: 'Entertainment: Film',
    type: 'multiple',
    difficulty: 'hard',
    question: 'Who directed the 1958 film “Vertigo”?',
    correct_answer: 'Alfred Hitchcock',
    incorrect_answers: ['Stanley Kubrick', 'Orson Welles', 'Billy Wilder'],
  },
  {
    category: 'Sports',
    type: 'boolean',
    difficulty: 'easy',
    question: 'In tennis, the term "love" means a score of zero.',
    correct_answer: 'True',
    incorrect_answers: ['False'],
  }
]
