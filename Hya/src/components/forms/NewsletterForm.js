/* eslint-disable */

import React, { Component } from 'react';
import classnames from 'classnames';

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
				<div className="control control-expanded">
					<div class="text-center subcribe-form mt-4">
						<form action="#">
							<input type="text" class="inputform" size="45" />
							<button type="submit" class="btn rounded-pill btn-purple">חפש</button>
						</form>
						{/* <ParticleEffectButton/> */}
					</div>
				</div>

			</form>
		);
	}
}

export default NewsletterForm;
