import React from "react";
import "./Preferences.css";
import { categories, difficulties, gameState } from "../utils";

export default function Preferences(props) {

    const {setGameState} = props;

    const categoryOptEls = categories.map((category, i) => (
        <option key={i} value={category}>{category}</option>
    ));

    const difficultyOptEls = difficulties.map((difficulty, i) => (
        <option key={i} value={difficulty}>{difficulty}</option>
    ));

    function startQuiz() {
        setGameState(gameState.solve);
    }

    return (
        <div className="container">
            <h1 className="title">Choose Preferences</h1>
            <form action="preferences-form">

                <label className="select-label" htmlFor="questions">Number of Questions: </label>
                <input
                    className="input-el"
                    defaultValue="10"
                    id="questions"
                    min={5}
                    max={30}
                    type="number"
                />

                <label className="select-label" htmlFor="category">Select Category: </label>
                <select name="category" id="category" className="select-el">
                    {categoryOptEls}
                </select>

                <label className="select-label" htmlFor="difficulty">Select Difficulty: </label>
                <select name="difficulty" id="difficulty" className="select-el">
                    {difficultyOptEls}
                </select>
                <button className="start-btn" onClick={startQuiz}>Start Quiz</button>
            </form>
        </div>
    );
}