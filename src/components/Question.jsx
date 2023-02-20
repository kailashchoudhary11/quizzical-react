import "./Question.css";

export default function Question(props) {
    const { question } = props;

    return (
        <div className="ques-container">
                <div className="question" dangerouslySetInnerHTML={{__html: question.questionText}}>
                </div>
                <div className="options">
                    {/* {optionsComp} */}
                </div>
            <hr className="line"/>
        </div>
    );
}