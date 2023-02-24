import "./Questions.css"
import { fetchData, gameState, shuffleArray } from "../utils";
import Question from "./Question";
import React from "react";

export default function Questions(props) {
    const { apiUrl, data, score, setData, setScore, setState, state } = props;
    const [loading, setLoading] = React.useState(true);
    const totalScore = data.length;

    React.useEffect(() => {
        async function processData() {
            const data = (await fetchData(apiUrl)).results;

            const questionsData = data.map((question) => {
                const correctAns = question.correct_answer;

                let options = question.incorrect_answers;
                options.push(correctAns);
                options = shuffleArray(options);

                options = options.map(option => ({
                    value: option,
                    selected: false,
                    isCorrect: option === correctAns
                }));

                return {
                    questionText: question.question,
                    options: options,
                };
            });

            setData(questionsData);
            setLoading(false);
        }

        processData();
    }, [apiUrl]);

    const questionEls = data.map((question, i) => (
        <Question
            key={i}
            question={question}
            setData={setData}
            state={state}
        />
    ));


    function handleCheckBtnClick(event) {
        setState(gameState.close);
        setScore(calculateScore());
    }

    function calculateScore() {
        const score = data.reduce((tScore, cQues) => (
            tScore + cQues.options.reduce((temp, cOption) => (
                cOption.selected && cOption.isCorrect ? temp + 1 : temp + 0
            ), 0)
        ), 0);
        return score;
    }

    return (
        <>
            {loading ?
                <div className="loader-container">
                    <div className="spinner"></div>
                </div>
                :
                <div className="questions-container">
                    <h1 className="app-title">Quizzical</h1>
                    {questionEls}
                    {
                        state === gameState.solve ? 
                        <button className="check-btn" onClick={handleCheckBtnClick}>Check Answers</button>
                        :
                        <div className="play-again-cont">
                            <span className="score-text">
                                You scored {score} / {totalScore} correct answers
                            </span>
                            <button className="play-again-btn">Play again</button>
                        </div> 
                    }
                </div>
            }
        </>
    );
}