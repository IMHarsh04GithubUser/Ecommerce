import { children, createContext, useState } from "react";

export const EContext = createContext();

export const EProvider = ({ children }) => {
  const [hovermouse, sethoverouse] = useState(false);
  const handleHoverUp = () => {
    sethoverouse(true);
  };

  const handleHoverDown = () => {
    sethoverouse(false);
  };

  return (
    <EContext.Provider value={{ hovermouse, handleHoverUp, handleHoverDown }}>
      {children}
    </EContext.Provider>
  );
};
