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

//An object is defined using different syntaxes. The most simple is the object literal. 
let dog = {}

//An object is a collection of properties. Every property can be defined at initializing time, and later retrieved 
//using the dot notation. A property has a name and value

//defining an 'object' called car with 'property' of color and 'value' blue
let car = {
    color: 'blue'
}
console.log(car.color)//retrieving value from color property using dot notation 

//A value can be a function. In this case, not called a property but instead called a 'method'.
//Can 'see' the function using car.drive and invoke (run) the function by adding parenthesis = car.drive()
let car = {
    drive: function() {
        //do something
    } 
}
car.drive  //can see the function
car.drive() //invoking function 


  