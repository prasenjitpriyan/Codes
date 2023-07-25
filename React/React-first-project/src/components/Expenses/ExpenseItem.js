import React from 'react';

import '/Users/prasenjitdas/Desktop/Codes/React/1.3-First-Project-Start/my-first-project/src/components/Expenses/ExpenseItem.css';

import ExpenseDate from '/Users/prasenjitdas/Desktop/Codes/React/1.3-First-Project-Start/my-first-project/src/components/Expenses/ExpenseDate.js';

import Card from '/Users/prasenjitdas/Desktop/Codes/React/1.3-First-Project-Start/my-first-project/src/components/UI/Card.js';

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
