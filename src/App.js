import React, {Component} from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';

import {Questions} from './models/Questions';

import {QuestionsContainer} from './container/QuestionsContainer';
import {QuestionDetail} from './detail/QuestionDetail';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: true
        };
        this.showDetail = this.showDetail.bind(this);
    }

    showDetail(questionId) {
        console.log('questionId', questionId);
        Questions.detail(questionId)
            .then( question => {
                this.setState({
                    questions: false,
                    question
                });
            }).catch( err => console.log(err));
    }

    render() {
        let component;
        let {questions, question} = this.state;

        if (questions) {
            component = <QuestionsContainer onLoadQuestions={Questions.all} onShowDetail={this.showDetail} />;
        } else if (question) {            
            component = <QuestionDetail {...question} />;
        }

        return (
          <div className="App">
              <AppBar title="Questions Application" showMenuIconButton={false} />
              {component}
          </div>
        );
    }
}

export default App;
