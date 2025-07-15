//how to check object is empty or not;
//using ternary operator
let emp={
    eid: 101,
    ename: 'rahul',
    gender: 'Male'
}

Object.keys(emp).length>0?console.log("Not a empty Object"):console.log("empty object");