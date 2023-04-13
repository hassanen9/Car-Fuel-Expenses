import React, { useContext } from 'react';
import { FuelExpenseContext } from '../context/FuelExpenseContext';
import './TotalSummary.css';

const TotalSummary = () => {
  const { expenses } = useContext(FuelExpenseContext);

  const totalSum = expenses.reduce((acc, expense) => acc + expense.price, 0);
  const totalLiters = expenses.reduce((acc, expense) => acc + expense.liters, 0);
  const totalDistance = expenses.reduce((acc, expense) => acc + expense.distance, 0);

  const averageExpensesPer100Km = (totalSum / totalDistance) * 100;
  const averageConsumptionPer100Km =
    totalLiters > 0 ? (totalLiters / totalDistance) * 100 : 'N/A';

  return (    
    <div className="total-summary">
            <table>
              <caption>
              Total refueling expenses by all cars
              </caption>
            <tr>
              <th scope='row'>Total Sum</th>
              <td> {totalSum.toFixed(2)} €</td>
            </tr>
            <tr>
              <th scope='row'>Total Liters</th>
              <td> {totalLiters.toFixed(2)} L</td>
            </tr>
            <tr>
              <th scope='row'>Total Distance</th>
              <td> {totalDistance.toFixed(2)} km</td>
            </tr>
            <tr>
              <th scope='row'>Average Expenses per 100 km</th>
              <td> {averageExpensesPer100Km.toFixed(2)} €</td>            
            </tr>
            <tr>
              <th scope='row'>Average Consumption per 100 km</th>
              <td> {averageConsumptionPer100Km.toFixed(2)} L</td>
            </tr>    
            </table>             
        </div>
  );
};

export default TotalSummary;
