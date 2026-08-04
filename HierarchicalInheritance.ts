// Hierarchical Inheritance
class Animal{
 eat(){
    console.log("Eating");
 }
}
class Dog extends Animal{
    bark(){
        console.log("Barking");
    }
}
class Cat extends Animal{
    meow(){
        console.log("Meowing");
    }
}

const dog = new Dog();
dog.eat();
dog.bark();

const cat = new Cat();
cat.eat();
cat.meow();

// Hierarchical Inheritance example1 with constructor
class Person{
    constructor(public name:string, public age:number){
        console.log("Person Constructor Called");
    }
    displayPerson(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
class Employee extends Person{
    constructor(name:string, age:number, public company:string){
        super(name, age);
        console.log("Employee Constructor Called");
    }

    displayEmployee(){
        console.log(`Company: ${this.company}`);
    }
}
class Student extends Person{
    constructor(name:string, age:number, public school:string){
        super(name, age);
        console.log("Student Constructor Called");
    }
    displayStudent(){
        console.log(`School: ${this.school}`);
    }
}

const emp = new Employee("Alice", 30, "TechCorp");
emp.displayPerson();
emp.displayEmployee();

const stu = new Student("Bob", 20, "XYZ University");
stu.displayPerson();
stu.displayStudent();