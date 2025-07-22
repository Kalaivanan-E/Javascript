
class Account{
    acc_name
    acc_mobileno
    acc_addr
    constructor(name,addr,mobileno){
        this.acc_name = name
        this.acc_mobileno = mobileno
        this.acc_addr = addr
    }
}
class SA extends Account{
    acc_Id
    acc_Bal
    min_bal =500
    constructor(id,name,addr,mobileno,amount){
        super(name , addr, mobileno)             // super is invoking parent class  constructor
        this.acc_Id = id
        this.acc_Bal = amount
    }
}


let sa1 = new SA (101,'Kalai', 'Theni',9345396546  ,5000)
console.log(sa1)
