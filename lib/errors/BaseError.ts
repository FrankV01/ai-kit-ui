export abstract class BaseAppError extends Error {
  constructor(message?: string) {
    super(message); // Pass the message to the parent class
    // Set the name of the error
    this.name = "BaseAppError"; //Expect to be overridden by child classes.

    // This line is needed to restore the correct prototype chain.
    Object.setPrototypeOf(this, new.target.prototype);
    console.log(this.name, this.message);
  }
}
