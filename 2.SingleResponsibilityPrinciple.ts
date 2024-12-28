/***
 * Example: Applying Single Responsibility Principle (SRP) in Typescript
 *
 * The following code demonstrates how the Single Responsibility Principle (SRP) is applied.
 * Before applying SRP, the `User` class handled both user-related operations and logging.
 * After applying SRP, these responsibilities are split into separate classes.
 */

// Original Implementation: Before SRP
// The `User` class handles both user operations and logging.
/*
class User {
  constructor(
    public name: string,
    public email: string,
    private password: string
  ) {}

  public getUser(): any {
    return { name: this.name, email: this.email };
  }

  public save(): void {
    console.log(`User ${JSON.stringify(this.getUser())} saved to database`);
    // Logger
    console.log(
      `LOG: User ${JSON.stringify(
        this.getUser()
      )} saved to database at ${new Date().toISOString()}`
    );
  }
}

const user = new User("Alice", "alice@example.com", "AlicePassword");
user.save();
*/

// Improved Implementation: After Applying SRP
/**
 * `User` class now only handles user-related operations such as getting user details
 * and saving user data.
 */
class User {
  constructor(
    public name: string,
    public email: string,
    private password: string
  ) {}

  /**
   * Retrieves user details.
   * @returns {object} An object containing user name and email.
   */
  public getUser(): any {
    return { name: this.name, email: this.email };
  }

  /**
   * Saves the user to the database (simulated).
   */
  public save(): void {
    console.log(`User ${JSON.stringify(this.getUser())} saved to database`);
  }
}

/**
 * `Logger` class now handles logging operations independently.
 */
class Logger {
  /**
   * Logs a message with a timestamp.
   * @param {string} message - The message to be logged.
   */
  public log(message: string): void {
    console.log(`LOG: ${message} at ${new Date().toISOString()}`);
  }
}

// Example Usage
const user = new User("Alice", "alice@example.com", "AlicePassword");
user.save();

const logger = new Logger();
logger.log(`User ${JSON.stringify(user.getUser())} saved`);

export {};
