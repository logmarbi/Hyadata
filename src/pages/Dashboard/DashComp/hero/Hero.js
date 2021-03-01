import React, { Component } from 'react';
import { setupScrollReveal } from './main.js';
import WelcomeText from '../WelcomeText';
import NewsletterForm from '../forms/NewsletterForm';

class Hero extends Component {
	componentDidMount() {
		setupScrollReveal();
	}
	// prettier-ignore

	render() {
		const {
			title,
			secondContent,
			content,
			illustration: Illustration } = this.props;


		return (
			<>
				<section className="hero" style={{ paddingTop: 300 }}>
					{/* prettier-ignore */}
					<div className="container">
						<div className="hero-inner">
							<div className="hero-illustration" style={{ paddingRight: 600, marginLeft: -400 }}>
								<Illustration />
							</div>
							<div className="hero-copy" style={{ paddingRight: 0, marginTop: -50 }}>
								<WelcomeText />
								<NewsletterForm className="hero-form" submit="חפש" />
							</div>
						</div>
					</div>
				</section>
			</>
		);
	}
}

export default Hero;
