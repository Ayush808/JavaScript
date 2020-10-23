/* The delete keyword deletes both the value of the property and the property itself. 
After deletion, the property cannot be used before it is added back again. 
The delete operator is designed to be used on object properties. 
It has no effect on variables or functions. */

var Output = (function (x) {
    delete x
    return x;
})(0)

console.log(Output)


// So here is variable so output is 0;