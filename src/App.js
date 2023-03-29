import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import HomeContainer from './pages/Home';
import QuizContainer from './pages/Quiz';
import RegisterContainer from './pages/Register';
import SignInContainer from './pages/SignIn';
import CheckoutContainer from './pages/Checkout';

import AboutContainer from './pages/About';
import WhyContainer from './pages/Why';
import EventsContainer from './pages/Events';
import NewsContainer from './pages/News';


import 'typeface-roboto';
import './App.scss';

const App = () => {
	return (
		<div className="App">
			<Router>
				<Route exact path="/" component={HomeContainer} />
				<Route path="/quiz/:quizId" component={QuizContainer} exact />
				<Route exact path="/register" component={RegisterContainer} />
				<Route exact path="/signin" component={SignInContainer} />
				<Route exact path="/checkout" component={CheckoutContainer} />

				<Route exact path="/about" component={AboutContainer} />
				<Route exact path="/why" component={WhyContainer} />
				<Route exact path="/events" component={EventsContainer} />
				<Route exact path="/news" component={NewsContainer} />

			</Router>
		</div>
	);
};

export default App;
