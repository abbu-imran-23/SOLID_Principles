/***
 * Example: Applying Interface Segregation Principle (ISP) in TypeScript
 *
 * The following code demonstrates how the Interface Segregation Principle (ISP) is applied.
 * ISP states that a class should not be forced to implement interfaces it does not use.
 *
 * In layman's terms, don't add additional functionality to an existing interface by adding new methods.
 * Instead, smaller, more specific interfaces should be created to avoid unnecessary implementation.
 */

// Real-World Example: Printer System
// A base `Printer` interface originally defines multiple methods for various printer types.

/**
 * Problem: A single interface with methods for all printer types forces classes to implement methods they do not use.
 */
interface Printer {
  print(): void;
  scan(): void;
  fax(): void;
}

/**
 * Class `BasicPrinter` implements `Printer`, but it only supports printing. Methods like `scan` and `fax`
 * would remain unused, violating the Interface Segregation Principle.
 */
class BasicPrinter implements Printer {
  public print(): void {
    console.log("Printing document...");
  }

  public scan(): void {
    throw new Error("Scan not supported by BasicPrinter.");
  }

  public fax(): void {
    throw new Error("Fax not supported by BasicPrinter.");
  }
}

// Improved Implementation: After Applying ISP
/**
 * Smaller, specific interfaces are created for each functionality.
 */
interface Printable {
  print(): void;
}

interface Scannable {
  scan(): void;
}

interface Faxable {
  fax(): void;
}

/**
 * Class `BasicPrinter` implements only the `Printable` interface.
 */
class BasicPrinterISP implements Printable {
  public print(): void {
    console.log("Printing document...");
  }
}

/**
 * Class `AdvancedPrinter` implements multiple interfaces to support additional functionality.
 */
class AdvancedPrinter implements Printable, Scannable, Faxable {
  public print(): void {
    console.log("Printing document...");
  }

  public scan(): void {
    console.log("Scanning document...");
  }

  public fax(): void {
    console.log("Faxing document...");
  }
}

// Example Usage
const basicPrinter = new BasicPrinterISP();
basicPrinter.print(); // Output: Printing document...

const advancedPrinter = new AdvancedPrinter();
advancedPrinter.print(); // Output: Printing document...
advancedPrinter.scan(); // Output: Scanning document...
advancedPrinter.fax(); // Output: Faxing document...

/**
 * Adding new functionality, such as photocopying, does not require modifying existing classes.
 * A new interface can be created, and relevant classes can implement it as needed.
 */
interface Photocopyable {
  photocopy(): void;
}

class Photocopier implements Printable, Photocopyable {
  public print(): void {
    console.log("Printing document...");
  }

  public photocopy(): void {
    console.log("Photocopying document...");
  }
}

const photocopier = new Photocopier();
photocopier.print(); // Output: Printing document...
photocopier.photocopy(); // Output: Photocopying document...

export {};
