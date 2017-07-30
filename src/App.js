import React, {Component} from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';

import {Questions} from './models/Questions';

import {QuestionsContainer} from './container/QuestionsContainer';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: true
        };
    }

    render() {
        let component;
        let questions = this.state.questions;
        if (questions) {
            component = <QuestionsContainer {...questions} onLoadQuestions={Questions.all} />
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
