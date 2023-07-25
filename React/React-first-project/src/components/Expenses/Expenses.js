import React from 'react';

import '/Users/prasenjitdas/Desktop/Codes/React/1.3-First-Project-Start/my-first-project/src/components/Expenses/Expenses.css';

import ExpenseItem from '/Users/prasenjitdas/Desktop/Codes/React/1.3-First-Project-Start/my-first-project/src/components/Expenses/ExpenseItem.js';

import Card from '/Users/prasenjitdas/Desktop/Codes/React/1.3-First-Project-Start/my-first-project/src/components/UI/Card.js';

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        date={props.item[0].date}
        title={props.item[0].title} //title = "School Fee"
        amount={props.item[0].amount}
      />
      <ExpenseItem
        date={props.item[1].date}
        title={props.item[1].title} //title = "School Fee"
        amount={props.item[1].amount}
      />
      <ExpenseItem
        date={props.item[2].date}
        title={props.item[2].title} //title = "School Fee"
        amount={props.item[2].amount}
      />
      <ExpenseItem
        date={props.item[3].date}
        title={props.item[3].title} //title = "School Fee"
        amount={props.item[3].amount}
      />
    </Card>
  );
}

export default Expenses;
