import React, { useContext } from 'react';
import { Transaction } from './Transaction';

import { GlobalContext } from '../context/GlobalState';



export const TransactionList = () => {
    //using destructuring
    const { transactions } = useContext(GlobalContext);
    //const context = useContext(GlobalContext);
    //console.log(context);
    return (
        <div>
            <h3>History</h3>
            <ul className="list">

                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}

            </ul>
        </div>
    )
}