import React from 'react';
import AddRefuelExpense from './components/AddRefuelExpense';
import RefuelHistory from './components/RefuelHistory';
import CarSummary from './components/CarSummary';
import TotalSummary from './components/TotalSummary';
import { FuelExpenseProvider } from './context/FuelExpenseContext';
import './App.css';

function App() {
  return (
    <FuelExpenseProvider>
      <div className="App">
        <h1>Car Fuel Expenses</h1>
        <AddRefuelExpense />
        <RefuelHistory />
        <CarSummary />
        <TotalSummary />
      </div>
    </FuelExpenseProvider>
  );
}

export default App;

