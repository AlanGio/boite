import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Checkout from '../../components/Checkout';

import './checkout.scss';

const CheckoutContainer = () => (
	<div className="page checkout">
		<Header />
		<div className="content-container">
			<Checkout />
		</div>
		<Footer />
	</div>
);

export default CheckoutContainer;
