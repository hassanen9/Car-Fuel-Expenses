import React, { createContext, useState } from 'react';

const FuelExpenseContext = createContext();

const FuelExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  return (
    <FuelExpenseContext.Provider value={{ expenses, setExpenses }}>
      {children}
    </FuelExpenseContext.Provider>
  );
};

export { FuelExpenseContext, FuelExpenseProvider };



