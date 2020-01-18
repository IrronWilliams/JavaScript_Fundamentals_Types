/* There maybe a need to convert a value from one type to another.

For example, may want to convert:

    a number to a string
    a string to a number
    a string to a boolean
    a boolean to a string

Following are the most common techniques used to convert from one type to another.   */

/*Converting to string.  Generally, anything to a string is usually done by calling the toString() method
on any value OR passing any value to the String() global function*/

//Casting from number to string. Use the String global function, or the Number type toString() method:
let string50 = String(50)
let toString50 = (50).toString()
console.log(typeof(string50))

//Casting from boolean to string. Use the String global function, or the Boolean type toString() method:
let stringBool = String(true)
let stringBool2 = true.toString()
console.log(typeof(stringBool2))

//Casting from date to string. Use the String global function, or the Data type toString() method:
let date = String(new Date('2020-01-17'))
let date2 = Date('2020-01-17').toString()
console.log(date2)

//Special cases with string
let nullString = String(null)
let undefString = String(undefined)
let NaNString = String(NaN)
console.log(typeof(NaNString))



/*Converting to numbers.  Can do by using the Number() global function.

Casting from date to number:  If pass a Date object to Number(), will return the date timestamp. 

Special cases with number:

Number(null) returns 0
Number(undefined) returns NaN
Number(NaN) returns NaN

Converting to booleans:  Any value can be converted to boolean by passing it to Boolean().

All values will resolve to true except:

Boolean(false) //false
Boolean(0) //false
Boolean(NaN) //false
Boolean("") //false
Boolean(null) //false
Boolean(undefined) //false   */

/* More Common number conversions */

let num1 = Number('1')
let num0 = Number('0')
console.log(typeof(num0))

//Strings are trimmed before being converted to a number
let num7Trim = Number('     7     ')
console.log(typeof(num7Trim))
console.log(num7Trim)

//Passing an empty string converts to 0
let numBlank = Number('')
console.log(typeof(numBlank))
console.log(numBlank)

//Converting decimal
let numDecimal = Number('53.232')
console.log(numDecimal)
console.log(typeof(numDecimal))

//If a string contains invalid characters it will return NaN (not a number)
let NaN10k = Number('10,000')
console.log(NaN10k)

//Other convert to number solutions are parseInt(), parseFloat(), unary operator +, Math.floor() and *1
let parseInt70 = parseInt('70', 10) //second parameter is the radix, always 10 for decimal numbers, 
                                    //or the conversion might try to guess the radix and give unexpected results.                             
console.log(parseInt70)
console.log(typeof(parseInt70k))

//Use parseFloat() with decimals.
let floatDecimal = parseFloat('89.53') 
console.log(floatDecimal)
console.log(typeof(floatDecimal))

//Using unary operator +. Trick is to use unary operator before the string.
let trickUnary = +'780'
console.log(trickUnary)
console.log(typeof(trickUnary))

//Math.floor returns the integer part of number
let mathFloor = Math.floor('854.95')
console.log(mathFloor)
console.log(typeof(mathFloor))

//Using *1 is another option.
let multiplyBy1 = '652.42' *1
console.log(multiplyBy1)
console.log(typeof(multiplyBy1))

/*Casting from Boolean to numbers will return either 0 (false) or 1 (true) */
let boolTrue = Number(true)
let boolFalse = Number(false) 
console.log(boolTrue)
console.log(boolFalse)
console.log(typeof(boolFalse))

