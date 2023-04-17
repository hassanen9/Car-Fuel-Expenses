import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './Totals.css';


const RefuelingHistory = () => {
  const { refuelings } = useContext(GlobalContext);

  return (
    <div>
      <h3>Refueling History</h3>
      <table className='positioned'>
        <caption>
          Refueling Histroy of all cars
        </caption>
        <thead>
          <tr> 
          <th scope='col'>Car name</th>
          <th scope='col'>Consumption</th>
          <th scope='col'>Price</th>
          <th scope='col'>Distance</th>
          <th scope='col'>Car type</th>
          </tr>
         
        </thead>
        <tbody>
        {refuelings.map((refueling) => (
          <tr key={refueling.id}>
            <td>{refueling.carName}</td>
            <td>{refueling.quantity} L</td>
            <td>{refueling.price}€</td>
            <td>{refueling.distance} km</td>
            <td>{refueling.carType}</td>
          </tr>
        ))}
        </tbody>
      </table>      
     
    </div>
  );
};

export default RefuelingHistory;
