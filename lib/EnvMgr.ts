"use server";

const envMgr = {
  BASE_URL: process.env.API_URL ? `${process.env.API_URL}` : "", //"http://localhost:3001/poems";
};

export default async () => envMgr;
