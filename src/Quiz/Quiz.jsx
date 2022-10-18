import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getQuiz } from '../services/quiz';
import { useQuizContext } from '../state/QuizContext';

export default function Quiz() {
  const { category } = useParams();
  const { quizQuestions, setQuizQuestions, setCategory } = useQuizContext();

  useEffect(() => {
    const fetchQuestions = async () => {
      setCategory(category);
      const data = await getQuiz(category);
      console.log(data);
      setQuizQuestions(data.data);
    };
    fetchQuestions();
  }, [category]);

  console.log(quizQuestions);
  return <div>
    {/* {quizQuestions} */}
  </div>;
}
