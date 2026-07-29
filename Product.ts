class Product{
    id1:number;
    price1:number;
    quantity1:number;

    constructor(id:number,price:number,quantity:number){
        this.id1 = id;
        this.price1 = price;
        this.quantity1 = quantity;
    }

    totalPrice(){
        // console.log(this.price1*this.quantity1);
        return this.price1*this.quantity1;
    }

}

let prod = new Product(101,1000,2);
console.log(prod.totalPrice());