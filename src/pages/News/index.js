import React, { Fragment } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import News from '../../components/News';


const NewsContainer = () => (
	<Fragment>
		<Header />
			<News />
		<Footer />
	</Fragment>
);

export default NewsContainer;
