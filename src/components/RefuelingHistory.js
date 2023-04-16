import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


const RefuelingHistory = () => {
  const { refuelings } = useContext(GlobalContext);

  return (
    <div>
      <h3>Refueling History</h3>
      <ul>
        {refuelings.map((refueling) => (
          <li key={refueling.id}>
            {refueling.carName} - {refueling.quantity} L - {refueling.price}€ - {refueling.distance} km - {refueling.carType}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RefuelingHistory;
