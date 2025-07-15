// normal function

function add3(a,b){
    return a+b;
}
let r4= add(1,3)
console.log(r4)




// In fat arrow function we don't need function keyword

let add =(a,b)=>{
    return a+b;
}

let r1= add(10,20)
console.log(r1)  //30


//  fat arrow function without return 

let add1=(a,b)=>a+b;

let r2=add1(1,2)
console.log(r2)  //3