import React, { useContext } from 'react';
import { FuelExpenseContext } from '../context/FuelExpenseContext';
import './RefuelHistory.css';

const RefuelHistory = () => {
  const { expenses } = useContext(FuelExpenseContext);

  return (
    <div className="refuel-history">
      <h2>Refueling History</h2>
      <table className='positioned'>
        <caption>
          Refueling Histroy of all cars
        </caption>
        <thead>
          <th scope='col'>Car name</th>
          <th scope='col'>Liters</th>
          <th scope='col'>Price</th>
          <th scope='col'>Distance</th>
        </thead>
        <tbody>
        {expenses.map((expense, index) => (
          <tr key={index}>
            <td>{expense.car}</td>
            <td>{expense.liters} L</td>
            <td>{expense.price}€</td>
            <td>{expense.distance} km</td>
          </tr>
        ))}
        </tbody>
      </table>      
    </div>
  );
};

export default RefuelHistory;
