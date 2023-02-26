import React from "react";
import "./Preferences.css";
import {baseUrl, categories, difficulties, gameState, initialData } from "../utils";

export default function Preferences(props) {

    const { setGameState, setUrl } = props;

    const [formData, setFormData] = React.useState(initialData);

    const categoryOptEls = categories.map((category, i) => (
        <option key={i} value={category}>{category}</option>
    ));

    const difficultyOptEls = difficulties.map((difficulty, i) => (
        <option key={i} value={difficulty}>{difficulty}</option>
    ));

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData, [name]: value
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        const {category, difficulty, questions} = formData;

        let endPoint = `?amount=${questions}`;
        if (category !== categories[0]) {
            endPoint += `&category=${categories.indexOf(category) + 8}`;
        }
        if (difficulty !== difficulties[0]) {
            endPoint += `&difficulty=${difficulty.toLowerCase()}`;
        }
        endPoint += "&type=multiple";
        setUrl(baseUrl + endPoint);
        setGameState(gameState.solve);
        setFormData(initialData);
    }
    return (
        <div className="container">
            <h1 className="title">Choose Preferences</h1>
            <form
                action="preferences-form"
                onSubmit={handleSubmit}
            >

                <label className="select-label" htmlFor="questions">Number of Questions: </label>
                <input
                    className="input-el"
                    id="questions"
                    min={1}
                    max={30}
                    name="questions"
                    onChange={handleChange}
                    type="number"
                    value={formData.questions}
                />

                <label className="select-label" htmlFor="category">Select Category: </label>
                <select
                    className="select-el"
                    id="category"
                    name="category"
                    onChange={handleChange}
                    value={formData.category}
                >
                    {categoryOptEls}
                </select>

                <label className="select-label" htmlFor="difficulty">Select Difficulty: </label>
                <select
                    className="select-el"
                    id="difficulty"
                    name="difficulty"
                    onChange={handleChange}
                    value={formData.difficulty}
                >
                    {difficultyOptEls}
                </select>
                <button className="start-btn">Start Quiz</button>
            </form>
        </div>
    );
}