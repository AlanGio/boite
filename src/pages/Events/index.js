import React, { Fragment } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Events from '../../components/Events';

const EventsContainer = () => (
	<Fragment>
		<Header />
			<Events />
		<Footer />
	</Fragment>
);

export default EventsContainer;
