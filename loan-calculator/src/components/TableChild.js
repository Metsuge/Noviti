import React from "react";
import "./styling/TableChild.css";

function TableChild({ data }) {
	return (
		<div>
			<table>
				<tbody>
					<tr key={data.month}>
						<td>{data.month}</td>
						<td>{data.remainingLoan}</td>
						<td>{data.principalPayment}</td>
						<td>{data.interestPayment}</td>
						<td>{data.monthlyPayment}</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default TableChild;
