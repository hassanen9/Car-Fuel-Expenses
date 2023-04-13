import React, { useContext } from 'react';
import { FuelExpenseContext } from '../context/FuelExpenseContext';
import './CarSummary.css';

const CarSummary = () => {
  const { expenses } = useContext(FuelExpenseContext);

  // Calculate summary statistics per car
  const carExpenses = expenses.reduce((acc, expense) => {
    if (!acc[expense.car]) {
      acc[expense.car] = {
        totalSum: 0,
        totalLiters: 0,
        totalDistance: 0,
      };
    }

    acc[expense.car].totalSum += expense.price;
    acc[expense.car].totalLiters += expense.liters;
    acc[expense.car].totalDistance += expense.distance;

    return acc;
  }, {});

  return (
    <div className="car-summary">
      <h2>Car Summary</h2>
      {Object.entries(carExpenses).map(([car, data]) => {
        const averageExpensesPer100Km = (data.totalSum / data.totalDistance) * 100;
        const averageConsumptionPer100Km =
          data.totalLiters > 0 ? (data.totalLiters / data.totalDistance) * 100 : 'N/A';

        return (
          <div key={car} className="car-summary-item">
            <table>
              <caption>
              Total refueling expenses by the car {car} 
              </caption>
            <tbody>
            <tr>
              <th scope='row'>Total Sum</th>
              <td> {data.totalSum.toFixed(2)} €</td>
            </tr>
            <tr>
              <th scope='row'>Total Liters</th>
              <td> {data.totalLiters.toFixed(2)} L</td>
            </tr>
            <tr>
              <th scope='row'>Total Distance</th>
              <td> {data.totalDistance.toFixed(2)} km</td>
            </tr>
            <tr>
              <th scope='row'>Average Expenses per 100 km</th>
              <td> {averageExpensesPer100Km.toFixed(2)} €</td>            
            </tr>
            <tr>
              <th scope='row'>Average Consumption per 100 km</th>
              <td> {averageConsumptionPer100Km.toFixed(2)} L</td>
            </tr>
            </tbody>    
            </table>                   
          </div>
        );
      })}
    </div>
  );
};

export default CarSummary;
