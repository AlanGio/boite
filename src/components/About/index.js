import React from "react";

import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import "./about.scss";

const About = () => {
  return (
    <div className="page about">
      <Grid
        container
        spacing={0}
        justifyContent="center"
        className="background"
      >
        <Grid item md={6}>
          <div className="about-content-container">
            <h2>Sobre Boite</h2>

            <p>
              Somos una plataforma{" "}
              <strong>
                hecha por y para los amantes del maquillaje, cuidados de la piel
                y el cabello
              </strong>
              .<br />
              Formamos una comunidad que intercambia y comparte conocimientos.
              <br />
              Tenemos noticias, información y productos innovadores que serás la
              primera en disfrutar.
              <br />
              Boite te asegura una membresía mediante la cual{" "}
              <strong>recibirás todos los meses</strong> una selección
              balanceada y pensada para vos de productos de maquillaje, cuidado
              de la piel, pelo, uñas y fragancias.
              <br />
              Tendrás todos los meses un contenido diferente y nunca recibirás
              dos boxes iguales.
              <br />
              Podrás probar y experimentar con productos que quizás nunca
              hubieses adquirido.
            </p>

            <Link to="/quiz/skin-color">
              <Button
                variant="contained"
                size="large"
                color="primary"
                className="button"
              >
                ¡Completá la Encuesta y Comenzá!
              </Button>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
