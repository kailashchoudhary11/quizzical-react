import "./Option.css";
import { gameState } from "../utils";

export default function Option(props) {

    const { isCorrect, selected, value } = props.option;
    let style = "";

    if (props.state === gameState.close) {
        if (isCorrect) {
            style = "correct";
        } else if (selected && !isCorrect) {
            style = "incorrect";
        } else {
            style = "check";
        }
    } else if (selected) {
        style="selected";
    }

    return (
        <div className={`option ${style}`} onClick={props.handleOptionClick} dangerouslySetInnerHTML={{ __html: value }}>
        </div>
    );
}