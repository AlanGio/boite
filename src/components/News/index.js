import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles(theme => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/1200x320/?makeup)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0),
  },
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  'Make Up',
  'Cuidado de la Piel',
  'Moda',
  'Tendencias',
  'Accesorios',
  'Opinion',
];

const featuredPosts = [
  {
    title: 'Cómo Maquillar y tapar las Ojeras',
    date: 'Nov 12',
    description:
      '¿Sabes cómo tapar las ojeras? Solo necesitas un stick de maquillaje corrector y nuestros consejos.',
  },
  {
    title: 'Maquillaje para gente con acné',
    date: 'Nov 11',
    description:
      'La maquilladora profesional Natalia Belda nos enseña a maquillar en un 1 minuto pieles grasas con acné.',
  },
];


const archives = [
  'Marzo 2020',
  'Febrero 2020',
  'Enero 2020',
  'Diciembre 2019',
  'Noviembre 2019',
  'Octubre 2019',
  'Septiembre 2019',
  'Agosto 2019',
  'Julio 2019',
  'Junio 2019',
  'Mayo 2019',
  'Abril 2019',
];

export default function News() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Button size="small">Subscribe</Button>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="center"
            noWrap
            className={classes.toolbarTitle}
          >
            Blog
          </Typography>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <Button variant="outlined" size="small">
            Sign up
          </Button>
        </Toolbar>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
          {sections.map(section => (
            <Link
              color="inherit"
              noWrap
              key={section}
              variant="body2"
              href="#"
              className={classes.toolbarLink}
            >
              {section}
            </Link>
          ))}
        </Toolbar>
        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            {/* Increase the priority of the hero background image */}
            {
              <img
                style={{ display: 'none' }}
                src="https://source.unsplash.com/1200x320/?makeup"
                alt="background"
              />
            }
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={8}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Bienvenido a las Boite News
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Tenemos todas las novedades del mundo del Makeup para vos.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}
          {/* Sub featured posts */}
          <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <Grid item key={post.title} xs={12} md={6}>
                <CardActionArea component="a" href="#">
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                          {post.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                          {post.description}
                        </Typography>
                        <Typography variant="subtitle1" color="primary">
                          Continuar leyendo...
                        </Typography>
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia
                        className={classes.cardMedia}
                        image="https://source.unsplash.com/160x200/?makeup"
                        title="Image title"
                      />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
          {/* End sub featured posts */}
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* Main content */}
            <Grid item xs={12} md={8}>
              <Typography variant="h5" gutterBottom>
              Cómo encontrar el mejor maquillaje segun tu tono de piel
              </Typography>
              <Divider />

              <article>
              <br />
              <p>En nuestro día a día, solo en momentos especiales, por trabajo... Todas, en algún momento, utilizamos una base de maquillaje. ¿Quieres saber qué requisitos ha de cumplir un buen producto? Sigue leyendo.</p>
              <br />
              <img
                src="https://source.unsplash.com/600x300/?makeup"
                alt="background"
              />
              <hr />
              <p>Para formular un maquillaje, se siguen los mismos criterios de e<strong>ficacia, tolerancia y seguridad</strong> que con un producto de cuidado de la piel. Además se presta una especial atención a que los pigmentos, y demás polvos minerales que le dan el poder cubriente, &nbsp;tengan la capacidad de no irritar al aplicarse en la piel, de formar una película uniforme y de permanecer siempre en la superficie de la piel, sin penetrar en la misma, ya que su misión es estar en la superficie.</p><br />

              <p>Las marcas que trabajan<strong> fórmulas para pieles sensibles, </strong>evitan algunos pigmentos que pueden tener potencial alergizante. En las bases de maquillaje para el rostro se usan pigmentos a base de óxidos de hierro, que tienen una amplia variedad de tonos, desde negros, rojos a amarillos que, combinados nos dan&nbsp; toda la paleta de&nbsp; “Beiges”.</p><br />

              <p>Estas pieles son, en ocasiones, reacias a utilizar estos productos ya que piensan que las pueden debilitar o sensibilizar más.&nbsp; Todo lo contrario. Si el maquillaje está bien formulado, va a ejercer un efecto protector que refuerza la acción hidratante de una crema, así como a nivel de protección de la luz del día, ya que los pigmentos y los componentes minerales que lleva ejercerían un efecto similar al de un filtro físico en un protector solar</p><br />
              </article>
            </Grid>
            {/* End main content */}
            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Typography variant="h6" gutterBottom className={classes.sidebarSection}>
                Archivo
              </Typography>
              {archives.map(archive => (
                <Link display="block" variant="body1" href="#" key={archive}>
                  {archive}
                </Link>
              ))}
            </Grid>
            {/* End sidebar */}
          </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}