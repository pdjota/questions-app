import React, {Component} from 'react';

import {Card, CardTitle, CardHeader, CardText, CardActions} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export class QuestionOveview extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        this.props.onShowDetail && this.props.onShowDetail(this.props.id);
    }

    render() {
        const {question, published_at, choices} = this.props;
        const questionDate = (new Date(published_at)).toDateString();
        return (
            <Card className="question-overview">
                <CardTitle title={question} />
                <CardHeader title={questionDate} />
                <CardText>Choices: {choices.length} </CardText>
                <CardActions className="question-actions">
                    <FlatButton label="Vote" primary onClick={this.handleClick}/>
                </CardActions>
            </Card>
        );
    }
}
