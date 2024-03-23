import { BaseAppError } from "./BaseError";

export default class InvalidParameterError extends BaseAppError {
  constructor(message: string) {
    super(message);
    this.name = "InvalidParameterError";
  }
}
