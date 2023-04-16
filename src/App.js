import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import Form from './components/Form';
import RefuelingHistory from './components/RefuelingHistory';
import Totals from './components/Totals';


function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <h1>Car Fuel Expenses</h1>
        <Form />
        <RefuelingHistory />
        <Totals />
      </div>
    </GlobalProvider>
  );
}

export default App;
