const MSG = "Missing environment variable";
const defaultOrError = (theDefault: string) => {
  if (process.env.NODE_ENV === "production") {
    throw new Error(MSG);
  } else {
    console.warn(MSG);
    return theDefault;
  }
};

// We don't have access to these. Something said we should but it never made sense.
//TODO: Fix or improve.
const EnvMgr = {
  nodeEnv: process.env.NODE_ENV || defaultOrError("development"),
  port: Number.parseInt(
    process.env.REACT_APP_PORT || process.env.PORT || defaultOrError("8180"),
  ),
  topic: process.env.REACT_APP_TOPIC || defaultOrError("Debug"),
  apiKey:
    process.env.REACT_APP_API_KEY ||
    defaultOrError(
      "$2b$15$TmCfGtr5rb1gQJm9HIO8BOftwPdp.3M4nF/mwymha0VSCmatC2Uni",
    ),
  apiUrl:
    process.env.REACT_APP_API_URL || defaultOrError("http://localhost:3000"),
};

export { EnvMgr };
