
//create

var emp={"eid":101,
         "ename":"Kalai",
         "esalary":50000}   //creating a object in javascript

console.log(emp); //printing the object


//read
console.log(emp.eid); //accessing the property of the object



//update
emp.ename="Kalaivanan"; //updating the property of the object
emp.email="kalaivananeswaran564@gmail.com"; //adding a new property to the object
console.log(emp);



//delete
delete emp.esalary; //deleting a property from the object
console.log(emp);
        