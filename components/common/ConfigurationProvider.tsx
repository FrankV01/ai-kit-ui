"use client";

import React, { createContext, ReactNode, useContext } from "react";
import { Configurations, ReactChildrenType } from "../../lib/Types";

// Create a new context What is the type?
const ConfigurationContext = createContext<Configurations>(
  [] as unknown as Configurations,
);

// Create a custom hook to use the ConfigurationContext, this is a best practice
export const useConfiguration = () => {
  return useContext(ConfigurationContext);
};

export type ConfigurationProviderProps = ReactChildrenType & {
  configurations: Readonly<Configurations>;
};

export const ConfigurationProvider = ({
  children,
  configurations,
}: ConfigurationProviderProps) => {
  return (
    <ConfigurationContext.Provider value={configurations}>
      {children}
    </ConfigurationContext.Provider>
  );
};
