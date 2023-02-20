import "./Question.css";
import Option from "./Option";

export default function Question(props) {
    const { question, setData } = props;
    const optionsEl = question.options.map((option, i) => (
        <Option
            key={i}
            option={option}
            setData={setData}
        />
    ));
    return (
        <div className="ques-container">
            <div className="question" dangerouslySetInnerHTML={{ __html: question.questionText }}>
            </div>
            <div className="options">
                {optionsEl}
            </div>
            <hr className="line" />
        </div>
    );
}