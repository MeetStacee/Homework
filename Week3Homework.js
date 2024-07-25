Create an array of pizzaToppings with at least four different toppings
Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."
Create a getPizzaOrder function that
has the parameters size, crust, and an indefinite amount of toppings as inputs
prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
outputs a list with the size, crust, and toppings
Create a preparePizza function that
has an array as its parameter with three items: a size, a crust, and a list of toppings
prints something like "...Cooking pizza..."
outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
Create a servePizza function that
has a parameter of a pizza Object
logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
outputs the same pizza Object that was passed in
Call each function and (starting with preparePizza) use the returned value from the previous function as its input
Add, commit, and push your JS file to your GitHub repo.
Send your TA a link to your GitHub Homework repo when finished.

Pizza Place Functions
//Create an array of pizzaToppings with at least four different toppings
let pizzaToppings = ["sausage", "mushroom", "pepperoni", "black olives", "onion"];
//Create a greetCustomer function that prints a message that welcomes a guest, then informs them of the available toppings by looping over pizzaToppings (don't worry about perfect grammar here yet, i.e. "a, b, and c", see Bonus Challenge #9)
function greetCustomer() {
console.log("Welcome to Stacee Serves' Pizza, our toppings are:");
for (let topping of pizzaToppings) {
    console.log(topping);
}
// Function to get the pizza order
function getPizzaOrder(size,crust, ...toppings) {
console.log(`One ${size} ${crust} crust pizza with ${toppings.join(", ")} coming up!`)
return [size, crust, toppings];
}
// Function to prepare the pizza
function preparePizza(orderArray) {
    console.log("...Cooking pizza...");
    let pizza ={
     size: orderArray[0],
     crust: orderArray[1],
     toppings: orderArray[2]
    };
    return pizza;
}
// Function to serve the pizza
function servePizza(pizza) {
    console.log(`Order up! Heres's your ${pizza.size} ${pizza.crust} crust pizza with ${pizza.toppings.join(",")}. Enjoy!`);
return pizza;
}
// Call each function and use the returned value from the previous function as its input
greetCustomer();
let order = getPizzaOrder("large", "thin", "sausage", "mushroom", "pepperoni", "black olives", "onion");
servePizza(preparedPizza(order));
