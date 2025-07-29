
  let a =[10,10,20,30];
  let b =[10,20,30];

  
  let c =[...a];

  let d = [...a, ...b];

  console.log(c);  // 10,10,20,30
  console.log(d);  // 10,10,20,30,10,20,30

  let e = [...a,40,50,60];

  console.log(e);  // 10,10,20,30,40,50,60