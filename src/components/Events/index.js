import React from 'react';

import Grid from '@material-ui/core/Grid';

import './events.scss';

const Events = () => {

	return (
		<div className="page events">
			<Grid container spacing={0} justify="center" className="background">
				<Grid item xs={6}>
					<h2>¡Sorteamos una Caja Boite!</h2>
					<h3>Suscribite a nuestro sorteo y llevate una caja boite</h3>
        </Grid>
      </Grid>
      

      <Grid container spacing={0} justify="center" className="content">
        <Grid item xs={12}>
          <h3>¿Cómo participar del Sorteo Boite?</h3>
          <p>Para participar del Sorteo Boite tenés que seguir los siguientes pasos:</p>

          <p>Ingresá a la página de Facebook de Boite<br />
          En la publicación del sorteo etiquetá a tu amiga fanática de los delineadores<br />
          Premios del Sorteo Boite<br />
          Entre todos los que participan habrá 2 ganadores por sorteo.</p>
        </Grid>
      </Grid>
		</div>
	);
};

export default Events;
