// Method Overriding in TypeScript
class Animal{
    makeSound() : void{
        console.log("Animal makes a sound");
    }
}
class Dog extends Animal{
    makeSound() : void{
        console.log("Dog barks");
    }
}

const dog = new Dog();
dog.makeSound();


// Calling the parent class method using super keyword in TypeScript
class Employee{
    getSalary() : number{
        return 50000;
    }
}
class Manager extends Employee{
    bonus : number = 10000;
    getSalary() : number{
        return super.getSalary() + this.bonus;
    }
}

const mgr = new Manager();
console.log(mgr.getSalary());


// Method Overriding with Abstract Classes in TypeScript
abstract class PaymentProcessor{
    abstract processPayment(amount: number): void;
    generateReceipt(amount: number): string{
        return `Receipt generated for amount: ${amount}`;
    }
}
class StripeProcessor extends PaymentProcessor{
    processPayment(amount: number): void{
        console.log(`Processing payment of ${amount} through Stripe`);
    }
    override generateReceipt(amount: number): string{
        const baseReceipt = super.generateReceipt(amount);
        return `${baseReceipt} - Processed by Stripe`;
    }
}

const stripe = new StripeProcessor();
stripe.processPayment(100);
console.log(stripe.generateReceipt(100));


// Method Overriding with Interfaces in TypeScript
interface Logger {
    log(message: string | object): void;
}
// Extending the interface and narrowing the signature
interface StrictConsoleLogger extends Logger {
    // Narrows parameter to strictly string
    log(message: string): void;
}

class ConsoleLogger implements StrictConsoleLogger {
    log(message: string): void {
        console.log(`Log: ${message}`);
    }
}

const logger = new ConsoleLogger();
logger.log("This is a log message.");
