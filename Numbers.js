/*JavaScript types can be classified into 2 categories: Primitive and Objective
  Primitive types include:
    numbers
    strings
    booleans
    symbol (peculiar data type, kept private and for internal use)
    null
    undefined 

  Non primitive types are objects.  
    Object types have properties and have methods that can act on those properties.

  Primary difference is that primitive types store one value, while object types store many properties. 
  In addition, primitive types are passed by 'value' and object types are passed by 'reference. 

  Arrays are not a type in JavaScript. Arrays are objects. 
*/

/*NUMBERS, when creating a variable with a number value, variable is assigned a number type. 
  Internally JavaScript just has one type for numbers, which is float. Because of float, some
  numbers cannot be represented 'exactly'. This is not a problem for integers with up to 15 digits.
  Integers with 16 digits or more may run into approximation issues. The challenge relates to decimals.  
  JavaScript stores numbers as floats and floats cannot be represented with full precision by computer.
  
  Example: 
  2.2*2 //4.4
  2.2*20 //44
  2.2*200 //440.00000000000006 (???)
  2.2*2000 //4400
  2.2*20000 //44000

  You might expect 01.*01 to equal 0.01. The result is actually 0.010000000000000002.  May likely not run into 
  this issue, but good to keep in mind. The solution is to avoid processing numbers as decimals. So instead of 
  0.1 * 0.1, convert to integer (0.1 * 10) * (0.1 * 10) / 100.

  Best to avoid storing decimals.  Use calculations to just render numbers as decimals to the user 
  instead of storing them as such.

  */

let int = 1 
let negInt = -1
let bigInt = 543121290129012    
let thisIs204 = 0xCC //A number can be defined using hexadecimal syntax by using the 0x prefix
let decimal = 0.2
let pi = 3.14
console.log(pi)