class User{
    name1?: string;
    age1: number;

    constructor(name?:string,age:number = 18){
        this.name1 = name;
        this.age1 = age;
    }
}

const client = new User();

console.log(client);