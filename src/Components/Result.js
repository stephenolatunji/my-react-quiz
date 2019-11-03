import React from 'react';


function Result(props) {

    if (props.scorePoint < 5) {
        return (
            <div>
                <div className="card-body">
                    <span> Awful, Your Score is</span><br />
                    {props.scorePoint}/10 !
                </div>
            </div>
            
        )
    }

    else if (props.scorePoint < 8) {
        return (
            <div>
                <div className="card-body">
                    <span> Nice Try, Your Score is</span><br />
                    {props.scorePoint}/10 !
                </div>
                <button>Play Again</button>
            </div>
            
        )
    }
    else {
        return (
            <div>
                <div className="card-body">
                    <span> Congrats, Your Score is</span><br />
                    {props.scorePoint}/10 !
                </div>
                <button>Play Again</button>
            </div>
            
        )
    }
}


export default Result;