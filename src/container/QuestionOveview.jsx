import React, {Component} from 'react';

import {Card, CardTitle, CardHeader, CardText} from 'material-ui/Card';

export class QuestionOveview extends Component {

    render() {
        const {question, published_at, choices} = this.props;
        const questionDate = (new Date(published_at)).toDateString();
        return (
            <Card className="question-overview">
                <CardTitle title={question} />
                <CardHeader title={questionDate} />
                <CardText>Choices: {choices.length} </CardText>
            </Card>
        );
    }
}
