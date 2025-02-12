// src/components/Debits.js
import React from 'react'
import {Link} from 'react-router-dom'
import AccountBalance from './AccountBalance';

const Debits = (props) => {
	let debitsView = () => {
    const { debits } = props;
    return debits.map((debit) => {
      let date = debit.date.slice(0,10);
      return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
    }) 
  }
  return (
    <div>
      <h1>Debits</h1>
      <Link to="/">Return to Home</Link>

      {debitsView()}

      <form onSubmit={props.addDebit}>
        <input type="text" name="description" placeholder = 'Description' />
        <input type="number" name="amount" placeholder = 'amount' step = '.01' />
        <button type="submit">Add Debit</button>
      </form>

      <AccountBalance accountBalance={props.accountBalance}/>
    </div>
  )
}

export default Debits;