// Multilevel Inheritance Example in TypeScript
class GrandParent {
   sitting(){
    console.log("GrandParent is sitting");
   }
}

class Parent extends GrandParent {
   walking(){
    console.log("Parent is walking");
   }
}

class Child extends Parent {
   running(){
    console.log("Child is running");
   }
}

const child = new Child();

child.sitting();
child.walking();
child.running();

// Multilevel Inheritance example1 with Constructors
class Person1{
   constructor(public name:string){
      console.log("Person constructor");
   }
   displayName(){
      console.log(`Name: ${this.name}`);
   }
}
class Employee1 extends Person1{
   constructor(name:string, public company:string){
      super(name);
      console.log("Employee constructor");
   }
   displayEmployeeInfo(){
      this.displayName();
      console.log(`Company: ${this.company}`);
   }
}
class Manager extends Employee1{
   constructor(name:string, company:string, public department:string){
      super(name, company);
      console.log("Manager constructor");
   }
   displayManagerInfo(){
      this.displayEmployeeInfo();
      console.log(`Department: ${this.department}`);
   }
}

const manager = new Manager("Bob", "TechCorp", "IT");
manager.displayManagerInfo();

// Multilevel Inheritance example2 with constructor 
class Vehicle1 {
  constructor(public brand: string) {
    console.log("Vehicle Constructor");
  }

  start() {
    console.log(`${this.brand} started`);
  }
}

class Car1 extends Vehicle1 {
  constructor(brand: string, public model: string) {
    super(brand);
    console.log("Car Constructor");
  }

  drive() {
    console.log(`${this.model} is driving`);
  }
}

class ElectricCar extends Car1 {
  constructor(
    brand: string,
    model: string,
    public battery: number
  ) {
    super(brand, model);
    console.log("ElectricCar Constructor");
  }

  charge() {
    console.log(`Battery: ${this.battery}%`);
  }
}

const tesla = new ElectricCar("Tesla", "Model Y", 95);

tesla.start();
tesla.drive();
tesla.charge();