import React from 'react';
// import { Button } from 'semantic-ui-react';


function Result(props) {

    if (props.scorePoint < 5) {
        return (
            <div>
                <span> Awful, Your Score is</span><br />
                {props.scorePoint}/10 !
            </div>
    
        )
    }

    else if (props.scorePoint < 8) {
        return (
            <div>
                <span> Nice Try, Your Score is</span><br />
                {props.scorePoint}/10 !
            </div>
            
        )
    }
    else {
        return (
            <div>
                <span> Congrats, Your Score is</span><br />
                {props.scorePoint}/10 !
            </div>
        )
    }
}


export default Result;