import React, { useContext } from 'react';
import { FuelExpenseContext } from '../context/FuelExpenseContext';
import './RefuelHistory.css';

const RefuelHistory = () => {
  const { expenses } = useContext(FuelExpenseContext);

  return (
    <div className="refuel-history">
      <h2>Refueling History</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.car}: {expense.liters} L - {expense.price}€ - {expense.distance} km
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RefuelHistory;
