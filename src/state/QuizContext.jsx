import { createContext, useState, useContext } from 'react';

const QuizContext = createContext();

export default function QuizProvider({ children }) {
  const [category, setCategory] = useState('');
  const [quizQuestions, setQuizQuestions] = useState([]);

  const value = {
    category,
    setCategory,
    quizQuestions,
    setQuizQuestions,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}

export function useQuizContext() {
  return useContext(QuizContext);
}
