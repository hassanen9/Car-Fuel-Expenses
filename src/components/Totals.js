import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import './Totals.css';

const Totals = () => {
  const { refuelings } = useContext(GlobalContext);

  const totalSum = refuelings.reduce((acc, cur) => acc + cur.price, 0);
  const totalConsumption = refuelings.reduce((acc, cur) => acc + cur.quantity, 0);
  const totalDistance = refuelings.reduce((acc, cur) => acc + cur.distance, 0);
  const avgExpensePer100Km = totalSum / totalDistance * 100;
  const avgConsumptionPer100Km = totalConsumption / totalDistance * 100;

  const carTotals = refuelings.reduce((acc, cur) => {
    if (!acc[cur.carName]) {
      acc[cur.carName] = {
        totalSum: 0,
        totalConsumption: 0,
        totalDistance: 0,
      };
    }

    acc[cur.carName].totalSum += cur.price;
    acc[cur.carName].totalConsumption += cur.quantity;
    acc[cur.carName].totalDistance += cur.distance;

    return acc;
  }, {});

  return (
    <div>      
      <table>
              <caption>
              Total refueling expenses by all cars
              </caption>
            <tbody>
            <tr>
              <th scope='row'>Total Sum</th>
              <td> {totalSum.toFixed(2)} €</td>
            </tr>
            <tr>
              <th scope='row'>Total consumption</th>
              <td> {totalConsumption.toFixed(2)} L</td>
            </tr>
            <tr>
              <th scope='row'>Total Distance</th>
              <td> {totalDistance.toFixed(2)} km</td>
            </tr>
            <tr>
              <th scope='row'>Average Expenses per 100 km</th>
              <td> {avgExpensePer100Km.toFixed(2)} €</td>            
            </tr>
            <tr>
              <th scope='row'>Average Consumption per 100 km</th>
              <td> { avgConsumptionPer100Km.toFixed(2) } L</td>
            </tr>
            </tbody>    
          </table>

      {Object.keys(carTotals).map((carName) => {
        const carTotal = carTotals[carName];
        const carAvgExpensePer100Km = carTotal.totalSum / carTotal.totalDistance * 100;
        const carAvgConsumptionPer100Km = carTotal.totalConsumption / carTotal.totalDistance * 100;

        return (
          <div key={carName}>
            <table>
              <caption>
              Total refueling expenses by the car {carName} 
              </caption>
            <tbody>
            <tr>
              <th scope='row'>Total Sum</th>
              <td> {carTotal.totalSum.toFixed(2)} €</td>
            </tr>
            <tr>
              <th scope='row'>Total Consumption</th>
              <td> {carTotal.totalConsumption.toFixed(2)} L</td>
            </tr>
            <tr>
              <th scope='row'>Total Distance</th>
              <td> {carTotal.totalDistance.toFixed(2)} km</td>
            </tr>
            <tr>
              <th scope='row'>Average Expenses per 100 km</th>
              <td> {carAvgExpensePer100Km.toFixed(2)} €</td>            
            </tr>
            <tr>
              <th scope='row'>Average Consumption per 100 km</th>
              <td> {carAvgConsumptionPer100Km.toFixed(2)} L</td>
            </tr>
            </tbody>    
            </table>            
            
          </div>
        );
      })}
    </div>
  );
};

export default Totals;
