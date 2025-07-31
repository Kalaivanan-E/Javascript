

// let employees = [{'eid': 101, 'ename': 'Rahul', 'esal':45000 },
//                 {'eid':102,'ename':'sonia','esal':50000} ];


// let createemployee =(emp)=>{
//     setTimeout(() => {
//         employees.push(emp)
        
//     }, 4000);
// }

// let getemployees =()=>{
//     setTimeout(() => {
//         //iterate array and display in the format of HTML TABLE
//         let row =''
//         for(let emp of employees){
//             row = row+`<tr>
//             <td>${emp.eid}</td>
//             <td>${emp.ename}</td>
//             <td>${emp.esal}</td>
//             </tr>`
//         }
//         document.getElementById('table_data').innerHTML=row
        
//     }, 2000);
// }

// createemployee({eid:103,ename : 'priyanka',esal:20000})
// getgemployees()


let employees=[
    {eid:101,ename:"Rahul",esal:45000},
    {eid:102,ename:"Sonia",esal:55000},
]
let createEmployee=(emp,callback)=>{
    setTimeout(()=>{
        employees.push(emp)
        callback();
    },4000)
}
let getEmployees=()=>{
    setTimeout(()=>{
        let rows=""
        for( let emp of employees){
            rows=rows+`<tr>
                        <td>${emp.eid}</td>
                        <td>${emp.ename}</td>
                        <td>${emp.esal}</td>
                        </tr>`
        }
        document.getElementById('table_Data').innerHTML=rows;
        //document.getElementById('table_Data').innerHTML="GM"
    },2000)
}
createEmployee({eid:103,ename:"Priyanka",esal:65000},getEmployees)
getEmployees()