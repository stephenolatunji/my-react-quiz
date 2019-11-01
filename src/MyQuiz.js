import React, { Component } from 'react';
import Questionnaire from '../Questionnaire';
import Questions from './Questions';
import Result from './Result';




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
            <div className="">
                {this.displayContent()}
            </div>
        )
    }
}
export default MyQuiz;
