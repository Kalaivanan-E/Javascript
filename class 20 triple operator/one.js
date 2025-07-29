

// create a new array based on existing array

let eids = [101,102,103,104]

let uids = []

for(let eid of eids){
    uids.push(eid);
}

console.log(uids);;  //101,102,103,104

// create a new array based on existing array using map

let new_eids = eids.map((eids)=>{
    return eids;  
})

console.log(new_eids);  //101,102,103,104


// create a new arrary based on existing array using spread operator

let eids1 = [101,102,103,104]

let uids1 = [...eids1];

console.log(uids1);  //101,102,103,104


// spread operator is Extract and copy the elements of an array
// it create new array/ object, and merge array/ object
// extending array element/ object properities.


