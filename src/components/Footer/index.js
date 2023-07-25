import React from "react";
import lodash from "lodash";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

import "./footer.scss";

const useStyles = makeStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(1.4),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const footers = [
  {
    title: "Boite",
    items: [
      { title: "Home", url: "/" },
      { title: "¿Por qué Boite?", url: "/why" },
      { title: "Sobre Nosotros", url: "/about" },
    ],
  },
  {
    title: "Descubrinos",
    items: [
      { title: "Eventos", url: "/events" },
      { title: "Novedades", url: "/news" },
      { title: "Ingresá", url: "/signin" },
    ],
  },
  {
    title: "Seguinos",
    items: [
      { title: "Instagram", url: "/" },
      { title: "Facebook", url: "/" },
      { title: "Twitter", url: "/" },
    ],
  },
  {
    title: "Legal",
    items: [
      { title: "Política de Privacidad", url: "/" },
      { title: "Términos y Condiciones", url: "/" },
    ],
  },
];

const Footer = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" component="footer" className={classes.footer}>
      <Grid container spacing={4} justifyContent="space-evenly">
        {footers.map((footer) => (
          <Grid item xs={6} sm={3} key={footer.title}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              {footer.title}
            </Typography>
            <ul>
              {footer.items.map((item) => (
                <li key={lodash.uniqueId("item_")}>
                  <Link
                    href={item.url}
                    variant="subtitle1"
                    color="textSecondary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://boite.com.ar/">
        Boite
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

export default Footer;
