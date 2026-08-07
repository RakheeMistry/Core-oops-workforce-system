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
account.deposit(500);
account.withdraw(200);
console.log(`Current balance: ${account.getBalance()}`);