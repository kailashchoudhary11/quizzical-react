import { fetchData, shuffleArray } from "../utils";
import React from "react";

export default function Questions(props) {
    const {apiUrl, setData} = props;

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
        }

        processData();
	}, [apiUrl]);

    return (
        <div className="questions-container">
            <h1>Questions</h1>
        </div>
    );
}