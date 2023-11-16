// 1. Reserved Keyword: 
        // JS has some reserved keywords


// 2. Variable: var, let, const
var nam = "Nur";
var age = 20.56;

// 3. Data Type: string, number, boolean
    // check datatype using typeof() function.
console.log("Name:", nam, "Type:", typeof (nam));
console.log("Age:", age, "Type:", typeof (age));

// toString() => Convert to string => return string
const num2 = 34;
console.log(num2, "Convert to string: ", num2.toString())

// parseInt() => Convert to number => return number
// parseFloat() => Convert to number to decimal number => return number
const num3 = "34.56";
console.log(num3, "Convert to number Integer: ", parseInt(num3))
console.log(num3, "Convert to number Float: ", parseFloat(num3))

// toFixed() => after decimal how many number i want to show => return string
console.log(age, age.toFixed(1))

// toPrecision() => in decimal number how many number i want to show => return string
// like, 2.456 => toPrecision(2) => 2.4
console.log(age, age.toPrecision(3))

// Number() => convert to number => return number
console.log("Value of True", Number(true), "Value of False", Number(false));

// ## String 
// concatenate : +
var firstName = "Nur-A-Alam "
var lastName = "Khan"
console.log("My full name is" + firstName + "Khan")
console.log("My full name is ", firstName.concat(lastName))


// length:
const text = "Bangladesh"
console.log("The length of Bangladesh is:", text.length);
console.log("The 4th charecter of Bangladesh is:", text.charAt(4)); // index start from 0
console.log(text.toUpperCase());
console.log(text.toLowerCase());
// const text1 = prompt("Enter your name"); // Take input from user.
// console.log("The length of your name is:", text1.length);

// Slice: Need 2 value. start value and end value 
console.log(text.slice(2, 5))

//4. Arithmetic and assignment operator

// Arithmetic =>  + , - , * , / , % , ** (Exponent)
// Assignment => =, += , -= , *= , /= , %= , **=

var x = 6;
x += 3 // x = x + 3

// 5. Relational and Logical Operator
// Relational Operator: > , < , >= , <= , == , === , != , !==
// Logical Operator: && , || , !

// 6. Control Statement: 
// Conditional Control st. 
//  conditional: if, else if, else , switch ( switch, case, break, default )



var digit =3;

switch (digit) {
    case 1:
        console.log("One")
        break;
    case 2:
        console.log("two")
        break;
    case 3:
        console.log("three")
        break;
    case 4:
        console.log("four")
        break;
    case 5:
        console.log("five")
        break;
    default:
        console.log("Not a digit")
}



// ternary operator=> ? :