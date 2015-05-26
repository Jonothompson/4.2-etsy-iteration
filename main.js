// 4.2 Etsy Iteration

// Show me how to calculate the average price of all items. Please console.log the average.
// For this question I am going to use reduce to provide the average of all prices.
var _ = require('underscore');
var items = require('./items.json');


var price = _.reduce(items, function(total, price) {
    return (total + price.price);
}, 0);
// console.log(price/items.length);


// Show me how to get an array of items that cost between $14.00 and $18.00 USD
// For this question I am going to use Filter to find items from $14.00 to $18.00 USD

var itemsFrom = _.filter(items, function(item){
    return Number(item.price) > 14 && Number(item.price) < 18;
});
// console.log(itemsFrom);


// Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.
// for this question i am going to use filter to produce one return value

var gbp = _.filter(items, function(currencyCode){
    return String(currencyCode.currency_code) == "GBP";
});
// console.log(gbp);


// Show me how to find which items are made of wood. Please console.log the ones you find.
// For this question I am going to use filter to find items made of wood

var woodItems = _.filter(items, function(wood){
    if (woodItems == "wood"){
    return wood;}
});
console.log(woodItems);
