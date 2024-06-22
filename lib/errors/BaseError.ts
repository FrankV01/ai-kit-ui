import { EvnMgrSync } from "../EnvMgr";

export abstract class BaseAppError extends Error {
  protected debugMode: boolean;

  public constructor(message?: string) {
    super(message); // Pass the message to the parent class

    this.debugMode = EvnMgrSync().DEBUG; //Set from environment variable.

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
