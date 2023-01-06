/* 
Encapsulation is the principle of bundling data and methods that operate on that data within a single unit, or object.
*/

class BankAccount {
    // Declare a private variable to store the balance
    #balance = 0;
  
    // Declare a constructor to initialize the balance
    constructor(balance) {
      this.#balance = balance;
    }
  
    // Declare a method to deposit money
    deposit(amount) {
      this.#balance += amount;
    }
  
    // Declare a method to withdraw money
    withdraw(amount) {
      this.#balance -= amount;
    }
  
    // Declare a method to get the balance
    getBalance() {
      return this.#balance;
    }
  }

  /* 
  In this example, the BankAccount class is an example of encapsulation because it bundles the #balance data member, the deposit(),
   withdraw(), and getBalance() methods within the same unit. 
   The #balance data member is marked as private using the private field syntax, meaning it can only be accessed within the class.
  */




  // Create a new BankAccount object with a starting balance of 1000
const account = new BankAccount(1000);

console.log(account.getBalance())

console.log(account.balance); // will come back as undefined as its private.

// Deposit 500
account.deposit(500);

console.log(account.getBalance());

// Withdraw 200
account.withdraw(200);

// Get the current balance
console.log(account.getBalance()); // Output: 1300

/*
Encapsulation is a useful technique for organizing code and protecting data within an object.
 By bundling related data and methods together, you can create reusable and modular units of code that are easy to understand and maintain.
 ss
*/