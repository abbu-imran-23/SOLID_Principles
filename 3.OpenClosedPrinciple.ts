/***
 * Example: Applying Open/Closed Principle (OCP) in TypeScript
 *
 * The following code demonstrates how the Open/Closed Principle (OCP) is applied.
 * OCP states that software entities should be open for extension but closed for modification.
 * This means adding new functionality should not require altering existing code.
 */

// Original Implementation: Before Applying OCP
// A Discount class that handles different customer types using conditionals.
/*
class Discount {
  constructor(public customerType: string, public amount: number) {}

  public calculateDiscount(): number {
    if (this.customerType === "regular") {
      return this.amount * 0.05;
    } else if (this.customerType === "silver") {
      return this.amount * 0.1;
    } else if (this.customerType === "gold") {
      return this.amount * 0.15;
    } else {
      throw new Error("Customer type not supported");
    }
  }
}

const regularCustomer = new Discount("regular", 1000);
console.log(regularCustomer.calculateDiscount()); // Outputs discount for regular customer

const goldCustomer = new Discount("gold", 2000);
console.log(goldCustomer.calculateDiscount()); // Outputs discount for gold customer
*/

// Improved Implementation: After Applying OCP
/**
 * The `Discount` class is now abstract, and specific customer types like Regular, Silver, and Gold
 * extend the base class to implement their own discount calculation.
 * Later, PremiumCustomer can be added without modifying existing code.
 */
abstract class Discount {
  /**
   * Abstract method to calculate the discount for a customer.
   * @returns {number} Discount amount.
   */
  public abstract calculateDiscount(): number;
}

/**
 * `RegularCustomer` class extends `Discount` and provides its implementation for discount calculation.
 */
class RegularCustomer extends Discount {
  constructor(private amount: number) {
    super();
  }

  public calculateDiscount(): number {
    return this.amount * 0.05;
  }
}

/**
 * `SilverCustomer` class extends `Discount` and provides its implementation for discount calculation.
 */
class SilverCustomer extends Discount {
  constructor(private amount: number) {
    super();
  }

  public calculateDiscount(): number {
    return this.amount * 0.1;
  }
}

/**
 * `GoldCustomer` class extends `Discount` and provides its implementation for discount calculation.
 */
class GoldCustomer extends Discount {
  constructor(private amount: number) {
    super();
  }

  public calculateDiscount(): number {
    return this.amount * 0.15;
  }
}

// Example Usage
const regularCustomer = new RegularCustomer(1000);
console.log(
  `Regular Customer Discount: ${regularCustomer.calculateDiscount()}`
); // Outputs discount for regular customer

const silverCustomer = new SilverCustomer(1000);
console.log(`Silver Customer Discount: ${silverCustomer.calculateDiscount()}`); // Outputs discount for silver customer

const goldCustomer = new GoldCustomer(1000);
console.log(`Gold Customer Discount: ${goldCustomer.calculateDiscount()}`); // Outputs discount for gold customer

/**
 * Adding a new customer type, such as PremiumCustomer, does not require modifying existing code.
 */
class PremiumCustomer extends Discount {
  constructor(private amount: number) {
    super();
  }

  public calculateDiscount(): number {
    return this.amount * 0.2;
  }
}

const premiumCustomer = new PremiumCustomer(1000);
console.log(
  `Premium Customer Discount: ${premiumCustomer.calculateDiscount()}`
); // Outputs discount for premium customer

export {};
