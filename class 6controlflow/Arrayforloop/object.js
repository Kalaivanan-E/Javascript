//how to check array is empty or not 

let emp_ids =[101,102,103]


if(emp_ids.length>0){
    console.log("Not empty Array")
}
else{
    console.log("Empty array")
}

//how to check object is empty or not;

let emp={
    eid: 101,
    ename: 'rahul',
    gender: 'Male'
}
console.log(emp.length)  //undefined
console.log(Object.keys(emp))  // 3
console.log(Object.keys(emp).length)  // 3