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

/*JavaScript defines two reserved words for booleans; true and false; which are used to create a Boolean value.
  Booleans are great for comparisons and to control the flow of a program.
  Comparison operations such as == === < > return either true or false.
  if, while statements and other control structures use booleans to determine the flow of the program.

  JavaScript also accepts truthy and falsely values. Falsely value interpreted as false are:
  0
 -0
 NaN
 undefined
 null
 '' //empty string

 All the rest is considered a truthy value.

*/

//Can create a boolean by using the Boolean() factory function.
let isReal = Boolean(true)
console.log(isReal)

//Or use the boolean literal syntax
let isReal2 = true
console.log(isReal2)

//using comparison operator
let b = 7
b === 7
