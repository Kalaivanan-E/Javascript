// for in loop
// how to iterate array using (while , do while , for , for of )
// how to iterate object using(for in)
let emp ={
    eid: 101,
    ename: 'Rahul',
    gender: 'Male'
}

// how to read a object property (object.property)

console.log(emp.eid)  //101
console.log(emp.ename) // Rahul


//using for in loop to read object property

for(pro in emp){
    console.log(emp[pro]);
}
