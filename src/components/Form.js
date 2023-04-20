import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuidv4 } from 'uuid';
import './Form.css'

const Form = () => {
  const [carName, setCarName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [distance, setDistance] = useState('');
  const [carType, setCarType] = useState('gasoline');

  const { addRefueling } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newRefueling = {
      id: uuidv4(),
      carName,
      quantity: parseFloat(quantity),
      price: parseFloat(price),
      distance: parseFloat(distance),
      carType,
    };

    addRefueling(newRefueling);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>¨
        <label for="carName">Car Name:</label>
        <input
          type="text"          
          value={carName}
          onChange={(e) => setCarName(e.target.value)}
          placeholder="Car Name"
          required
        />
        <label for="carType">Car Type:</label>
        <select value={carType} onChange={(e) => setCarType(e.target.value)}>
          <option value="gasoline">Gasoline</option>
          <option value="diesel">Diesel</option>
          <option value="electric">Electric</option>
        </select>
        <label for="quantity">Quantity of refueling:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min={0}
          required
        />
        <label for="price">Total price:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          min={0}
          required
        />
        <label for="distance">Distance driven:</label>
        <input
          type="number"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          min={0}
          required
        />        
        <button type="submit">Add Refueling Expense</button>
      </form>
    </div>
  );
};

export default Form;
