import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


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
      <h3>Totals</h3>
      <div>
        <h4>All Cars:</h4>
        <p>Total sum: {totalSum.toFixed(2)}€</p>
        <p>Total consumption: {totalConsumption.toFixed(2)} L</p>
        <p>Total distance: {totalDistance.toFixed(2)} km</p>
        <p>Average expenses per 100 km: {avgExpensePer100Km.toFixed(2)}€</p>
        <p>Average consumption per 100 km: {avgConsumptionPer100Km.toFixed(2)} L</p>
      </div>
      {Object.keys(carTotals).map((carName) => {
        const carTotal = carTotals[carName];
        const carAvgExpensePer100Km = carTotal.totalSum / carTotal.totalDistance * 100;
        const carAvgConsumptionPer100Km = carTotal.totalConsumption / carTotal.totalDistance * 100;

        return (
          <div key={carName}>
            <h4>{carName}:</h4>
            <p>Total sum: {carTotal.totalSum.toFixed(2)}€</p>
            <p>Total consumption: {carTotal.totalConsumption.toFixed(2)} L</p>
            <p>Total distance: {carTotal.totalDistance.toFixed(2)} km</p>
            <p>Average expenses per 100 km: {carAvgExpensePer100Km.toFixed(2)}€</p>
            <p>Average consumption per 100 km: {carAvgConsumptionPer100Km.toFixed(2)} L</p>
          </div>
        );
      })}
    </div>
  );
};

export default Totals;
