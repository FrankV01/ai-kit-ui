//
// Under_Dev: We can't use EvnMgr or EvnMgrSync because
//  it creates a circular reference given that
//  RequiredEnvironmentVariableError is derived
//  from BaseAppError.
//

export abstract class BaseAppError extends Error {
  protected debugMode: boolean;

  public constructor(message?: string) {
    super(message); // Pass the message to the parent class

    try {
      // Set from environment variable.
      this.debugMode = process.env?.DEBUG?.toLowerCase() === "true";
    } catch (err) {
      this.debugMode = true;
    }

    // Set the name of the error
    this.name = "BaseAppError"; //Expect to be overridden by child classes.

    // This line is needed to restore the correct prototype chain.
    Object.setPrototypeOf(this, new.target.prototype);

    this.printError();
  }

  protected printError() {
    if (this.debugMode) {
      console.log("-".repeat(80));
      console.log(typeof this);
      console.log(this.name, this.message);
      console.log("-".repeat(80));
    }
  }
}
