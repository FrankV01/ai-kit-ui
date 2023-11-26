const MSG = "Missing environment variable";
const defaultOrError = (theDefault: string) => {
  if (process.env.NODE_ENV === "production") {
    throw new Error(MSG);
  } else {
    console.warn(MSG);
    return theDefault;
  }
};

const EnvMgr = {
  nodeEnv: process.env.NODE_ENV || defaultOrError("development"),
  port: Number.parseInt(process.env.PORT || defaultOrError("3000")),
  topic: process.env.TOPIC || defaultOrError("Debug"),
  apiKey: process.env.API_KEY || defaultOrError("development"),
  apiUrl: process.env.API_URL || defaultOrError("http://localhost:8080"),
};
export { EnvMgr };
