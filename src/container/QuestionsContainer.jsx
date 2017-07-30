import React, {Component} from 'react';

import {Card, CardTitle, CardText} from 'material-ui/Card';

export class QuestionsContainer extends Component {
	render() {
		return (
			<Card>
				<CardTitle title="Questions" />
				<CardText>{this.props[0].question}</CardText>
			</Card>
		);
	}	
}
