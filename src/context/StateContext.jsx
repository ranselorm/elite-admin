import React, { createContext, useContext, useState } from "react";

// Create a context with default values
const StateContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
});

// Create a context provider component
const StateContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  //   console.log({ isOpen, setIsOpen });

  return (
    <StateContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </StateContext.Provider>
  );
};

// Custom hook to use the context values
const useStateContext = () => {
  return useContext(StateContext);
};

export { StateContextProvider, useStateContext };
