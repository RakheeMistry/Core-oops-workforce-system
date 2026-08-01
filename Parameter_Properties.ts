class Client{
    constructor(
        public id:number,
        public name:string,
        private balance:number, // Only methods inside the class can access balance
        protected age:number, // Protected members are accessible inside the class and subclasses, but not from outside.
        readonly createdAt:Date = new Date(), // Readonly properties can only be assigned during initialization or in the constructor, here we are assigning it a default value of the current date and time
    ){}

    showBalance(){
        console.log(this.balance);
    }

    displayAge(){
        console.log(this.age);
    }
}

class Client1 extends Client{
    show(){
        console.log(this.age);
    }

}

const cl = new Client(101,'John',5000,25);
const cl1 = new Client1(102,'Doe',6000,30);


console.log(cl);
console.log(cl1);
// console.log(cl1.age); // error: Property 'age' is protected and only accessible within class 'Client' and its subclasses.   

console.log(cl1.createdAt); // readonly property can be accessed but not modified   