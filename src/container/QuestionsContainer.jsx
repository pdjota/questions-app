import React, {Component} from 'react';

import {Card, CardTitle} from 'material-ui/Card';

import {QuestionOveview} from './QuestionOveview';

export class QuestionsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: []
        };
    }

    componentDidMount() {
        this.props.onLoadQuestions().then( questions => {
            this.setState({
                questions
            });
        }).catch( err => {
            console.log(err);
        });
    }

    render() {
        let questionsComponents;
        questionsComponents = this.state.questions.map( question => {
            return (
                <QuestionOveview
                    {...question}
                    key={question.id} />
            );
        });
        return (
            <Card>
                <CardTitle title="Questions" />
                <div className="questions-container">
                    {questionsComponents}
                </div>
            </Card>
        );
    }
}
