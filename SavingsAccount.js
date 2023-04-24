import { BankAccount } from "./BankAccount";

class SavingsAccount extends BankAccount {
    constructor(customerName, balance, interestRate) {
        super(customerName, balance);
        this.interestRate = interestRate;
    }

    addInterest() {
        this.balance += this.balance * this.interestRate;
    }
}