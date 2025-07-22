

class Account{
    acc_Name
    acc_Address
    acc_Mobile
    update_Address(){}
    update_Mobile(){}

}

class SA extends Account{
    acc_Id
    acc_Bal
    min_Bal = 500;
    open_Account(){}
    deposit_Amount(){}
    get_Bal(){}
}
class CA extends Account{
    acc_Id
    acc_Bal
    min_Bal = 5000
    deposit_Amount(){}
    withdrawl(Amount){}
    get_Bal(){}
}