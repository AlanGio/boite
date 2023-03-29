import React, { Fragment } from 'react';

import lodash from 'lodash';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Checkbox from '@material-ui/core/Checkbox';

import QuizChoice from './Common/QuizChoice';
import BackNext from './Common/BackNext';

const Quiz = (props) => {
	const [ stateValue, setValue ] = React.useState({});
	const { id, title, type, values, prevStep, nextStep } = props;

	const handleChangeRadio = (event) => {
		setValue({ ...stateValue, [id]: event.target.value });
	};

	const handleChangeSelect = (name) => (event) => {
		setValue({ ...stateValue, [id]: { ...stateValue[id], [name]: event.target.checked } });
	};

	stateValue[id] &&
		Object.keys(stateValue[id]).forEach((key) => {
			if (stateValue[id][key] === false) {
				delete stateValue[id][key];
			}
		});

	const displayRadio = () => (
		<RadioGroup
			aria-label="position"
			name="eyes_color"
			value={stateValue[id] || ''}
			onChange={handleChangeRadio}
			row
		>
			{values.map((item) => (
				<FormControlLabel
					key={lodash.uniqueId('item_')}
					control={
						<Radio
							disableRipple
							icon={<QuizChoice {...item} />}
							checkedIcon={<QuizChoice {...item} selected />}
							value={item.value}
						/>
					}
				/>
			))}
		</RadioGroup>
	);

	const displaySelect = () => (
		<Fragment>
			{values.map((item) => (
				<Checkbox
					icon={<QuizChoice {...item} />}
					checkedIcon={<QuizChoice {...item} selected />}
					key={lodash.uniqueId('item_')}
					value={item.value}
					onChange={handleChangeSelect(item.value)}
					checked={stateValue[id] && stateValue[id][item.value]}
				/>
			))}
		</Fragment>
	);

	console.log(stateValue);

	return (
		<div className="page quiz eyes-color">
			<Container maxWidth="lg">
				<Grid item md>
					<h2>{title}</h2>
				</Grid>

				<Grid container direction="row" justify="center" alignItems="center">
					{(() => {
						switch (type) {
							case 'radio':
								return displayRadio();
							case 'select':
								return displaySelect();
							default:
								return null;
						}
					})()}
				</Grid>
				<BackNext
					back={{ step: prevStep }}
					next={{
						step: nextStep,
						disabled:
							!stateValue[id] ||
							(Object.entries(stateValue[id]).length === 0 && stateValue[id].constructor === Object)
					}}
				/>
			</Container>
		</div>
	);
};

export default Quiz;
