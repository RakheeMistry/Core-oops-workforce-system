class Bank_Account{
   deposit1:number;
   withdraw1:number;
   check_balance1:number;
   
   constructor(deposit:number,withdraw:number,check_balance:number){
    this.deposit1 = deposit;
    this.withdraw1 = withdraw;
    this.check_balance1 = check_balance;
   }

   Deposit(){
    return this.deposit1;
   }

   Withdraw(){
    return this.withdraw1;
   }

   Check_Balance(){
    return this.check_balance1;
   }
}

const ba = new Bank_Account(2000,500,5000);
console.log(ba.Deposit());