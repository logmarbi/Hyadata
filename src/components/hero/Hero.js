/* eslint-disable */
import React, { Component, useState } from 'react';
import { setupScrollReveal } from '../../assets/js/main.js';
import WelcomeText from '../WelcomeText'
import Move from './move'
import NewsletterForm from '../forms/NewsletterForm';
import Fade from 'react-reveal/Fade';
// import Card from '../Cards/TestCard'
import Card from '../Cards/App'
import {Row} from 'react-bootstrap'
import GridCard from '../Cards/TestCard.js';
class Hero extends Component {

	componentDidMount() {
		setupScrollReveal();
	}

	constructor(props) {
		super(props);
		this.state = { show: true };
		this.handleClick = this.handleClick.bind(this);
		this.handleCallback = this.handleCallback.bind(this);

	}
	handleClick() {
		this.setState({ show: !this.state.show });
	}

	handleCallback(childData) {
		this.setState({ show: childData });
	}

	render() {
		const { title: title, illustration: Illustration, isMainPage: isMainPage } = this.props;

		return (
			<section className="hero">
				{/* prettier-ignore */}
				<div className="container"  style={{  marginTop: 20 }} >
					<div 
					className="hero-inner"
					>
						{isMainPage &&
							<div className="hero-illustration" style={{ paddingTop : 200 }}>
																<Fade left collapse when={this.state.show}>
								{/* <Illustration /> */}
								</Fade >

							</div>
						}



						{isMainPage
							? <div className="hero-copy" style={{ minWidth:1000, paddingRight: 0, marginTop: -50 }}>
								<Fade right collapse when={this.state.show}>
									<div 
									style={{  paddingTop: 160, }}
									>
										<WelcomeText />
									</div>
								</Fade >

								{/* <GridCard cols={1}  > */}
								<NewsletterForm className="hero-form" parentCallback={this.handleCallback} style={{  paddingTop: 260, }}/>
								<Fade left collapse when={!this.state.show}>
								<Card/>
								</Fade >
								{/* </GridCard> */}
							

							</div>
							: <div className="hero-copy" style={{ minWidth:1000, paddingRight: 0, marginTop: -300 }}>
								<div className="container-sm" style={{ margin: 100, textAlign: "center", fontSize: 70 }}>
									<Fade right collapse when={this.state.show}>
										<h1 className="hero-title h2-mobile mt-0" style={{   textShadow: "2px 2px 7px #7d7d7d", margin: 100, textAlign: "start", marginRight: -15, paddingTop: 250, fontSize: 100, marginBottom: -130 }}>{title}</h1>
									</Fade >

								</div>
								<Fade right collapse when={this.state.show} >

									<WelcomeText />
								</Fade>

								<NewsletterForm className="hero-form" parentCallback={this.handleCallback} />
							</div>
						}

					</div>
				</div>
			</section>
		);
	}
}

export default Hero;

























// /* eslint-disable */
// import React, { Component } from 'react';
// import { setupScrollReveal } from '../../assets/js/main.js';
// import WelcomeText from '../WelcomeText'

// import NewsletterForm from '../forms/NewsletterForm';

// class Hero extends Component {
// 	componentDidMount() {
// 		setupScrollReveal();
// 	}

// 	render() {
// 		const { title: title, illustration: Illustration, isMainPage: isMainPage } = this.props;

// 		return (
// 			<section className="hero" style={{ paddingTop: 300 }}>
// 				{/* prettier-ignore */}
// 				<div className="container">
// 					<div className="hero-inner">
// 						{isMainPage &&
// 							<div className="hero-illustration" style={{ paddingRight: 500, marginLeft: -400 }}>
// 								<Illustration />
// 							</div>
// 						}

// 						{isMainPage
// 							? <div className="hero-copy" style={{ paddingRight: 0, marginTop: -50 }}>
// 								<WelcomeText />
// 								<NewsletterForm className="hero-form" />
// 							</div>
// 							: <div className="hero-copy" style={{ margin: 1000, marginTop: -50, }}>
// 								<div className="container-sm" style={{ margin: 100, textAlign: "center", fontSize: 70 }}>
// 									<h1 className="hero-title h2-mobile mt-0 is-revealing" style={{ margin: 100, textAlign: "center", fontSize: 100 }}>{title}</h1>
// 								</div>
// 								<NewsletterForm className="hero-form" />
// 							</div>
// 						}

// 					</div>
// 				</div>
// 			</section>
// 		);
// 	}
// }

// export default Hero;
