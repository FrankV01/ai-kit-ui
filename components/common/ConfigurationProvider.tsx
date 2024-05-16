"use client";

import React, { createContext, ReactNode, useContext } from "react";
import { Configurations, ReactChildrenType } from "../../lib/Types";

/**
 * Context that holds the configurations.
 */
const ConfigurationContext = createContext<Configurations>(
  [] as unknown as Configurations,
);

/**
 * A custom hook to use the ConfigurationContext, this is a best practice.
 * Use this to get access to the configurations.
 */
export const useConfiguration = () => {
  return useContext(ConfigurationContext);
};

export type ConfigurationProviderProps = ReactChildrenType & {
  configurations: Readonly<Configurations>;
};

/**
 * This is a provider that will provide the configurations to the children.
 * It's a client component and holds the configurations for any child element
 * that might need it.
 *
 * Be mindful of what elements are passed in. This is a client component and
 * values can be viewed in the browser.
 *
 * @param children
 * @param configurations - Passed in. They must be because we want next.js
 * to call the API at the server and return it to the client.
 * @constructor
 */
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
