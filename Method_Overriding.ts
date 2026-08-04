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
