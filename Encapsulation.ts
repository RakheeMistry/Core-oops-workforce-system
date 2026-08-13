// Encapsulation with Access Modifiers in TypeScript
class BankAccount {
    private balance: number;

    constructor(initialBalance: number){
        this.balance = initialBalance;
    }

    public deposit(amount: number): void {
        if(amount > 0){
            this.balance += amount;
            console.log(`Deposited: ${amount}. New balance: ${this.balance}`);
        }
    }

    public withdraw(amount: number): void {
        if(amount > 0 && amount <= this.balance){
            this.balance -= amount;
            console.log(`Withdrew: ${amount}. New balance: ${this.balance}`);
        } else {
            console.log(`Withdrawal of ${amount} failed. Insufficient funds.`);
        }
    }

    public getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount(1000);
account.deposit(500); // Deposited: 500. New balance: 1500
account.withdraw(200); // Withdrew: 200. New balance: 1300
console.log(`Current balance: ${account.getBalance()}`); // Current balance: 1300

// ❌ TypeScript Compilation Errors:
// console.log(account.balance);    // Property 'balance' is protected


// Encapsulation with Hard Private Fields (#field) vs TypeScript (private)
class User {
    private tsPrivate: string = "TS Private";
    #jsPrivate: string = "JS Hard Private";

    getSecret(){
        return this.#jsPrivate; // Internal access to JS private field
    }
}

const user = new User();

console.log(user.getSecret()); // Accessing JS private field through a method

// Error: Property 'tsPrivate' is private and only accessible within class 'User'. TS Private: Throws a TypeScript compiler error, but still exists at runtime.
//console.log(user.tsPrivate); 

// Error: Property '#jsPrivate' is a private field and only accessible within class 'User'. Hard Private: Causes a JavaScript Runtime SyntaxError if accessed directly
//console.log(user.#jsPrivate);

// Encapsulation with Getters and Setters
class Temperature{
    private _celsius: number = 0;

    // Getter
    get celsius(): number{
        return this._celsius;
    }

    // Setter with validation logic
    set celsius(value: number){
        if(value < -273.15){
            throw new Error("Temperature below absolute zero is impossible!");
        }
        this._celsius = value;
    }

    // Computed property
    get fahrenheit(): number {
        return (this._celsius * 9) / 5 + 32;
    }
}

const temp = new Temperature();
temp.celsius = 25; // Calls setter
console.log(temp.fahrenheit); // Calls getter -> 77
temp.celsius = -300; // Throws Error!