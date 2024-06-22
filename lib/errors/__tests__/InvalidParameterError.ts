import InvalidParameterError from "../../errors/InvalidParameterError";
import { BaseAppError } from "../BaseError";

jest.mock("../../EnvMgr");

describe("InvalidParameterError", () => {
  it("should correctly set the error message", () => {
    const errorMessage = "Invalid parameter";
    const error = new InvalidParameterError(errorMessage);
    expect(error.message).toBe(errorMessage);
  });

  it("should correctly set the error name", () => {
    const error = new InvalidParameterError("Invalid parameter");
    expect(error.name).toBe("InvalidParameterError");
  });

  it("should be an instance of Error", () => {
    const error = new InvalidParameterError("Invalid parameter");
    expect(error).toBeInstanceOf(Error);
  });

  it("should be an instance of BaseAppError", () => {
    const error = new InvalidParameterError("Invalid parameter");
    expect(error).toBeInstanceOf(BaseAppError);
  });
});
