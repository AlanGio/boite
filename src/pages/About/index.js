import React, { Fragment } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import About from '../../components/About';

const AboutContainer = () => (
	<Fragment>
		<Header />
			<About />
		<Footer />
	</Fragment>
);

export default AboutContainer;
