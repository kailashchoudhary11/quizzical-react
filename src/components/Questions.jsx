import "./Questions.css"
import { fetchData, gameState, shuffleArray } from "../utils";
import Question from "./Question";
import React from "react";

export default function Questions(props) {
    const { apiUrl, data, score, setData, setScore, setState, state } = props;
    const [loading, setLoading] = React.useState(true);
    const totalScore = data.length;

    const [confirmCheck, setConfirmCheck] = React.useState(false);

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
                            <div>
                                {
                                    !confirmCheck ?
                                        <button className="check-btn" onClick={() => setConfirmCheck(true)}>Check Answers</button>
                                        :
                                        <div className="confirm">
                                            <span className="confirm-txt">Are you sure?</span>
                                            <button className="yes-btn" onClick={handleCheckBtnClick}>Yes</button>
                                            <button className="no-btn" onClick={() => setConfirmCheck(false)}>No</button>
                                        </div>
                                }
                            </div>
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