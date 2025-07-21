
// This is a pointer, pointing a current object


class Account{
    constructor(acc_id, acc_Name, acc_bal){
        this.acc_id = acc_id,
        this.acc_Name = acc_Name,
        this.acc_bal = acc_bal
    }
}

let a1 = new Account(101,'RG',5000)
console.log(a1)

let a2 = new Account(102,'SG',3000)
console.log(a2)

let a3 = new Account(103,'PG',4000)
console.log(a3)