"use server";

const envMgr = {
  BASE_URL: process.env.API_URL ? `${process.env.API_URL}` : "", //"http://localhost:3001/poems";
  GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID || "G-BWCTMTSQR4",
};

export default async () => envMgr;
