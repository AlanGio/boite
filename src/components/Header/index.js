import React from 'react';

import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import logo from '../../assets/images/logo.svg';
import './header.scss';

const Header = () => {
	return (
		<AppBar position="fixed" className="bg">
			<Toolbar>
				<Link to="/" className="header-logo">
					<img src={logo} className="header-logo" alt="Boite" />
				</Link>
			</Toolbar>
			<div className="right-menu">
				<Link to="/quiz/skin-color">
					<Button color="inherit" className="quiz-button">
						Suscribite
					</Button>
				</Link>
				<Link to="/signin">
					<Button color="inherit" className="signin-button">
						Ingresa
					</Button>
				</Link>
			</div>
		</AppBar>
	);
};

export default Header;
