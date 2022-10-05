import { createContext, useState } from 'react';

const IsFillContext = createContext();

const IsFillContextProvider = ({ children }) => {
  const [isFill, setIsFill] = useState(false);

  return (
    <IsFillContext.Provider value={{ isFill, setIsFill }}>
      {children}
    </IsFillContext.Provider>
  );
};

export { IsFillContext, IsFillContextProvider };
