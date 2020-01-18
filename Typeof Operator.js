/* Any value has a type. Use typeof operator to get a string representation of of a type.
   A little quirk....JavaScript has no “function” type, although typeof returns 'function' when passed a function.
*/
let num = 1
let str = 'I.Williams'
let obj = {name :'I.Williams'}
let bool = true
let undef = undefined 
let func = (() => {}) 
console.log(typeof(func))