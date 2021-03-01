import React, { Component } from 'react';
import classnames from 'classnames';
import SearchButton from '../SearchButton';
// prettier-ignore

class NewsletterForm extends Component {
	constructor(props) {
		super(props);
		this.state = { email: '' };
	}

	render() {
		const { className, submit = 'Submit' } = this.props;
		const { email } = this.state;

		return (
			<form
				className={classnames(
					'newsletter-form field field-grouped is-revealing',
					className
				)}
			>
				<div className="control control-expanded" />
				<div className="control">
					<SearchButton />
				</div>
			</form>
		);
	}
}

export default NewsletterForm;
