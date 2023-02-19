import { gameState } from "./utils";
import Home from "./components/Home";
import React from "react";
import Preferences from "./components/Preferences";

export default function () {

	const [currentState, setCurrentState] = React.useState(gameState.close);
	const [apiUrl, setApiUrl] = React.useState("");

	return (
		<div>
			{currentState === gameState.close &&
				<Home
					setGameState={setCurrentState}
				/>}

			{currentState === gameState.select &&
				<Preferences
					setGameState={setCurrentState}
					setUrl={setApiUrl}
				/>}
		</div>
	);
}