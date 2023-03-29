import React from 'react';

import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


import './why.scss';

const Why = () => {

	return (
		<div className="page why">
			<Grid container spacing={0} justify="flex-end" className="background">
				<Grid item md={6} className="right-content">
					<h2>¿Por qué Boite?</h2>

					<ul>
						<li>Porque son productos que no comprás habitualmente.</li>
						<li>Porque te vamos a contar como sacarles todo su potencial.</li>
						<li>Porque tenemos técnicas infalibles de belleza.</li>
						<li>Porque expertos y referentes piensan el box ideal para vos.</li>
						<li>Porque podes compartir tus conocimientos con nosotros y nuestra comunidad.</li>
						<li>¡Porque podes jugar con nosotros todos los meses y sorprenderte!</li>		
					</ul>

					<h3>Sentimos que sabemos de belleza, queremos crear una experiencia de belleza única. <strong>Queremos ayudarte a ser la mejor versión de vos misma</strong>.</h3>

					<Link to="/quiz/skin-color">
						<Button variant="contained" size="large" color="primary" className="button">
							¡Completá la Encuesta y Comenzá!
						</Button>
					</Link>
				</Grid>
			</Grid>
		</div>
	);
};

export default Why;
