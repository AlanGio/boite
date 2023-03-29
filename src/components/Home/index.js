import React from 'react';

import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import CustomizedIcon from '../../assets/icons/customized_box.svg';
import FreeShippingIcon  from '../../assets/icons/free_shipping.svg';
import CancelAnytimeIcon  from '../../assets/icons/cancel_anytime.svg';

// import Carousel from './Carousel';
import Experience from './Experience';


import './home.scss';

const Home = () => {

	return (
		<div className="page home">
			<Grid container spacing={0} className="background">
				<Grid item xs={6} />
				<Grid item xs={6}>
					<h2>Sumate a Boite</h2>
					<h3>Suscribite y recibí nuestra caja de belleza personalizada todos los meses</h3>
					<Link to="/quiz/skin-color">
						<Button variant="contained" size="large" color="primary" className="button">
							Enterate como comenzar
						</Button>
					</Link>
				</Grid>
			</Grid>

			<div className="offer-boxes">
				<Container maxWidth="lg">
					<Grid container spacing={3} className="offer-boxes-container">
						<Grid item xs={12} md={4}>
							<ul>
								<li><img src={CustomizedIcon} className="offer-icons" alt="Pensada para vos" /></li>
								<li>
									<h4>Pensada para vos</h4>
									<h5>Todos los meses 5 productos para vos.</h5>
								</li>
							</ul>
						</Grid>
						<Grid item xs={12} md={4}>
							<ul>
								<li><img src={FreeShippingIcon} className="offer-icons" alt="Envio gratis a todo el país" /></li>
								<li>
									<h4>Envio gratis a todo el país</h4>
									<h5>Completá la encuesta y te enviamos tu caja todos los meses</h5>
								</li>
							</ul>
						</Grid>
						<Grid item xs={12} md={4}>
							<ul>
								<li><img src={CancelAnytimeIcon} className="offer-icons" alt="Cancelala cuando quieras" /></li>
								<li>
								<h4>Cancelala cuando quieras</h4>
									<h5>Podes dar de baja tu suscripción sin costo cuando vos quieras</h5>
								</li>
							</ul>
						</Grid>
					</Grid>
				</Container>
			</div>
			<div className="bottom-banner">
				<Grid container spacing={0}>
					<Grid item xs={12} md={12}>
						<Experience />
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default Home;
