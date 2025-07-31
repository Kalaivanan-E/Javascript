let calc = (a,b,op)=>{
    if(op==="sum"){
        return a+b
    }
    if(op==="Multi"){
        return a*b
    }
}

let r1 = calc(10,20,"sum")
console.log(r1);  // 30

let r2 = calc(10,20,"Multi")
console.log(r2);  // 200

