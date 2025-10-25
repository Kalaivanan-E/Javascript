

  let  state ={
     'user': {
        'uid': 101,
        'uname': 'Rahul'
     },
     'Product': {
        'pid': 102,
        'pname': 'Marker Pen'
     }
  }


  let {Product} = state;
  let {pname} = Product;

  console.log(pname)