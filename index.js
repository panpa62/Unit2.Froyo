//Prompt for user input
const userInputOrder = prompt(
    "Please order in the following box",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

//convert user input string into array
const stringArray = userInputOrder.split(",");
const sortedStrs = [];
for (let i = 0; i < stringArray.length; i++) {
  const str1 = stringArray[i];
  sortedStrs.push(str1);
}
//count quality of each flavor 


let vanilla=0;
let coffee=0;
let strawberry=0;

for(let i= 0; i < sortedStrs.length; i++){
    if(sortedStrs[i]==="vanilla")
      vanilla = vanilla + 1;
    if(sortedStrs[i]==="coffee")
      coffee = coffee + 1;
    if(sortedStrs[i]==="strawberry")
      strawberry = strawberry + 1;
}

function orderObj(flavorKey, quantityValue){
    const customerObj = {};
    customerObj[flavorKey] = quantityValue;
    return customerObj;
}

let orderConfirm = {};
let Flavor1 = orderObj("Vanilla:", vanilla);
let Flavor2 = orderObj("Coffee:", coffee);
let Flavor3 = orderObj("Strawberry:", strawberry);

orderConfirm = {
    Flavor1,
    Flavor2,
    Flavor3,
}
console.table(orderConfirm);

//another way to list 
const myObj = {
    "Vanilla": vanilla,
    "Coffee": coffee,
    "Strawberry": strawberry
}
console.table(myObj);



