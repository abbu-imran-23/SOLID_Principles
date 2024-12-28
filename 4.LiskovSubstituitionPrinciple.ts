/***
 * Example: Applying Liskov Substitution Principle (LSP) in TypeScript
 *
 * The following code demonstrates how the Liskov Substitution Principle (LSP) is applied.
 * LSP states that objects of a superclass should be replaceable with objects of its subclasses
 * without altering the correctness of the program.
 */

// Real-World Example: Payment Processing System
// A base `Payment` class defines a contract for all types of payment methods.

/**
 * Base class `Payment` defines a contract for processing payments.
 */
abstract class Payment {
  /**
   * Abstract method to process a payment.
   * @param {number} amount - The payment amount.
   */
  public abstract processPayment(amount: number): void;
}

/**
 * `CreditCardPayment` class extends `Payment` and implements payment processing for credit cards.
 */
class CreditCardPayment extends Payment {
  public processPayment(amount: number): void {
    console.log(`Processed credit card payment of $${amount}`);
  }
}

/**
 * `PayPalPayment` class extends `Payment` and implements payment processing for PayPal.
 */
class PayPalPayment extends Payment {
  public processPayment(amount: number): void {
    console.log(`Processed PayPal payment of $${amount}`);
  }
}

/**
 * `BankTransferPayment` class extends `Payment` and implements payment processing for bank transfers.
 */
class BankTransferPayment extends Payment {
  public processPayment(amount: number): void {
    console.log(`Processed bank transfer payment of $${amount}`);
  }
}

// Example Usage
function processCustomerPayment(paymentMethod: Payment, amount: number): void {
  paymentMethod.processPayment(amount);
}

const creditCardPayment = new CreditCardPayment();
processCustomerPayment(creditCardPayment, 100); // Processed credit card payment of $100

const payPalPayment = new PayPalPayment();
processCustomerPayment(payPalPayment, 200); // Processed PayPal payment of $200

const bankTransferPayment = new BankTransferPayment();
processCustomerPayment(bankTransferPayment, 300); // Processed bank transfer payment of $300

/**
 * Adding a new payment method, such as `CryptoPayment`, does not require modifying existing code.
 * The new class can seamlessly integrate with the existing system by adhering to the `Payment` contract.
 */
class CryptoPayment extends Payment {
  public processPayment(amount: number): void {
    console.log(`Processed cryptocurrency payment of $${amount}`);
  }
}

const cryptoPayment = new CryptoPayment();
processCustomerPayment(cryptoPayment, 400); // Processed cryptocurrency payment of $400

export {};
