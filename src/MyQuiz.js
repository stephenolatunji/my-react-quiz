import React, { Component } from 'react';
import Questionnaire from './Questionnaire';
import Questions from './Components/Questions';
import Result from './Components/Result';




class MyQuiz extends Component {
    constructor() {
        super();
        this.state = {
            questionArray: Questionnaire(),
            questionIndex: 0,
            scorePoint: 0
        }
        this.displayContent = this.displayContent.bind(this);
        this.scoreQuestion = this.scoreQuestion.bind(this);

    }

    displayContent() {
        if (this.state.questionIndex < this.state.questionArray.length) {
            return <Questions content={this.state.questionArray[this.state.questionIndex]} scoreQuestion={this.scoreQuestion} />
        }
        return (
            <Result scorePoint={this.state.scorePoint} />
        )
    }

    scoreQuestion(value) {
        console.log('score is', value)

        let question = this.state.questionArray[this.state.questionIndex];
        this.setState((state) => {

            return { ...state.questionIndex++ }
        })

        if (value == question.answer) {
            this.setState((state) => {
                return { ...state.scorePoint++ }
            })

        }
    }

    render() {

        return (
            <div>

                <nav className="navbar sticky-top" id="nav">McKorr Quiz App</nav>
                <div className="container">
                    <div className="card">
                        <div className="card-header">
                            <h1>How Well Do You Know Geography?</h1>
                        </div>
                        <div>{this.displayContent()}</div>
                        <div className="card-footer text-muted">Stephen Olatunji</div>
                    </div>
                </div>
            </div>
            
        )
    }
}
export default MyQuiz;
 