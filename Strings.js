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

/*STRINGS, are a sequence of characters */

let name = 'I.Williams'  //assigns a string value to a variable
console.log(name.length) //using length to determine length of a string
let empty = ''  //strings can also be empty with a length of 0
let single = 'I' //strings can also contain a single character 

console.log('My ' + 'String')  //strings can be joined using the + operator 
console.log('My name is ' + name)

/*Template literals are another way to define strings.  Use back-ticks instead of single/double quotes*.  
  They can be used to define multiline strings. Press enter to create a new line and will be rendered as-is.
  
  Template literals also provide an easy way to interpolate (to insert/alter) variables and expressions into strings. */

//space is meaningful with template literals
let multiline = `First line
            Second line `        
//console.log(multiline)

//using interpolation to generate a string.  Need back-ticks
let income = '$3 million'
let interpol = `Hello. My name is ${name} and I earn ${income} as a Programmer.`
//console.log(interpol)

/* 
Common escaping sequences include:
\n 	New line character
\r 	Carriage return character
\t 	Tab character
\" 	Double quote character
\' 	Single quote character
\\ 	Backslash character
\uXXXX 	Unicode character
*/

//Escaping sequence. The backslash n (\n) creates a new line
let escapeNewline = 'I am\na developer '
//console.log(escapeNewline)

//Backslash is also useful when need to enter a quote in string to prevent char to be interpreted as a closing string
let escapeBackslash = 'I\'m a developer.'
//console.log(escapeBackslash)

//Can expand a string using the spread operator ...
//This creates an array with each character in the string 
let hello = 'hello'
let helloExpanded = [...hello]
//console.log(helloExpanded)

