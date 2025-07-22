
class Parent { 
    constructor(){
        console.log(" parent class contructor")
    }
}
class Child extends Parent{ 
    constructor(){
        super()
        console.log("child class constructor")
    }
}
new Child()