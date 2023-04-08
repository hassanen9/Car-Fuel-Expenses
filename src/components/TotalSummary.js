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
      <h2>Total Summary</h2>
      <p>Total Sum: {totalSum.toFixed(2)} €</p>
      <p>Total Liters: {totalLiters.toFixed(2)} L</p>
      <p>Total Distance: {totalDistance.toFixed(2)} km</p>
      <p>Average Expenses per 100 km: {averageExpensesPer100Km.toFixed(2)} €</p>
      <p>Average Consumption per 100 km: {averageConsumptionPer100Km} L</p>
    </div>
  );
};

export default TotalSummary;
