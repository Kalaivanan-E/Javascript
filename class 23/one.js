let gotoGoa = (succes, failure)=>{
    let acc_bal = 5000;
    acc_bal>20000?succes("Go and Enjoy the trip"): failure("Next weeek");
}

gotoGoa((response)=>{
    console.log(response)
},
(err)=>{
    console.log(err)
}
)