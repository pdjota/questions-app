import React, {Component} from 'react';
import './App.css';
import AppBar from 'material-ui/AppBar';

import {Questions} from './models/Questions';

import {QuestionsContainer} from './container/QuestionsContainer';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        Questions.all().then( questions => {
            this.setState({
                questions
            });
        }).catch( err => {
            console.log(err);
        })
    }

    render() {
        let component;
        let questions = this.state.questions;
        if (questions) {
            component = <QuestionsContainer {...questions} />
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
