import React from 'react';
import QuestionOption from './QuestionOption';

function Questions(props) {
    let questionBody = props.content;


    const displayOptions = () => {
        return questionBody.option.map((option, i) => <QuestionOption value={option} key={i} scoreQuestion={props.scoreQuestion} />)
    }

    return (
        <div>
            <p id="question">{questionBody.question}</p>
            {displayOptions()}
        </div>
    )
}

export default Questions;