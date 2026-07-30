var Student = /** @class */ (function () {
    function Student(rollNo, name, marks) {
        this.rollNo1 = rollNo;
        this.name1 = name;
        this.marks1 = marks;
    }
    Student.prototype.calculatePercentage = function () {
        return this.marks1 / 100;
    };
    Student.prototype.display = function () {
        console.log(this.calculatePercentage);
    };
    return Student;
}());

var stud = new Student(101, 'Rahul', 78);

stud.display();
