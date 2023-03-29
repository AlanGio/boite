import React from 'react';
import classNames from 'classnames';

import './quiz-choice.scss';
const echoImage = require.context('../../../../assets/images/quiz', true);

const QuizChoice = ({ name, color, image, bigImage, icon, selected }) => (
	<div className={classNames('choice', selected && 'selected')} role="button" aria-pressed="false">
		<div className="answer-container">
			<div className="check icon-check-large " />
			{color && <div className="swatch color" style={{ backgroundColor: color }} />}
			{bigImage && (
				<div className="swatch big-image" style={{ backgroundImage: `url(${echoImage('./' + bigImage)})` }} />
			)}
			{image && <div className="swatch image" style={{ backgroundImage: `url(${echoImage('./' + image)})` }} />}
			{icon && <div className="swatch icon" style={{ backgroundImage: `url(${echoImage('./' + icon)})` }} />}
			{selected && <i className="material-icons">check</i>}
			<div className={`label ${!color && !image && !bigImage && !icon && 'only-value'}`}>{name}</div>
		</div>
	</div>
);

export default QuizChoice;
