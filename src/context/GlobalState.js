import React, { createContext, useReducer } from 'react';

const initialState = {
  refuelings: [],
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_REFUELING':
      return {
        ...state,
        refuelings: [...state.refuelings, action.payload],
      };
    default:
      return state;
  }
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function addRefueling(refueling) {
    dispatch({
      type: 'ADD_REFUELING',
      payload: refueling,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        refuelings: state.refuelings,
        addRefueling,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
