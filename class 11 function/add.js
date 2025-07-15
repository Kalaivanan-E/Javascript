// function with  parameter

function add(a,b){
    console.log(a+b)
}

add(10,20) // 30
add(100)  //NaN
add(100,200) //300
add(100,"Rahul") //100Rahul

// function with parameter default value

function addition(a,b,c=1){
    console.log(a+b+c)
}

addition(1,2,3)
addition(1,2)


