import { gameState } from "./utils";
import Home from "./components/Home";
import React from "react";
import Preferences from "./components/Preferences";
import Questions from "./components/Questions";

export default function () {

	const [apiUrl, setApiUrl] = React.useState("");
	const [currentState, setCurrentState] = React.useState(gameState.open);
	const [data, setData] = React.useState([]);
	const [prevScores, setPrevScores] = React.useState(JSON.parse(localStorage.getItem("prev-scores")) || []);
	const [score, setScore] = React.useState(0);

	function newQuiz() {
		setScore(0);
		setApiUrl("");
		setData([]);
		setCurrentState(gameState.open);
	}

	return (
		<div>
			{currentState === gameState.open &&
				<Home
					setGameState={setCurrentState}
					prevScores={prevScores}
				/>
			}

			{currentState === gameState.select &&
				<Preferences
					setGameState={setCurrentState}
					setUrl={setApiUrl}
				/>
			}

			{(currentState === gameState.solve || currentState === gameState.close) &&
				<Questions
					apiUrl={apiUrl}
					data={data}
					newQuiz={newQuiz}
					prevScores={prevScores}
					score={score}
					setData={setData}
					setPrevScores={setPrevScores}
					setScore={setScore}
					setState={setCurrentState}
					state={currentState}
				/>
			}
		</div>
	);
}