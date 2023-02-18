import "./Home.css";
import { gameState } from "../utils";

export default function Home(props) {
    function startQuiz() {
        props.setGameState(gameState.open);
    }

    return (
        <div className="start-container">
            <h1 className="title">Quizzical</h1>
            <p className="desc">Some description if needed</p>
            <button className="choose-btn" onClick={startQuiz}>Choose Preferences</button>
        </div>
    );
}