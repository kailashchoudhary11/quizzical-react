import "./Questions.css"
import { fetchData, shuffleArray } from "../utils";
import Question from "./Question";
import React from "react";

export default function Questions(props) {
    const { apiUrl, data, setData } = props;
    const [loading, setLoading] = React.useState(true);

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
        />
    ));

    return (
        <>
            {loading ?
                <div className="loader-container">
                    <div className="spinner"></div>
                </div>
                :
                <div className="questions-container">
                    <h1 className="title">Quizzical</h1>
                    {questionEls}
                </div>
            }
        </>
    );
}