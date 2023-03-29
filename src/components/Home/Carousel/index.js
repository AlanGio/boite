import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import lodash from 'lodash';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import banner1 from '../../../assets/images/AdobeStock_282970391_Preview.jpeg';
import banner2 from '../../../assets/images/AdobeStock_284333412_Preview.jpeg';

import './carousel.scss';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
	{
		title: 'Somos Boite',
		description: 'Completa nuestra encuesta personalizada de belleza',
		imgPath: banner1
	},
	{
		title: 'Sé parte de la Boitemanía',
		description: 'Sumate!',
		imgPath: banner2
	}
];

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	img: {
		overflow: 'hidden',
		display: 'block',
		width: '100%'
	}
}));

export default function TextMobileStepper() {
	const classes = useStyles();
	const theme = useTheme();
	const [ activeStep, setActiveStep ] = React.useState(0);
	const maxSteps = tutorialSteps.length;

	function handleNext() {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	}

	function handleBack() {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	}

	function handleStepChange(step) {
		setActiveStep(step);
	}

	return (
		<div className="carousel">
			<Paper square elevation={0} className="header">
				<h3>{tutorialSteps[activeStep].title}</h3>
				<p>{tutorialSteps[activeStep].description}</p>
			</Paper>
			<AutoPlaySwipeableViews
				axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
				index={activeStep}
				onChangeIndex={handleStepChange}
				enableMouseEvents
				interval={1000000}
			>
				{tutorialSteps.map((step, index) => (
					<div key={lodash.uniqueId('step_')}>
						{Math.abs(activeStep - index) <= 2 ? (
							<img className={classes.img} src={step.imgPath} alt={step.title} />
						) : null}
					</div>
				))}
			</AutoPlaySwipeableViews>
			<MobileStepper
				steps={maxSteps}
				position="static"
				variant="text"
				activeStep={activeStep}
				className="footer"
				nextButton={
					<Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
						Siguiente
						{theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
					</Button>
				}
				backButton={
					<Button size="small" onClick={handleBack} disabled={activeStep === 0}>
						{theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
						Anterior
					</Button>
				}
			/>
		</div>
	);
}
