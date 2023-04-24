class BankAccount {
    static accountNumberCounter = 10000;

    constructor(customerName, balance = 0.00) {
        this.accountNumber = BankAccount.accountNumberCounter++;
        this.customerName = customerName;
        this.balance = balance;
    }

    get customerName() {
        return this._customerName;
    }

    set customerName(customerName) {
        if (typeof customerName !== "string") {
            throw new TypeError("Customer name must be a string");
        }
        this._customerName = customerName;
    }

    get accountNumber() {
        return this._accountNumber;
    }

    set accountNumber(accountNumber) {

        if (typeof accountNumber !== "number") {
            throw new TypeError("Account number must be a number");
        }
        this._accountNumber = accountNumber;
    }

    get balance() {
        return this._balance;
    }

    set balance(balance) {
        if (typeof balance !== "number") {
            throw new TypeError("Balance must be a number");
        }
        this._balance = balance;
    }

    deposit(amount) {
        if (typeof amount !== "number") {
            throw new TypeError("Amount must be a number");
        }
        this._balance += amount;
    }

    withdraw(amount) {
        if (typeof amount !== "number") {
            throw new TypeError("Amount must be a number");
        }
        this.balance -= amount;
    }
}

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

class SavingsAccount extends BankAccount {
    constructor(customerName, balance, interestRate) {
        super(customerName, balance);
        this.interestRate = interestRate;
    }

    addInterest() {
        this.balance += this.balance * this.interestRate;
    }
}

const account1 = new BankAccount("Sarah");
console.log(account1.customerName);
console.log(account1.accountNumber);
console.log(account1.balance);

account1.deposit(100);
console.log(account1.balance);

account1.withdraw(50);
console.log(account1.balance);

const account2 = new BankAccount("John", 100);
console.log(account2.accountNumber);

const account3 = new CurrentAccount("Jane", 100, 200);
console.log(account3.accountNumber);




const account4 = new SavingsAccount("Bob", 300, 0.05);
console.log(account4.accountNumber);