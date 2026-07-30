class Employee {
    id1: number;
    name1: string;
    salary1: number;

    constructor(id: number, name: string, salary: number) {
        this.id1 = id;
        this.name1 = name;
        this.salary1 = salary;
    }

    display() {
        console.log(this.id1);
        console.log(this.name1);
        console.log(this.salary1);
    }
}

const emp = new Employee(1, "Rakhee", 50000);

emp.display();