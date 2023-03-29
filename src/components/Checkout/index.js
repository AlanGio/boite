import React from 'react';
import Payment from './Payment';
import Container from '@material-ui/core/Container';

import Grid from '@material-ui/core/Grid';

import './checkout.scss';

export default function Checkout() {
	return (
		<Container maxWidth="lg">
				<Grid container spacing={3}>
					<Grid item sm={12}>
						<h2>Comenzá tu Suscripción</h2>
						<h3>Completá el formulario y sé parte de nuestra familia Boiter.<br />
							¡Estás a tan sólo un paso de <b>recibir tu suscripción mensual</b> todos los meses!</h3>
					</Grid>
					<Grid item sm={6}>
						<Payment />
					</Grid>
					<Grid item sm={6} className="cart-background">
					</Grid>
				</Grid>
			</Container>
	);
}
