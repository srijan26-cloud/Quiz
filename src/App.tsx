import React, { useState } from 'react';
//types and component
import { fetchQuestions, Difficulty, QuestionState } from './API';
//component
import QuestionCard from './components/QuestionCard';
//styles
import { GlobalStyle, Wrapper } from './App.styles';

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
}
const TOTAL_QUESTIONS = 10;

const App = () => {

    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<QuestionState[]>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(true);

    console.log(fetchQuestions(TOTAL_QUESTIONS, Difficulty.HARD));

    const startAPI = async () => {
        //initilize every thing

        setLoading(true);   //before the question is loaded
        setGameOver(false);
        const newQuestions = await fetchQuestions(
            TOTAL_QUESTIONS,
            Difficulty.HARD
        );

        setQuestions(newQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);      //after the question is loaded

    };

    const checkAns = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!gameOver) {
            //user ans
            const answer = e.currentTarget.value;
            //check ans against correct ans
            const correct = questions[number].correct_answer === answer;
            //add score if ans is correct
            if (correct) setScore(prev => prev + 1);
            //save ans in the array for user Answer'
            const answerObject = {
                question : questions[number].question,
                answer: answer,
                correct: correct,
                correctAnswer: questions[number].correct_answer,
            };
            setUserAnswers(prev => [...prev, answerObject]);
        }
    };

    const nextQues = () => {
        //move on to the next question if not the last
        const nextQuestion = number + 1;//here number starts from [0,1,...,9]

        if (nextQuestion === TOTAL_QUESTIONS) {
            setGameOver(true);
        }
        else {
            setNumber(nextQuestion);
        }
    };

    return (
        <>
            <GlobalStyle />
            <Wrapper>
            <h1>Computer Quiz</h1>
            {gameOver || userAnswers.length === TOTAL_QUESTIONS ?(
            <button className='start' onClick={startAPI}>
                    Start
            </button>
            ) : null}
            {!gameOver ? (< p className='score'> Score : {score}</p>) : null}
            {loading && (<p > Loading Question : </p>)}     
            {!loading && !gameOver &&
                <QuestionCard
                questionNr={number + 1}
                totalQuestions={TOTAL_QUESTIONS}
                question={questions[number].question}
                answers={questions[number].answers}
                userAnswer={userAnswers ? userAnswers[number] : undefined}
                callback={checkAns}
                />
            }
            {!loading && !gameOver && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS -1 ?
                (<button className='next' onClick={nextQues}>
                Next Question
                </button>)
                :
                null
                }
            </Wrapper>
             </>
    );
};
export default App;
