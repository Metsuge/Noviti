import React from "react";
import { useState } from "react";
import "./styling/Form.css";

function Form({ getFormData }) {
	const [loanAmount, setLoanAmount] = useState("");

	const getLoanAmount = (event) => {
		setLoanAmount(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		const form = event.target;
		const formData = new FormData(form);

		const formJson = Object.fromEntries(formData.entries());
		getFormData(formJson);
	};

	return (
		<div className="Form">
			<form method="post" onSubmit={handleSubmit}>
				<label className="form-label">
					<div className="form-text"> Loan amount:</div>
					<input name="loanAmount" id="loanAmount" onChange={getLoanAmount} value={loanAmount} />
				</label>
				{/* <br /> */}
				<label className="form-label">
					<div className="form-text">Yearly interest %:</div>
					<input name="yearlyInterest" />
				</label>
				{/* <br /> */}
				<label className="form-label">
					<div className="form-text">Term in months:</div>
					<input name="paymentTerm" />
				</label>
				{/* <br /> */}

				<label className="form-label">
					<div className="form-text">Schedule repayment type:</div>
					<select name="repaymentTypeList" id="repaymentTypeList" defaultValue="annuity">
						<option value="annuity">Annuity</option>
					</select>
				</label>
				{/* <br /> */}
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default Form;
