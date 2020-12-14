
import {GlobalContext} from '../Context/GlobalState'

import {Transaction} from './Transaction'

import {useContext} from 'react';
import {TransactionType} from "../interface"

export const TransactionList = () => {
    
    const {transactions} = useContext(GlobalContext);
    

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map((transaction: TransactionType) => (<Transaction key={transaction.id} transactions={transaction} />))}
            </ul>


        </>
    )
}
