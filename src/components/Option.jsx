import "./Option.css";

export default function Option(props) {

    const { isCorrect, selected, value } = props.option;
    const style = selected ? "selected": "";

    return (
        <div className={`option ${style}`} onClick={props.handleOptionClick} dangerouslySetInnerHTML={{ __html: value }}>
        </div>
    );
}