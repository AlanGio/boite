import React from "react";

import { Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import "./back-next.scss";

const BackNext = ({ back, next }) => {
  return (
    <div className="back-next">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        {back && back.step && (
          <Grid item md={3}>
            <Link to={!back.disabled && `/quiz/${back.step}`}>
              <Button
                variant="outlined"
                size="large"
                color="primary"
                className="button"
                disabled={back.disabled}
              >
                Anterior
              </Button>
            </Link>
          </Grid>
        )}

        {next && (
          <Grid item md={3}>
            <Link
              to={
                !next.step
                  ? "/register"
                  : !next.disabled
                  ? `/quiz/${next.step}`
                  : "#"
              }
            >
              <Button
                variant="contained"
                size="large"
                color="primary"
                className="button"
                disabled={next.disabled}
              >
                {!next.step ? "Finalizar" : "Siguiente"}
              </Button>
            </Link>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default BackNext;
