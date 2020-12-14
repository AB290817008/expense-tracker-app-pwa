import React, { useContext } from 'react';

import { GlobalContext } from '../Context/GlobalState';
import { TransactionPropType } from '../interface';

export const Transaction: React.FC<TransactionPropType> = ({ transactions }) => {
	const { deleteTransaction } = useContext(GlobalContext);

	const sign = transactions.amount < 0 ? '-' : '+';

	return (
		<li className={transactions.amount < 0 ? 'minus' : 'plus'}>
			{transactions.text}{' '}
			<span>
				{sign}${Math.abs(transactions.amount)}
			</span>
			<button onClick={() => deleteTransaction(transactions.id)} className="delete-btn">
				x
			</button>
		</li>
	);
};
