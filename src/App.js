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
    }

    render() {
        let component;
        let {questions, question} = this.state;

        if (questions) {
            component = <QuestionsContainer onLoadQuestions={Questions.all} />;
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
