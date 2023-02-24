import "./Question.css";
import { gameState } from "../utils";
import Option from "./Option";

export default function Question(props) {

    const { state, question, setData } = props;

    const optionsEl = question.options.map((option, i) => (
        <Option
            key={i}
            option={option}
            handleOptionClick={handleOptionClick}
            state={state}
        />
    ));

    function handleOptionClick(event) {
        if (state === gameState.solve) {
            const value = event.target.textContent;
            setData(prevData => {
                const i = prevData.indexOf(question);
                let opts = prevData[i].options;
                opts = opts.map(opt => ({ ...opt, selected: opt.selected === true ? false : opt.value === value }));
                const newData = prevData.map(data => ({ ...data, options: data === question ? opts : data.options }));
                return newData;
            })
        }
    }

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