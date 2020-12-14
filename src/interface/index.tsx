export type initialStateType = {
	transactions: {
		id: number;
		text: string;
		amount: number;
	}[];
	deleteTransaction: (id: number) => void;
	addTransaction: (transaction: TransactionType) => void;
};
//context/TransactionReducer Actions Type
export type Actions =
	| { type: 'DELETE_TRANSACTION'; payload: number }
	| { type: 'ADD_TRANSACTION'; payload: TransactionType };

// transaction Type
export type TransactionType = {
	id: number;
	text: string;
	amount: number;
};

//components/Trasaction.tsx props type
export type TransactionPropType = {
	transactions: { id: number; text: string; amount: number };
};

export type expenseTrackerErrorType = {
	textError: string;
	AmountError: string;
};
