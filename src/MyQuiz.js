import React, { Component } from 'react';
import Questionnaire from './Questionnaire';
import Questions from './Components/Questions';
import Result from './Components/Result';
import { Container, Menu, Card, Button } from 'semantic-ui-react';






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
        this.replayGame = this.replayGame.bind(this);
       
    }

    displayContent() {
        if (this.state.questionIndex < this.state.questionArray.length) {
            return <Questions content={this.state.questionArray[this.state.questionIndex]} scoreQuestion={this.scoreQuestion} />
        }
        return (
            <div>
                <Result scorePoint={this.state.scorePoint} />  
            </div> 
        )
    };

    replayGame(){
        this.setState({
            questionIndex: 0,
            questionArray: Questionnaire(),
            scorePoint: 0
        })
    };


    scoreQuestion(value) {
        let question = this.state.questionArray[this.state.questionIndex];
        this.setState((state) => {

            return { ...state.questionIndex++ }
        })

        if (value == question.answer) {
            this.setState((state) => {
                return { ...state.scorePoint++ }
            })

        }
    };

    render() {

        return (
            <div>
                <Menu inverted color='teal'>
                    <div>
                    <h3>Mckorr Geography Quiz</h3>
                    </div>
                </Menu>
                <Container textAlign='center'>
                    <Card centered color='red'>
                        <Card.Header>
                            <h1>How Well Do You Know Geography?</h1>
                        </Card.Header>
                        <div>{this.displayContent()}</div>
                        <div className="card-footer inverted text-muted"></div>
                    </Card>
                    <div>
                        <Button compact color='red' onClick={this.replayGame}>Restart Game</Button>
                    </div>
                </Container>
            </div>
            
        )
    }
};
export default MyQuiz;
 