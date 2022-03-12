/* // console.log output yellow is number or white is string
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

// integer and float addition // parseInt and parseFloat
var onionPrice = '42.50';
var eggPrice = '41.33';
var onionPriceNumber = parseInt (onionPrice)
var eggPriceNumber = parseFloat(eggPrice)
console.log(onionPriceNumber)                    // rs 42 
console.log(eggPriceNumber);                    // rs 41.33 
console.log(eggPriceNumber + onionPriceNumber); // rs 83.33 */
/*
var ricePrice  = 200;
console.log(ricePrice)  // rs 200 (yellow color)

// typeof Number
var ricePrice  = 200;
console.log(typeof ricePrice)  // rs number  (white color)

// typeof String
var ricePrice  = "200";
console.log(typeof ricePrice)  // rs string (white color)

// typeof Boolean
var ricePrice  = true;
console.log(typeof ricePrice)  // rs boolean (white color) 

// typeof undefined
var potatoPrice;
console.log(typeof potatoPrice)  // rs undefined (white color) 

//  Date
var today = new Date();
console.log(today)  // rs  2022-03-12T12:42:32.670Z  (purple color) 

//  typeof Object
var today = new Date();
console.log(typeof today)  // rs object  (white color) 

// Special edition *********
var firstNum = 0.1;
var secondNum = 0.2;
var totalNum = firstNum + secondNum;
console.log(totalNum);  // rs 0.30000000000000004  (yellow color)
console.log(totalNum.toFixed(1));  // rs 0.3  (white color)
console.log(parseFloat(totalNum.toFixed(1))); // rs 0.3  (yellow color)

// alternate system 01
var firstNum = 0.1;
var secondNum = 0.2;
var totalNum = firstNum + secondNum;
totalNum = totalNum.toFixed(1);
console.log(totalNum);  // rs 0.3 (white color)

// alternate system 02
var firstNum = 0.1;
var secondNum = 0.2;
var totalNum = firstNum + secondNum;
totalNum = totalNum.toFixed(1);
totalNum = parseFloat(totalNum);
console.log(totalNum);  // rs 0.3 (yellow color)
*/

// modulus ভাগশেষ
var mangoes = 7;
var hungryPerson = 2;
var remaining = mangoes % hungryPerson;
console.log(remaining);


