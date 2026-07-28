class Employee {
    id: number;
    name: string;
    salary: number;

    constructor(id: number, name: string, salary: number) {

        this.id = id;
        this.name = name;
        this.salary = salary;

    }

    display() {

        console.log(this.id);
        console.log(this.name);
        console.log(this.salary);

    }
}

const emp = new Employee(1, "Rakhee", 50000);

emp.display();