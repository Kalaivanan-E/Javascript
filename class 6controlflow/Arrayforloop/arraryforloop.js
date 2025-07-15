
// how to read array elements using for loop

let eids =[101,102,103,104,105];
// index = 0,1,2,3,4
for(let i=0; i<=4; i++){
    console.log(eids[i]);
}

// to read array elements using while loop
i=0;
while(i<=4){
    console.log(eids[i]);
    i++;
}


let usernames=["RG", "ravi", "sai", "kiran", "suresh"];
console.log(usernames.length);
for(let i=0; i<=usernames.length-1; i++){
    console.log(usernames[i]);
}


// how to read array elements using for of loop

let unames=["RG", "ravi", "sai", "kiran", "suresh"];
for(uname of unames){
    console.log(uname);
}




let employees=[{eid:101, ename:"RG",gender:"M"},
    {eid:102, ename:"ravi",gender:"M"},
    {eid:103, ename:"sai",gender:"M"},
    {eid:104, ename:"priyanka",gender:"F"}
]

for ( let i=0; i<employees.length-1; i++){
    console.log(employees[i]);
}