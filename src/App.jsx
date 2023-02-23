import { gameState } from "./utils";
import Home from "./components/Home";
import React from "react";
import Preferences from "./components/Preferences";
import Questions from "./components/Questions";

export default function () {

	const [currentState, setCurrentState] = React.useState(gameState.close);
	const [apiUrl, setApiUrl] = React.useState("");
	const [data, setData] = React.useState([]);
	const [score, setScore] = React.useState(0);

	return (
		<div>
			{currentState === gameState.close &&
				<Home
					setGameState={setCurrentState}
				/>
			}

			{currentState === gameState.select &&
				<Preferences
					setGameState={setCurrentState}
					setUrl={setApiUrl}
				/>
			}

			{currentState === gameState.solve &&
				<Questions
					apiUrl={apiUrl}
					setData={setData}
					data={data}
					state={currentState}
					setScore={setScore}
				/>
			}
		</div>
	);
}