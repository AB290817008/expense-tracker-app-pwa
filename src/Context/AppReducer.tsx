import { TransactionType, Actions } from '../interface';

export default function AppReducer(state: { transactions: TransactionType[] }, action: Actions)  {
	switch (action.type) {
		case 'DELETE_TRANSACTION':
			return {
				...state,
				transactions: state.transactions.filter((transaction) => transaction.id !== action.payload)
			};

		case 'ADD_TRANSACTION':
			return {
				...state,
				transactions: [ action.payload, ...state.transactions ]
			};
		default:
			return state;
	}
};
