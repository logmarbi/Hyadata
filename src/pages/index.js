/* eslint-disable */
import React from 'react';
import Layout from '../layouts/index';
import Hero from '../components/hero/Hero';
import HeroIllustration from '../components/hero/HeroIllustration';
import { red } from '@material-ui/core/colors';
import Particles from 'react-particles-js'
export default function IndexPage(data) {
	return (
		<Layout>

			<div style={{
				backgroundImage: data.picture,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				width: "100%",
				height: "100vh"
			}} >



				{/* {data.picture == "url('/Images/BackgroundTitles/Main.jpg')" && */}
					<div className="area">
						{/* <ul className="circles">
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
						</ul> */}


<Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 240,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 2,
	            "random": true,
	            "anim": {
	                "speed": 2,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 1,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} />

					</div>
				{/* } */}
				
				<div className="context" >
					<Hero illustration={HeroIllustration} title={data.title} isMainPage={data.picture == "url('/Images/BackgroundTitles/Main.jpg')"} style={{ paddingTop: 100, zIndex: 1 }} />
				</div>
			</div>

		</Layout>
	);
}
