/* eslint-disable */
import React, { Component } from 'react';
import classnames from 'classnames';

class NewsletterForm extends Component {
	constructor(props) {
		super(props);
		this.state = { value: '', color: "" };
		// this.parentCallback = this.parentCallback.bind(this);
		this.HandleFocus = this.HandleFocus.bind(this);
		this.HandleFocusOut = this.HandleFocusOut.bind(this);
		this.handleChange = this.handleChange.bind(this);


	}

	HandleFocus() {
		this.props.parentCallback(false)
	  }

	  HandleFocusOut() {
		  if(this.state.value == '') {
			this.props.parentCallback(true)
		  }
	  }

	  handleChange(event) {
		this.setState({value: event.target.value});
		if(event.target.value == '') {
			this.props.parentCallback(true)
		  }
		  else {
			this.props.parentCallback(false)
		  }
	  }

	render() {
		const { className, submit = 'Submit' } = this.props;
		const { parentCallback } = this.state;

		var currWindow = window.location.pathname

		switch (true) {
			case currWindow.includes("/Logistics"):
				this.color = "#dc9c6d"
				break;
			case  currWindow.includes("/Mashabim"):
				this.color = "#fa7b4b"
				break;
			case  currWindow.includes("/Mashan"):
				this.color = "#91b17a"
				break;
			case  currWindow.includes("/Chok_vMispat"):
				this.color = "#cf8b3d"
				break;
			default:
				this.color = "#305165"
				break;
		}

		return (
			<form style={{ margin:20}}
				className={classnames(
					'newsletter-form field field-grouped is-revealing',
					className
				)}
			>
				<div className="control control-expanded" >
					<div class="text-center subcribe-form mt-4" >
						<form style={{}}>
							<input onChange={this.handleChange} value={this.state.value} type="text" class="inputform"  style={{fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"}} size="45" placeholder="...הקלד לחיפוש" onBlur={this.HandleFocusOut} onFocus={this.HandleFocus}/>
							<button type="submit" class="btn rounded-pill btn-purple" style={{  pointerEvents: "none",backgroundColor: this.color, 	border: "1px solid" + this.color, boxShadow: this.color}}>
							<section style={{ fontSize: 18 }}>חפש</section>
								</button>
						</form>
						{/* <ParticleEffectButton/> */}
					</div>
				</div>

			</form>
		);
	}
}

export default NewsletterForm;
