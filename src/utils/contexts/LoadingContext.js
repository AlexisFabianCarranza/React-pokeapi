import React, { createContext, useState } from "react";

export const LoadingContext = createContext();

const useStateContext = () => {
  const [isLoading, setIsLoading] = useState(false);

  const changeIsLoading = (newValue) => {
    setIsLoading(newValue);
  };

  return {
    isLoading,
    changeIsLoading,
  };
};

export const LoadingProvider = (props) => {
  const contextState = useStateContext();
  return (
    <LoadingContext.Provider value={contextState}>
      {props.children}
    </LoadingContext.Provider>
  );
};
