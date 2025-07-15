
let eids =[101,102,103,104]

console.log(eids.length)
var new_length=eids.push(105)  // push methods append element end of the array

console.log(eids)
console.log(new_length)

var new_length=eids.push(105,106) 
 console.log(new_length)

 var remove_element=eids.pop() // pop methods remove the last element from array
 console.log(eids)

 var remove_element =eids.pop()
 console.log(eids)

 eids.shift()   // shift methods remove the first element of array
 console.log(eids)
  
 eids.unshift(101)  // unshift methods  add the element at starting of array
 console.log(eids)