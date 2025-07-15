let a={}
let b={"one":1,"two":2};
let c={"one":1,
       "one":100,     //duplicate key are not allowed, the last one will be used
       "one":1000};
console.log(a,b,c);