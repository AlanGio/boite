import React, { Fragment } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import Home from '../../components/Home';

const HomeContainer = () => (
	<Fragment>
		<Header />
		<Home />
		<Footer />
	</Fragment>
);

export default HomeContainer;
