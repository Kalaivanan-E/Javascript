

let emp={
    eid:101,
    ename:"Rahul",
    email:"rahul@gmail.com"
}
let details={
    email:"rahul@tcs.com",
    address:"Wayanad",
    avail:true
}

let emp_Details={...emp,...details}
console.log(emp_Details)