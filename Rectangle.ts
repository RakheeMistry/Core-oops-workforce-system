class Rectangle{
    length1:number;
    width1:number;

    constructor(length:number,breadth:number){
        this.length1 = length;
        this.width1 = breadth;
    }

    area(){
        return this.length1*this.width1;
    }

    perimeter(){
        return 2*(this.length1+this.width1);
    }
}

let rect = new Rectangle(5,7);

console.log("Area of Rectangle is",rect.area());
console.log("Perimeter of Rectangle is",rect.perimeter());