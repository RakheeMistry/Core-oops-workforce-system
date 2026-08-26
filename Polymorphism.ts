// Runtime Polymorphism
class Animal{
    makeSound(): void{
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal{
    makeSound(): void {
        console.log("Dog says: Bark");
    }
}

class Cat extends Animal{
    makeSound(): void {
        console.log("Cat says: Meow");
    }
}

const a1: Animal = new Dog();
const a2: Animal = new Cat();

a1.makeSound();
a2.makeSound();

// Notice this line:
// * const a1: Animal = new Dog(); *
// The reference type is Animal, but the actual object is Dog.
// When makeSound() is called, TypeScript/JavaScript executes the method of the actual object.
