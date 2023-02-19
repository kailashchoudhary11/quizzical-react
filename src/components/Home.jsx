import "./Home.css";
import { gameState } from "../utils";

export default function Home(props) {
    const {setGameState} = props

    return (
        <div className="start-container">
            <h1 className="title">Quizzical</h1>
            <p className="desc">Some description if needed</p>
            <button className="choose-btn" onClick={() => setGameState(gameState.select)}>Choose Preferences</button>
        </div>
    );
}