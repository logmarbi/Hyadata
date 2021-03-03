/* eslint-disable */
import React, { Component } from 'react'

class WelcomeText extends Component {

	render() {
		var date = new Date();
		var currHour = date.getHours();
		switch (true) {

			//00:00-5:59
			case (currHour < 6):
				return (
					<>
						<div className="container-sm">
							<h1 className="hero-title h2-mobile mt-0 is-revealing">ערב טוב יובל רוזנבוש</h1>
							<h4 className="hero-paragraph is-revealing">אנחנו מעבדים את הנתונים אבל גם כעת, גם בשעות אלו - יש צורך בתובנות.</h4>
							<h4 className="hero-paragraph is-revealing">מה תרצה לדעת בשעה זו?</h4>
						</div>
					</>
				);

			//06:00-11:59
			case (currHour <= 11):
				return (
					<>
						<div className="container-sm">
							<h1 className="hero-title h2-mobile mt-0 is-revealing">בוקר טוב יובל רוזנבוש</h1>
							<h4 className="hero-paragraph is-revealing">אנחנו צופים כי תרצה תובנה עוד לפני הקפה,
							<br />שמחים לפתוח את הבוקר עם נתונים טריים ורעננים,
							<br />אשר נטחנו ממיטב מקורות המידע המובחרים שבהיצע שלנו</h4>
							<h4 className="hero-paragraph is-revealing">עם מה תרצה לפתוח?</h4>
						</div>
					</>
				);

			//12:00-17:59
			case (currHour <= 17):
				return (
					<>
						<div className="container-sm">
							<h1 className="hero-title h2-mobile mt-0 is-revealing">צהרים טובים יובל רוזנבוש</h1>
							<h4 className="hero-paragraph is-revealing">עיבדנו את הנתונים וחיברנו את השדות,
							<br />חישבנו את המדדים וצבענו את התרשימים</h4>
							<h4 className="hero-paragraph is-revealing">הכל ערוך ומוכן לפקודתך</h4>
						</div>
					</>
				);

			//18:00-00:00
			default:
				return (
					<>
						<div className="container-sm">
							<h1 className="hero-title h2-mobile mt-0 is-revealing">ערב טוב יובל רוזנבוש</h1>
							<h4 className="hero-paragraph is-revealing">אנחנו מעבדים את הנתונים אבל גם כעת, גם בשעות אלו - יש צורך בתובנות.</h4>
							<h4 className="hero-paragraph is-revealing">מה תרצה לדעת בשעה זו?</h4>
						</div>
					</>
				); break;
		}

	}
}

export default WelcomeText
