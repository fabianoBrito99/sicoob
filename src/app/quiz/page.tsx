"use client"
import { useEffect, useState } from 'react';
import Quiz from '../../../componentes/Quiz';
import Result from '../../../componentes/Result';

type QuestionType = {
  question: string;
  options: string[];
  answer: string;
};

function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function QuizPage() {
  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    fetch('/questions.json')
      .then(res => res.json() as Promise<QuestionType[]>)
      .then(data => {
        const shuffled = shuffleArray(data).slice(0, 5);
        setQuestions(shuffleArray(shuffled)); // embaralha ordem das 5
      });
  }, []);

  const handleAnswer = (selected: string) => {
    if (selected === questions[current].answer) {
      setScore(prev => prev + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  if (questions.length === 0) return <div>Carregando...</div>;

  return (
    <>
      {!showResult ? (
        <Quiz 
          question={questions[current]} 
          questionNumber={current + 1} 
          total={questions.length}
          onAnswer={handleAnswer}
        />
      ) : (
        <Result score={score} total={questions.length} />
      )}
    </>
  );
}
