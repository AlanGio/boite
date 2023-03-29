import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import './experience.scss';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(1),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '100%',
  },
  cardContent: {
    flexGrow: 1,
  }
}));

const echoImage = require.context('../../../assets/images', true);

const steps = [
  {
    id: "1",
    title: "Completá la Encuesta",
    description: "Contanos como sos, para que podamos conocerte y armar <b>la caja boite</b> para vos.",
    image: "step1.jpg"
  },
  {
    id: "2",
    title: "Preparamos y enviamos tu caja",
    description: "Nuestros <b>makeup artist</b> están buscando constantemente los productos más inovadores.",
    image: "step2.jpg"
  },
  {
    id: "3",
    title: "La recibís en tu casa",
    description: "¡Nisiquiera tenés que pagar el envío! <br />Todos los meses la <b>recibís en tu casa</b>.",
    image: "step3.jpg"
  }
];

export default function Experience() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main className="experience">
        <Container className={classes.cardGrid} maxWidth="lg">
          <Grid item xs={12}><h3>¿Cómo funciona Boite?</h3></Grid>
          <Grid container spacing={4}>
            {steps.map(step => (
              <Grid item key={step.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={echoImage('./' + step.image)}
                    title={step.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {step.title}
                    </Typography>
                    <Typography>
                      <span dangerouslySetInnerHTML={{__html: step.description }} />
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}