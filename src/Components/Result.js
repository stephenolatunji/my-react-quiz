import React from 'react';


function Result(props) {

    if (props.scorePoint < 5) {
        return (
            <div className="card-body">
                <span> Awful, Your Score is</span><br />
                {props.scorePoint}/10 !
        </div>
        )
    }

    else if (props.scorePoint < 8) {
        return (
            <div className="card-body">
                <span> Nice Try, Your Score is</span><br />
                {props.scorePoint}/10 !
            </div>
        )
    }
    else {
        return (
            <div className="card-body">
                <span> Congrats, Your Score is</span><br />
                {props.scorePoint}/10 !
            </div>
        )
    }
}


export default Result;