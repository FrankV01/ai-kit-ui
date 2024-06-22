"use server";

import RequiredEnvironmentVariableError from "./errors/RequiredEnvironmentVariableError";

// TODO: Move this to types.
export type EnvironmentVariableType = {
  NODE_ENV: string;
  BASE_API_URL: string;
  APP_ID: string;
  DEBUG: boolean;
  GOOGLE_CLIENT_ID: string;
  GOOGLE_CLIENT_SECRET: string;
};

const NOT_SET: string = "not-set";

const throwAnError = () => {
  throw new RequiredEnvironmentVariableError(
    "Required environment variable is missing!",
  );
};

const envMgr: EnvironmentVariableType = {
  BASE_API_URL: process.env.API_URL ? `${process.env.API_URL}` : throwAnError(), //"http://localhost:3001/poems";
  APP_ID: process.env.APP_ID || throwAnError(),
  DEBUG: (process.env.NODE_ENV || "production") === "development",
  NODE_ENV: process.env.NODE_ENV || "development",
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || NOT_SET,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET || NOT_SET,
};
const EnvMgr = async (): Promise<EnvironmentVariableType> => envMgr;
const EvnMgrSync = (): EnvironmentVariableType => envMgr;

export default EnvMgr;
export { EvnMgrSync };
