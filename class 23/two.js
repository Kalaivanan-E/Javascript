let employees = [{ eid: 101, ename: 'Rahul', esal: 45000 },
    { eid: 102, ename: 'Sonia', esal: 46000 }
];


let createEmployee = (emp) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let db_status = true;
            db_status === true ? resolve('data inserted') : reject('failed');
            employees.push(emp);
        }, 4000);
    });
}

let getEmployee = ()=>{
    setTimeout(() => {
        let rows =''
        for(let emp of employees){
            rows=rows + `<tr>
            <td>${emp.eid}</td>
            <td>${emp.ename}</td>
            <td>${emp.esal}</td>
            </tr>`
        }
        document.getElementById("table_data").innerHTML = rows;
        
    }, 2000);
}

createEmployee({eid:103,ename:'Priya',esal:50000})
.then((resolve)=>{
    console.log(resolve)
    getEmployee()
})
.catch((reject)=>{
    console.log(reject)
})
