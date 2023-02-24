import { gameState } from "./utils";
import Home from "./components/Home";
import React from "react";
import Preferences from "./components/Preferences";
import Questions from "./components/Questions";

export default function () {

	const [currentState, setCurrentState] = React.useState(gameState.open);
	const [apiUrl, setApiUrl] = React.useState("");
	const [data, setData] = React.useState([]);
	const [score, setScore] = React.useState(0);

	return (
		<div>
			{currentState === gameState.open &&
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

			{(currentState === gameState.solve || currentState === gameState.close) &&
				<Questions
					apiUrl={apiUrl}
					data={data}
					score={score}
					setData={setData}
					setScore={setScore}
					setState={setCurrentState}
					state={currentState}
				/>
			}
		</div>
	);
}