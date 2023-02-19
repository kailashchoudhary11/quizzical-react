import { fetchData, shuffleArray } from "../utils";
import React from "react";

export default function Questions(props) {
    const {apiUrl, setData} = props;
    console.log(apiUrl);

    React.useEffect(() => {
		async function processData() {
            const data = (await fetchData(apiUrl)).results;
            data.map((question) => {
                const correctAns = question.correct_answer;
                let options = question.incorrect_answers;
                options.push(correctAns);
                options = shuffleArray(options);
            });
        }
        processData();
	}, [apiUrl]);

    return (
        <div className="questions-container">
            <h1>Questions</h1>
        </div>
    );
}