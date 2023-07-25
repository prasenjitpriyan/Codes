import React from 'react';

import Expenses from '/Users/prasenjitdas/Desktop/Codes/React/1.3-First-Project-Start/my-first-project/src/components/Expenses/Expenses.js';

function App() {
  let expenses = [
    {
      id: 'e1',
      title: 'School Fee',
      amount: 250,
      date: new Date(2023, 5, 12),
    },
    {
      id: 'e2',
      title: 'Books',
      amount: 230,
      date: new Date(2023, 2, 22),
    },
    {
      id: 'e3',
      title: 'House Rent',
      amount: 700,
      date: new Date(2023, 4, 2),
    },
    {
      id: 'e4',
      title: 'Food',
      amount: 540,
      date: new Date(2023, 5, 4),
    },
  ];

  return (
    <div>
      <h2>Let's get started</h2>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
