

class Account{
    acc_name;
    acc_addr;
    acc_mobileno
    constructor(name,addr,phone){
        this.acc_name = name;
        this.acc_addr = addr;
        this.acc_mobileno = phone;
    }

}

class SA extends Account{
    acc_Id;
    acc_Bal;
    min_Bal = 500;

    constructor(id,name,addr,phone, amount){
        super(name,addr,phone)
        this.acc_Id = id;
        this.acc_Bal = amount
        
    }
    deposit(amount){
        this.acc_Bal = this.acc_Bal + amount;
    }  
    
    withdraw(amount){
        this.acc_Bal = this.acc_Bal - amount;
    }

    get_Bal(){
        return this.acc_Bal-this.min_Bal
    }
}

class CA extends Account{
    constructor(id,name,addr,phone, amount){
        super(name,addr,phone)
        this.acc_Id = id;
        this.acc_Bal = amount
       }
}

let s1 = new SA(101,"John","123 Street",1234567890,500);
// let s2 = new CA(1001, " Rahul","New Delhi", 123445567, 1000)

s1.deposit(1000)
s1.withdraw(500)
console.log(s1);

console.log(s1.get_Bal());





// console.log(s1)
// console.log(s2)
