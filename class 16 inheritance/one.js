class Parent{
    constructor(pname){
        this.pname =pname;
    }
}
class Child extends Parent{

    constructor(cname,pname){
            super(pname)

        this.cname = cname
    }
}

let c1 = new Child ("Rahul", "raju")
console.log(c1)