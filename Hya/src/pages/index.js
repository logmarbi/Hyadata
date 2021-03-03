/* eslint-disable */
import React from 'react';
import Layout from '../layouts/index';
import Hero from '../components/hero/Hero';
import HeroIllustration from '../components/hero/HeroIllustration';
import { red } from '@material-ui/core/colors';

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


				<div className="context" >
					<Hero illustration={HeroIllustration} title={data.title} isMainPage={data.picture == undefined} style={{ paddingTop: 100, zIndex: 1 }} />
				</div>

				{data.picture == undefined &&
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
				}
			</div>

		</Layout>
	);
}
