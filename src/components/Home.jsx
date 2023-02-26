import "./Home.css";
import { gameState } from "../utils";

export default function Home(props) {
    const { prevScores, setGameState } = props;
    const prevScoresTxt = prevScores.join(", ");

    return (
        <div className="start-container">
            <h1 className="title">Quizzical</h1>
            {
                prevScores.length > 0 &&
                <p className="last-scores">Previous Scores: [{prevScoresTxt}]</p>
            }
            <p className="desc">
                Ready to test out your knowledge?
                <br />
                Press the button below 👇
            </p>
            <button className="choose-btn" onClick={() => setGameState(gameState.select)}>Choose Preferences</button>
        </div>
    );
}