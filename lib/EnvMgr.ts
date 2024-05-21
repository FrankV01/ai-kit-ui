"use server";

export type EnvironmentVariableType = {
  TOPIC: string;
  BASE_URL: string;
  GOOGLE_ANALYTICS_ID: string;
  APP_ID: string;
  DEBUG: boolean;
};

const envMgr: EnvironmentVariableType = {
  TOPIC: process.env.TOPIC || "poems",
  BASE_URL: process.env.API_URL ? `${process.env.API_URL}` : "", //"http://localhost:3001/poems";
  GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID || "G-BWCTMTSQR4",
  APP_ID: process.env.APP_ID || "1",
  DEBUG: (process.env.NODE_ENV || "production") === "development",
};
const EnvMgr = async () => envMgr;
const EvnMgrSync = () => envMgr;

export default EnvMgr;
export { EvnMgrSync };
