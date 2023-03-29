import React from 'react';
import Styles from './Styles';
import { Form, Field } from 'react-final-form';
import Card from './Card';
import { formatCreditCardNumber, formatCVC, formatExpirationDate } from './cardUtils';

import Button from '@material-ui/core/Button';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
	await sleep(300);
	window.alert(JSON.stringify(values, 0, 2));
};

// window.Mercadopago.setPublishableKey('TEST-53fe869b-da63-411e-8de2-26a6f3397a60');

const Payment = () => (
	<Styles>
		<Form
			onSubmit={onSubmit}
			render={({ handleSubmit, form, submitting, pristine, values, active }) => {
				return (
					<form onSubmit={handleSubmit}>

						<input type="hidden" id="email" name="email" value="test_user_19653727@testuser.com" />
						<input type="hidden" id="cardExpirationYear" data-checkout="cardExpirationYear" value="2024" />
						<input type="hidden" id="docType" data-checkout="docType" value="DNI" />
						<input type="hidden" id="docNumber" data-checkout="docNumber" value="31694697" />

						<Card
							id="cardNumber"
							data-checkout="cardNumber"
							number={values.number || ''}
							name={values.name || ''}
							expiry={values.expiry || ''}
							cvc={values.cvc || ''}
							focused={active}
							placeholders={{ name: 'NOMBRE TITULAR' }}
							locale={{ valid: 'FECH EXPIRA' }}
						/>

						<div>
							<Field
								name="number"
								component="input"
								type="text"
								pattern="[\d| ]{16,22}"
								placeholder="Número de Tarjeta"
								format={formatCreditCardNumber}
								id="cardholderName"
								data-checkout="cardholderName"
							/>
						</div>
						<div>
							<Field name="name" component="input" type="text" placeholder="Nombre en la Tarjeta" />
						</div>
						<div>
							<Field
								name="expiry"
								component="input"
								type="text"
								pattern="\d\d/\d\d"
								placeholder="Fecha Expiración"
								format={formatExpirationDate}
								id="cardExpirationMonth"
								data-checkout="cardExpirationMonth"
							/>
							<Field
								id="securityCode"
								data-checkout="securityCode"
								name="cvc"
								component="input"
								type="text"
								pattern="\d{3,4}"
								placeholder="Cod. Seguridad"
								format={formatCVC}
							/>
						</div>
						<div className="buttons">
							<Button
								variant="contained"
								size="large"
								color="primary"
								className="button"
								disabled={submitting}
								type="submit"
							>
								Confirmar Suscripción
							</Button>
							{/*<button type="button" onClick={form.reset} disabled={submitting || pristine}>
								Reset
        </button>*/}
						</div>
					</form>
				);
			}}
		/>
	</Styles>
);

export default Payment;
