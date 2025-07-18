
class Account{
    // class contain properties and methods


    acc_Id =101;                                            // property


    open_Account(){                                           // methods
        console.log("Account opened successfully ")
    }

}

var a1 = new Account();
var a2 = new Account();

console.log(a1) // Account{acc_Id: 101}
console.log(a2)  // Account{acc_Id: 101}


console.log(a1.acc_Id)  // accessing the class property

console.log(a2.open_Account())  // accessing the class methods
