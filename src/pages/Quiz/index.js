import React, { Fragment } from 'react';

import Header from '../../components/Header';
import Quiz from '../../components/Quiz';

import DATA from '../../constants/QuizData';

import './quiz.scss';

const QuizContainer = (props) => {
	const { quizId } = props.match.params;

	const stepQuizData = DATA.find((o) => o.id === quizId);
	const currentIndex = DATA.indexOf(stepQuizData);
	const prevStep = DATA[currentIndex - 1] && DATA[currentIndex - 1].id;
	const nextStep = DATA[currentIndex + 1] && DATA[currentIndex + 1].id;

	return (
		<Fragment>
			<Header />
			{stepQuizData ? (
				<Quiz prevStep={prevStep} nextStep={nextStep} {...stepQuizData} />
			) : (
				<h3>Paso inexistente</h3>
			)}
		</Fragment>
	);
};

export default QuizContainer;
