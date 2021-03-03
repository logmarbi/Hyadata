/* eslint-disable */
import React, { Component } from 'react';
import { setupScrollReveal } from '../../assets/js/main.js';
import WelcomeText from '../WelcomeText'

import NewsletterForm from '../forms/NewsletterForm';

class Hero extends Component {
	componentDidMount() {
		setupScrollReveal();
	}

	render() {
		const { title: title, illustration: Illustration, isMainPage: isMainPage } = this.props;

		return (
			<section className="hero" style={{ paddingTop: 300 }}>
				{/* prettier-ignore */}
				<div className="container">
					<div className="hero-inner">
						{isMainPage &&
							<div className="hero-illustration" style={{ paddingRight: 700, marginLeft: -400 }}>
								<Illustration />
							</div>
						}

						{isMainPage
							? <div className="hero-copy" style={{ paddingRight: 0, marginTop: -50 }}>
								<WelcomeText />
								<NewsletterForm className="hero-form" />
							</div>
							: <div className="hero-copy" style={{ margin: 1200, marginTop: -50, }}>
								<div className="container-sm" style={{ margin: 100, textAlign: "center", fontSize: 70 }}>
									<h1 className="hero-title h2-mobile mt-0 is-revealing" style={{ margin: 100, textAlign: "center", fontSize: 100 }}>{title}</h1>
								</div>
								<NewsletterForm className="hero-form" />
							</div>
						}

					</div>
				</div>
			</section>
		);
	}
}

export default Hero;
