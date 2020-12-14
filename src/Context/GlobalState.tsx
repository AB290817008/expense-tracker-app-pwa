import React from 'react';
import { useReducer, createContext } from 'react';
import AppReducer from './AppReducer';
import { TransactionType, initialStateType } from '../interface';

const initialState: initialStateType = {
	transactions: [ { id: 1, text: 'Iphone', amount: 1000 } ],
	deleteTransaction: () => {},
	addTransaction: () => {}
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }: any) => {
	const [ state, dispatch ] = useReducer(AppReducer, initialState);

	function deleteTransaction(id: number) {
		dispatch({
			type: 'DELETE_TRANSACTION',
			payload: id
		});
	}

	function addTransaction(transaction: TransactionType) {
		dispatch({
			type: 'ADD_TRANSACTION',
			payload: transaction
		});
	}

	return (
		<GlobalContext.Provider
			value={{
				transactions: state.transactions,
				deleteTransaction,
				addTransaction
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
