import React, {Component} from 'react';

import {Card, CardTitle, CardHeader, CardActions} from 'material-ui/Card';
import {RadioButtonGroup, RadioButton} from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';

export class QuestionDetail extends Component {

    voteChoice(event) {
        event.preventDefault();
        // const selectedValue = this.refs.choiceSelection.getSelectedValue();
        // TODO voteSelected Choice
    }

    render() {
        console.log(this.props);
        const {choices, question} = this.props;
        const choicesList = choices.map( (option) => {
            const label = `${option.choice} (${option.votes})`;
            return (
                <RadioButton
                    key={option.url}
                    value={option.url}
                    label={label} />
            );
        });
        return (
            <form className="question-detail" onSubmit={this.voteChoice}>
                <Card>
                    <CardHeader title="Question Detail" />
                    <CardTitle title={`Question: ${question}`} />
                    <RadioButtonGroup ref="choiceSelection" name="choiceSelection" labelPosition="left">
                        {choicesList}
                    </RadioButtonGroup>
                    <CardActions className="question-actions">
                        <RaisedButton label="Vote" type="submit" primary />
                    </CardActions>
                </Card>
            </form>
        );
    }
}
