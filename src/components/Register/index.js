import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Snackbar from "@material-ui/core/Snackbar";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import "./register.scss";

const Register = () => {
  const [open, setOpen] = React.useState(false);
  const [suggestion, setSuggestion] = useState(null);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
    address: "",
    address2: "",
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    console.log(values);
  };

  const onClose = () => setOpen(false);

  return (
    <div className="page register">
      <div className="background">
        <Container maxWidth="lg">
          <Grid container spacing={0}>
            <Grid item md={7}>
              <h2>Creá tu cuenta.</h2>
              <h3>
                Ya estás a un paso de poder recibir todos los meses tu caja de
                belleza personalizada.
              </h3>
              <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Grid container direction="row" justify="center">
                  <Grid item md={12}>
                    <div className="container">
                      <TextField
                        className="textfield"
                        id="outlined-name"
                        label="Nombre"
                        value={values.firstName}
                        onChange={handleChange("firstName")}
                        margin="normal"
                        variant="outlined"
                      />
                      <TextField
                        id="outlined-name"
                        label="Apellido"
                        value={values.lastName}
                        onChange={handleChange("lastName")}
                        margin="normal"
                        variant="outlined"
                      />
                      <TextField
                        className="textfield"
                        id="outlined-name"
                        label="Email"
                        value={values.email}
                        onChange={handleChange("email")}
                        margin="normal"
                        variant="outlined"
                      />

                      <TextField
                        className="textfield"
                        id="outlined-name"
                        label="Contraseña"
                        value={values.password}
                        onChange={handleChange("password")}
                        margin="normal"
                        variant="outlined"
                        type="password"
                      />

                      <TextField
                        className="textfield"
                        id="outlined-name"
                        label="Repetir Contraseña"
                        value={values.repeatPassword}
                        onChange={handleChange("repeatPassword")}
                        margin="normal"
                        variant="outlined"
                        type="password"
                      />

                      <TextField
                        className="textfield"
                        id="outlined-name"
                        label="Dirección"
                        value={values.repeatPassword}
                        onChange={handleChange("repeatPassword")}
                        margin="normal"
                        variant="outlined"
                        type="password"
                      />

                      <TextField
                        id="outlined-name"
                        label="Piso / Dto"
                        value={values.address2}
                        onChange={handleChange("address2")}
                        margin="normal"
                        variant="outlined"
                      />
                    </div>
                    <Grid item md={6} style={{ margin: "16px 0 64px" }}>
                      <Link to="/checkout">
                        <Button
                          variant="contained"
                          size="large"
                          color="primary"
                          className="button"
                          type="submit"
                          fullWidth
                        >
                          Pagar &amp; Recibir
                        </Button>
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item md={5} />
          </Grid>
        </Container>
      </div>

      <Snackbar
        onClose={onClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={5000}
        open={open}
        message={
          suggestion ? (
            <span>Selected suggestion: {suggestion.description}</span>
          ) : (
            ""
          )
        }
        style={{ width: "70vw" }}
      />
    </div>
  );
};

export default Register;
