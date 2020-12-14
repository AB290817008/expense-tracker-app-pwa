import React, { useState, useContext } from 'react';

import { expenseTrackerErrorType } from '../interface';

import { GlobalContext } from '../Context/GlobalState';

export const AddTransaction = () => {
	const { addTransaction } = useContext(GlobalContext);

	const onSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();

		const newTransaction = {
			id: Math.floor(Math.random() * 100000000),
			text,
			amount: Number(+amount)
		};
		addTransaction(newTransaction);
	};

	const [ text, setText ] = useState('');

	const [ amount, setAmount ] = useState("0");

	return (
		<div>
			<h3>Add new transaction</h3>
			<form onSubmit={onSubmit}>
				<div className="form-control">
					<label htmlFor="text">
						<span className="details">Details</span>
					</label>
					<input
						type="text"
						id="text"
						placeholder="Enter text..."
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</div>
				<div className="form-control">
					<label htmlFor="amount">
						<span className="amount">
							Amount <br />
							(negative - expense, positive + income)
						</span>
					</label>

					<input
						type="number"
						id="amount"
						placeholder="Enter amount..."
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
					/>
				</div>
				<button className="btn">Add transaction</button>
			</form>
		</div>
	);
};
