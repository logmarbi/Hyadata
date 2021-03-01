import React from 'react'
import Hero from './DashComp/hero/Hero'
import HeroIllustration from './DashComp/hero/HeroIllustration'
import Hello from './DashComp/WelcomeText'

// prettier-ignore
export default function IndexPage() {
	return (
		<div>

			<div className="context" >
				<Hello />
				<Hero style={{ paddingTop: 100 }}
					title="צהרים טובים יובל רוזנבוש,"
					content="במקום לשער, אפשר לקבל תשובות מדויקות!
						הגיע הזמן לקבל תובנות משמעותיות בכדי לפעול."
					secondContent="תן לדאטה לעבוד בשבילך"
					illustration={HeroIllustration}
				/>
			</div>
			<div className="area">
				<ul className="circles">
					<li />
					<li />
					<li />
					<li />
					<li />
					<li />
					<li />
					<li />
					<li />
					<li />
				</ul>
			</div>
		</div>
	);
}
