import React, { createContext, useState } from "react";

export const ShippingContext = createContext();

export const ShippingProvider = ({ children }) => {
  const [boxes, setBoxes] = useState([]);

  const addBox = (box) => {
    setBoxes([...boxes, box]);
  };

  return (
    <ShippingContext.Provider value={{ boxes, addBox }}>
      {children}
    </ShippingContext.Provider>
  );
};
