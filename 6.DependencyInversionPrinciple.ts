/***
 * Example: Applying Dependency Inversion Principle (DIP) in TypeScript
 *
 * The following code demonstrates the Dependency Inversion Principle (DIP).
 *
 * DIP states that high-level modules should not depend on low-level modules. Both should depend on
 * abstractions. Abstractions should not depend on details. Details should depend on abstractions.
 *
 * In layman's terms, decouple high-level logic from low-level implementation by using abstractions,
 * which makes the code more flexible and easier to maintain.
 */

// Real-World Example: Database Operations

// Problem: High-level module directly depends on specific low-level modules (databases).
// This makes it difficult to switch databases or add new ones without modifying the high-level module.

class MySqlDatabase {
  save(data: string): void {
    console.log(`${data} is being saved to MySQL`);
  }
}

class MongoDbDatabase {
  save(data: string): void {
    console.log(`${data} is being saved to MongoDB`);
  }
}

/**
 * The `HighLevelModule` directly depends on specific databases like `MySqlDatabase` and `MongoDbDatabase`.
 * This violates the Dependency Inversion Principle.
 */
class HighLevelModule {
  private mysqlDatabase: MySqlDatabase;
  private mongoDatabase: MongoDbDatabase;

  constructor() {
    this.mysqlDatabase = new MySqlDatabase(); // Tightly coupled with MySQL
    this.mongoDatabase = new MongoDbDatabase(); // Tightly coupled with MongoDB
  }

  saveToMySQL(data: string): void {
    this.mysqlDatabase.save(data); // Direct dependency on MySQL
  }

  saveToMongoDB(data: string): void {
    this.mongoDatabase.save(data); // Direct dependency on MongoDB
  }
}

// Example Usage
let highLevelModule = new HighLevelModule();
highLevelModule.saveToMySQL("User data"); // Output: User data is being saved to MySQL
highLevelModule.saveToMongoDB("Post data"); // Output: Post data is being saved to MongoDB

/**
 * Issue: If we need to add a new database type (e.g., PostgreSQL), we must modify the `HighLevelModule` class,
 * which violates the Dependency Inversion Principle because the high-level module depends directly on low-level database implementations.
 */

/**
 * Solution: Apply the Dependency Inversion Principle (DIP)
 * To solve this, we introduce an abstraction (`IDatabase`) that both high-level and low-level modules depend on.
 */

/**
 * Step 1: Create an abstraction for the database (interface `IDatabase`).
 */
interface IDatabase {
  save(data: string): void;
}

/**
 * Step 2: Modify low-level modules (e.g., `MySqlDatabase`, `MongoDbDatabase`) to implement the `IDatabase` interface.
 */
class MySqlDatabaseDIP implements IDatabase {
  save(data: string): void {
    console.log(`${data} is being saved to MySQL`);
  }
}

class MongoDbDatabaseDIP implements IDatabase {
  save(data: string): void {
    console.log(`${data} is being saved to MongoDB`);
  }
}

/**
 * Step 3: Modify the high-level module (`HighLevelModule`) to depend on the `IDatabase` abstraction instead of specific databases.
 */
class HighLevelModuleDIP {
  private database: IDatabase;

  // Now the high-level module can accept any database that implements the IDatabase interface.
  constructor(database: IDatabase) {
    this.database = database;
  }

  saveData(data: string): void {
    this.database.save(data); // The high-level module now depends on the abstraction.
  }
}

// Example Usage with DIP
let mysqlDIP = new MySqlDatabaseDIP();
let mongoDIP = new MongoDbDatabaseDIP();

let userModule = new HighLevelModuleDIP(mysqlDIP); // Dependency Injection
userModule.saveData("User data"); // Output: User data is being saved to MySQL

let postModule = new HighLevelModuleDIP(mongoDIP); // Dependency Injection
postModule.saveData("Post data"); // Output: Post data is being saved to MongoDB

/**
 * The high-level module (`HighLevelModuleDIP`) now depends on the abstraction (`IDatabase`), not specific database implementations.
 * This allows easy swapping between different database types (e.g., PostgreSQL, MySQL, MongoDB) without changing the high-level module.
 * Adding a new database type is now easy: simply implement the `IDatabase` interface and inject the appropriate dependency.
 */
