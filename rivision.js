// console.log output yellow is number or white is string
var price1 = 17;
var price2 = 5;
var sum = price1 + price2;
var difference = price1 - price2;
var multiplication = price1 * price2;
var division = price1 / price2;
// console.log(sum);                  // rs 22
// console.log(difference);          // rs 12
// console.log(multiplication);     // rw 
// console.log(division);          // rs 3.4

 // If Variable value will add
// price1 = price1 + 10 // or 
price1 += 10   // shorthand 
console.log(price1) //rs 27  

 // If Variable value will minus
// price1 = price1 - 10 // or 
price1 -= 10   // shorthand 
console.log(price1) //rs 7 

 // If Variable value will add 1...
// price1 = price1 + 1 ;// or 
// price1 += 1 ;  // shorthand 
price1++;    // shorthand too
console.log(price1) //rs 18 

 // If Variable value will minus 1...
// price1 = price1 - 1 ;// or 
// price1 -= 1 ;  // shorthand 
price1--;       // shorthand too
console.log(price1) //rs 16 

// Two String addition 
var firstName = 'Jennie';
var lastName = 'Kim';
var fullName = firstName + ' ' + lastName; // for space give to empty string with white space 
//console.log(fullName); // rs Jennie Kim

// Two String addition 
var onionPrice = '42';
var eggPrice = '41';
var totolPrice = onionPrice + eggPrice;
//console.log(totolPrice); // rs 4241

// Two number (normal) addition 
var onionPrice = 42;
var eggPrice = 41;
var totolPrice = onionPrice + eggPrice;
//console.log(totolPrice); // 83 

//integer 
var sunglass = 3;
// float 
var price = 99.99;

var onionPrice = '42';
var eggPrice = '41';
var onionPriceNumber = parseInt (onionPrice)
// console.log(onionPriceNumber) // rs 42

var onionPrice = '42.50';
var eggPrice = '41.33';
var onionPriceNumber = parseInt (onionPrice)
var eggPriceNumber = parseFloat(eggPrice)
console.log(onionPriceNumber)                    // rs 42 
console.log(eggPriceNumber);                    // rs 41.33 
console.log(eggPriceNumber + onionPriceNumber); // rs 83.33 
