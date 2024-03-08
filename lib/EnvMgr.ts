"use server";

const envMgr = {
  TOPIC: process.env.TOPIC || "poems",
  BASE_URL: process.env.API_URL ? `${process.env.API_URL}` : "", //"http://localhost:3001/poems";
  GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID || "G-BWCTMTSQR4",
  APP_ID: process.env.APP_ID || "poems",
};
const EnvMgr = async () => envMgr;
const EvnMgrSync = () => envMgr;

export default EnvMgr;
export { EvnMgrSync };
