// src/components/Credits.js
import React from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

const Credits = (props) => {
  let creditsView = () =>{
    const {credits} = props;
    return credits.map((credit) => {
        let date = credit.date.slice(0,10);
        return <li key = {credit.id}> {credit.amount} {credit.description} {date}</li>
    })
  }

  return (
    <div>
      <h1>Credits</h1>
      <Link to="/">Return to Home</Link>
      
      {creditsView()}

      <form onSubmit={props.addCredit}>
        <input type = 'text' name = 'description' placeholder = 'Description' />
        <input type = 'number' name = 'amount' placeholder = 'amount' step = ".01" />
        <button type = 'submit'>Add Credit</button>
      </form>

      <AccountBalance accountBalance={props.accountBalance}/>
    </div>
  )
}

export default Credits;