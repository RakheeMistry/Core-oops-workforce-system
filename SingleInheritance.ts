// Single Inheritance Example in TypeScript
class Animal{
    eat(){
        console.log("Eating...");
    }
}

class Dog extends Animal{
    bark(){
        console.log("Barking...");
    }   
}

const dog = new Dog();
dog.eat(); // Inherited method from Animal class
dog.bark(); // Method from Dog class

// Basic Constructor Inheritance with Single Inheritance
class Person{
    name1:string;
    constructor(name:string){
        this.name1 = name;
        console.log("Person constructor called");
    }
    showName(){
        console.log(`Name: ${this.name1}`);
    }
}
class Employee extends Person{
    company1:string;
    constructor(name:string, company:string){
        super(name);
        this.company1 = company;
        console.log("Employee constructor called");
    }
    showCompany(){
        console.log(`Company: ${this.company1}`);
    }
}

const emp = new Employee("Alice", "TechCorp");
emp.showName(); // Inherited method from Person class
emp.showCompany(); // Method from Employee class

// Parameter Properties with Single Inheritance
class Animal1{
    constructor(public name:string){
        console.log("Animal1 constructor called");
        this.name = name;
    }
    showName(){
        console.log(`Animal Name: ${this.name}`);
    }
}
class Dog1 extends Animal1{
    constructor(name:string, public breed:string){
        super(name);
        console.log("Dog1 constructor called");
        this.breed = breed;
    }
    showBreed(){
        console.log(`Dog Breed: ${this.breed}`);
    }
}
const dog1 = new Dog1("Buddy", "Golden Retriever");
dog1.showName(); // Inherited method from Animal1 class
dog1.showBreed(); // Method from Dog1 class

// Calling Superclass Methods with Single Inheritance
class Vehicle{
    constructor(public brand:string){
        console.log("Vehicle constructor called");
    }
    start(){
        console.log(`${this.brand} vehicle is starting...`);
    }
}
class Car extends Vehicle{
    constructor(brand:string, public model:string){
        super(brand);
        // super.start();
        console.log("Car constructor called");
    }
    drive(){
        // super.start(); // Calling the superclass method
        console.log(`${this.brand} ${this.model} is driving...`);
    }
}

const car = new Car("Toyota", "Camry");
car.drive(); // Calls the drive method which in turn calls the start method from Vehicle class

