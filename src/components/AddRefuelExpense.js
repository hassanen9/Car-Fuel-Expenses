import React, { useState, useContext } from 'react';
import { FuelExpenseContext } from '../context/FuelExpenseContext';
import './AddRefuelExpense.css';

const AddRefuelExpense = () => {
  const [car, setCar] = useState('');
  const [liters, setLiters] = useState('');
  const [price, setPrice] = useState('');
  const [distance, setDistance] = useState('');

  const { setExpenses } = useContext(FuelExpenseContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      car,
      liters: parseFloat(liters),
      price: parseFloat(price),
      distance: parseFloat(distance),
    };

    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);

    setCar('');
    setLiters('');
    setPrice('');
    setDistance('');
  };

  return (
    <div className="add-refuel-expense">
      <h2>Add Refueling Expense</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Car Name"
          value={car}
          onChange={(e) => setCar(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Liters"
          value={liters}
          onChange={(e) => setLiters(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Distance (km)"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          required
        />
        <button type="submit">Add Refueling Expense</button>
      </form>
    </div>
  );
};

export default AddRefuelExpense;


