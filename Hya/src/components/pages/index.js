import React from 'react'
import Layout from '../layouts/index'
import Hero from '../components/hero/Hero'
import Toolbar from '../components/navigation'
import HeroIllustration from '../components/hero/HeroIllustration'
import Search from '../components/SearchButton'

// prettier-ignore
export default function IndexPage() {
	return (
		<div>
			<Toolbar />
			<div className="waveWrapper waveAnimation">
				<div className="context" >
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
					<div className="waveWrapperInner bgTop">
						<div
							className="wave waveTop"
							style={{
								backgroundImage:
									"url('http://front-end-noobs.com/jecko/img/wave-top.png')",
							}}
						/>
					</div>
				<div className="waveWrapperInner bgMiddle">
					<div
						className="wave waveMiddle"
						style={{
							backgroundImage:
								"url('http://front-end-noobs.com/jecko/img/wave-mid.png')",
						}}
					/>
				</div>
				<div className="waveWrapperInner bgBottom">
					<div
						className="wave waveBottom"
						style={{
							backgroundImage:
								"url('http://front-end-noobs.com/jecko/img/wave-bot.png')",
						}}
					/>
				</div>
			</div>
			<footer className='footerSettings navbar-fixed-bottom justify-content-start'>
				<p style={{ display: 'inline', color: 'black', fontSize: 30 }}><a href="   הגדרות"  > הגדרות </a></p>  |
				<p style={{ display: 'inline', color: 'black', fontSize: 30 }}><a href="   מומלצים עבורי    ">   מומלצים עבורי</a></p>  |
			<p style={{ display: 'inline', color: 'black', fontSize: 30 }}><a href="   המועדפים שלי    ">   המועדפים שלי</a></p>  |
			<p style={{ display: 'inline', color: 'black', fontSize: 30 }}><a href="   נצפו לאחרונה">   נצפו לאחרונה</a></p>
				{/* <p style={{ display: 'inline', color: 'black', fontSize: 20, left: 0 }}><a href="   המועדפים שלי    ">    שלי</a></p>  | */}

			</footer >


			<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/ShacharLogo.png/1280px-ShacharLogo.png" className='navbar-fixed-bottom justify-content-start shacharLogo' alt="logo" width="70px" />

		</div >
	);
}
