// // add +1 rs to all product prices in new array


let prod_prices = [200, 300, 400, 500, 600];

let new_prod_prices = [];

for (let price of prod_prices) {
    new_prod_prices.push(price + 1);
}

console.log(new_prod_prices);

