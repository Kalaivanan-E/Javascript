// how to read array elements using for of loop


let employees=[{eid:101, ename:"RG",gender:"M"},
    {eid:102, ename:"ravi",gender:"M"},
    {eid:103, ename:"sai",gender:"M"},
    {eid:104, ename:"priyanka",gender:"F"}
]

for ( let i=0; i<employees.length-1; i++){
    console.log(employees[i]);
    
}

// how to read array elements using for of loop

let unames=["RG", "ravi", "sai", "kiran", "suresh"];
for(uname of unames){
    console.log(uname);
}
