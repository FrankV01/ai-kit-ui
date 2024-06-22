import { BaseAppError } from "./BaseError";

export default class RequiredEnvironmentVariableError extends BaseAppError {
  constructor(message: string) {
    super(message);
    this.name = "RequiredEnvironmentVariableError";
  }
}
