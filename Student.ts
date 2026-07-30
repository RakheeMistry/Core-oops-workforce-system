class Student{
    rollNo1:number;
    name1:string;
    marks1:number;

    constructor(rollNo:number, name:string, marks:number){
        this.rollNo1 = rollNo;
        this.name1 = name;
        this.marks1 = marks;
    }

    calculatePercentage(){
        return this.marks1/100;
    }

    display(){
        console.log(this.calculatePercentage());
        console.log(this.name1);
    }
   
}

const stud = new Student(101,'Rahul',78);

stud.display();