import TableChild from "./TableChild";
import "./styling/Table.css";

function Table({ formData }) {
	const loanAmount = formData.loanAmount;
	const termInMonths = formData.paymentTerm;
	const yearlyInterestRate = formData.yearlyInterest;

	function calculateMonthlyPayments(loanAmount, termInMonths, yearlyInterestRate) {
		const monthlyInterestRate = yearlyInterestRate / 12 / 100;
		const denominator = Math.pow(1 + monthlyInterestRate, termInMonths) - 1;
		const monthlyPayment = (
			(loanAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, termInMonths))) /
			denominator
		).toFixed(2);

		const schedule = [];
		let totalPaidInterest = 0;
		let totalPaidPrincipal = 0;

		for (let i = 1; i <= termInMonths; i++) {
			const interestPayment = (loanAmount * monthlyInterestRate).toFixed(2);
			const principalPayment = Math.min(monthlyPayment - interestPayment, loanAmount).toFixed(2);
			loanAmount -= principalPayment;

			totalPaidInterest += interestPayment;
			totalPaidPrincipal += parseInt(principalPayment);
			schedule.push({
				month: i,
				remainingLoan: loanAmount.toFixed(2),
				monthlyPayment,
				interestPayment,
				principalPayment,
			});
		}
		schedule.push({
			month: "",
			monthlyPayment: (parseInt(totalPaidInterest) + parseInt(totalPaidPrincipal)).toFixed(2),
			interestPayment: parseInt(totalPaidInterest).toFixed(2),
			principalPayment: parseInt(totalPaidPrincipal).toFixed(2),
			remainingLoan: "Total",
		});

		return schedule;
	}

	const monthlyPayments = calculateMonthlyPayments(loanAmount, termInMonths, yearlyInterestRate);
	console.log("monthlyPayments", monthlyPayments);

	return (
		<div>
			<h2>Loan Payment Schedule</h2>
			<table>
				<thead>
					<tr>
						<th className="column-width">No.</th>
						<th className="column-width">Remaining Credit Amount</th>
						<th className="column-width">Principal Part</th>
						<th className="column-width">Interest</th>
						<th className="column-width">Total Payment</th>
					</tr>
				</thead>
			</table>
			{monthlyPayments.map(function (data) {
				return (
					<div className="payment-table">
						<TableChild key={data.month} data={data} />
					</div>
				);
			})}
		</div>
	);
}

export default Table;
