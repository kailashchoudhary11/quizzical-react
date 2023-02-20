import "./Option.css";

export default function Option(props) {

    const {option, setData} = props;
    const {isCorrect, selected, value} = option;
    const style = "";
    return (
        <div className={`option ${style}`} onClick={props.handleClick} dangerouslySetInnerHTML={{__html: value}}>
        </div>
    );
}