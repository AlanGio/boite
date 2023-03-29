import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Cards from 'react-credit-cards';

import 'react-credit-cards/lib/styles.scss';

const PaymentForm = () => {
	const [ values, setValues ] = useState({
		cvc: '',
		expiry: '',
		focus: '',
		name: '',
		number: ''
	});

	const handleInputFocus = (e) => {
		setValues({ ...values, focus: e.target.name });
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	return (
		<div>
			<Cards
				cvc={values.cvc}
				expiry={values.expiry}
				focus={values.focus}
				name={values.name}
				number={values.number}
				placeholders={{ name: 'NOMBRE TITULAR' }}
				locale={{ valid: 'EXPIRA' }}
			/>

			<Grid container spacing={3}>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id="cardNumber"
						label="Número de Tarjeta"
						fullWidth
						name="number"
						onChange={handleInputChange}
						onFocus={handleInputFocus}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id="cardName"
						label="Nombre en la Tarjeta"
						fullWidth
						name="name"
						onChange={handleInputChange}
						onFocus={handleInputFocus}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id="expDate"
						label="Fecha de Vencimiento"
						fullWidth
						name="expiry"
						onChange={handleInputChange}
						onFocus={handleInputFocus}
					/>
				</Grid>
				<Grid item xs={12} md={6}>
					<TextField
						required
						id="cvv"
						label="CVV"
						helperText="Código de Seguridad"
						fullWidth
						name="cvc"
						onChange={handleInputChange}
						onFocus={handleInputFocus}
					/>
				</Grid>
			</Grid>
		</div>
	);
};

export default PaymentForm;
