import { EnvironmentVariableType } from "../EnvMgr";

const mockEnvMgr: EnvironmentVariableType = {
  NODE_ENV: "unit-test",
  BASE_API_URL: "http://localhost:3000",
  APP_ID: "1",
  DEBUG: false,
  GOOGLE_CLIENT_ID: "unit-test_google_client_id",
  GOOGLE_CLIENT_SECRET: "unit-test_google_client_secret",
};

const MockEnvMgrAsync = () => Promise.resolve(mockEnvMgr);
const MockEnvMgrSync = () => mockEnvMgr;

export default MockEnvMgrAsync;
export { MockEnvMgrSync as EvnMgrSync };
