import React from 'react';


function QuestionOption(props) {

    let optionValue = props.value;

    return (
        <div onClick={() => props.scoreQuestion(props.value)} id="option">

            <p>{optionValue}</p>
        </div>
    )
}


export default QuestionOption;
