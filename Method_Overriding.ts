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
