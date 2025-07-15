/*function greet(){
    console.log(this)
}

greet()


let greet=()=>{
    console.log(this)

}

greet() */

// when we use normal function using two same name then it may over writted

function wish(){
    console.log("good morning")
}

wish()

function wish(){
    console.log("good night")
}

wish( )   // the output is good night ,good night

// when we use fat arrow function the function not over writted


var wish =()=>{
    console.log("Good Morning")
}

wish()

var wish =()=>{
    console.log("Good Night")

}

wish()


