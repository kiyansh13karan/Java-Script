// data types in JavaScript

// 1. Primitive Data Types
let stringType = "Hello, World!"; // String
let numberType = 42; // Number
let booleanType = true; // Boolean
let nullType = null; // Null
let undefinedType; // Undefined
let symbolType = Symbol("unique"); // Symbol
let bigintType = BigInt(1234567890123456789012345678901234567890); // BigInt



// 2. Non-Primitive Data Types (Reference Types) 

// objects 
let objectType = {
    key: "value",
    number: 42,
    boolean: true
};

// array 
let arrayType = [1, 2, 3, 4, 5]; // Array (which is a type of object)


// functions 
const myFunction = function() {
    return "This is a function";
};



// 3. Type Checking
console.log(typeof stringType); // Output: string
console.log(typeof numberType); // Output: number
console.log(typeof booleanType); // Output: boolean
console.log(typeof nullType); // Output: object (this is a known quirk in JavaScript)
console.log(typeof undefinedType); // Output: undefined
console.log(typeof symbolType); // Output: symbol
console.log(typeof bigintType); // Output: bigint
console.log(typeof objectType); // Output: object
console.log(typeof arrayType); // Output: object (arrays are also objects in JavaScript)
console.log(typeof myFunction); // Output: function (functions are a special type of object in JavaScript)






// 4. Type Conversion
let numToString = String(numberType); // Convert number to string   
let strToNumber = Number(stringType); // Convert string to number
let boolToString = String(booleanType); // Convert boolean to string
let nullToString = String(nullType); // Convert null to string
let undefinedToString = String(undefinedType); // Convert undefined to string
let strToBool = Boolean(stringType); // Convert string to boolean (non-empty string is true)
let numToBool = Boolean(numberType); // Convert number to boolean (non-zero number is true)
console.log(numToString); // Output: "42"
console.log(strToNumber); // Output: NaN (not a number, since "Hello, World!" cannot be converted to a number)
console.log(boolToString); // Output: "true"
console.log(nullToString); // Output: "null"
console.log(undefinedToString); // Output: "undefined"
console.log(strToBool); // Output: true (non-empty string is truthy)
console.log(numToBool); // Output: true (non-zero number is truthy)




// 5. Checking Data Types
console.log(Number.isInteger(numberType)); // Output: true (42 is an integer)
console.log(Array.isArray(arrayType)); // Output: true (arrayType is an array)
console.log(objectType instanceof Object); // Output: true (objectType is an object)
console.log(stringType instanceof String); // Output: false (stringType is a primitive string, not a String object)
console.log(typeof stringType === "string"); // Output: true (checking type explicitly)




// 6. Type Coercion
let coercedString = "5" + 10; // String concatenation (coercion)
let coercedNumber = "5" - 2; // Numeric subtraction (coercion)
console.log(coercedString); // Output: "510" (string concatenation)
console.log(coercedNumber); // Output: 3 (numeric subtraction)





// 7. Checking for NaN
let notANumber = Number("Hello"); // Attempt to convert a non-numeric string to a number
console.log(isNaN(notANumber)); // Output: true (notANumber is NaN)
console.log(Number.isNaN(notANumber)); // Output: true (Number.isNaN(notANumber))




// 9. Checking for null and undefined
console.log(nullType === null); // Output: true (nullType is null)
console.log(undefinedType === undefined); // Output: true (undefinedType is undefined)




// 10. Using typeof with null
console.log(typeof nullType); // Output: "object" (this is a known quirk in JavaScript) 

// 11. Using typeof with arrays
console.log(typeof arrayType); // Output: "object" (arrays are also objects in JavaScript)

// 12. Using typeof with functions
function exampleFunction() {
    return "I am a function";
}
console.log(typeof exampleFunction); // Output: "function" (functions are a special type of object in JavaScript)


// 13. Using typeof with BigInt
console.log(typeof bigintType); // Output: "bigint" (BigInt is a distinct type in JavaScript)


// 14. Using typeof with Symbols
console.log(typeof symbolType); // Output: "symbol" (Symbols are a distinct type in JavaScript)


// 15. Using typeof with undefined
console.log(typeof undefinedType); // Output: "undefined" (undefined is a distinct type in JavaScript)


// 16. Using typeof with NaN
let notANumberValue = NaN; // Not a number
console.log(typeof notANumberValue); // Output: "number" (NaN is considered a number in JavaScript)


// 17. Using typeof with null
console.log(typeof nullType); // Output: "object" (this is a known quirk in JavaScript)


// 18. Using typeof with Infinity
let positiveInfinity = 1 / 0; // Positive infinity
let negativeInfinity = -1 / 0; // Negative infinity
console.log(typeof positiveInfinity); // Output: "number" (Infinity is considered a number in JavaScript)
console.log(typeof negativeInfinity); // Output: "number" (Negative Infinity is considered a number in JavaScript)      


// 19. Using typeof with Boolean
let booleanValue = true; // Boolean value
console.log(typeof booleanValue); // Output: "boolean" (Boolean is a distinct type in JavaScript)   


// 20. Using typeof with String
let stringValue = "Hello, World!"; // String value
console.log(typeof stringValue); // Output: "string" (String is a distinct type in JavaScript)


// 21. Using typeof with Number
let numberValue = 42; // Number value
console.log(typeof numberValue); // Output: "number" (Number is a distinct type in JavaScript)


// 22. Using typeof with Objects
let objectValue = { key: "value" }; // Object value
console.log(typeof objectValue); // Output: "object" (Objects are a distinct type in JavaScript)


// 23. Using typeof with Arrays
let arrayValue = [1, 2, 3]; // Array value
console.log(typeof arrayValue); // Output: "object" (Arrays are also objects in JavaScript)
