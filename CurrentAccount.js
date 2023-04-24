import { BankAccount } from "./BankAccount";

class CurrentAccount extends BankAccount {
    constructor(customerName, balance, overdraftLimit) {
        super(customerName, balance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount) {
        if (typeof amount !== "number") {
            throw new TypeError("Amount must be a number");
        }
        if (amount > this.balance + this.overdraftLimit) {
            throw new RangeError("Insufficient funds");
        }
        this.balance -= amount;
    }
}