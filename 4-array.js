// Array - is an object; Collection of variable;

var names = ["Nur", "Saba", "Murad", "Lubna"];
console.log(names)

// Array Push / Pop --------------
names.push("Fatima")
names.push("Fatima") // Push in the last of the array
console.log(names, " <- After PUSH 2 names")
names.unshift("Alam") // Push in the first of the array
console.log(names, " <- After UNSHIFT 1 names")

names.pop(); // Pop from the last of the array
console.log(names, " <- After POP")

names.shift(); // Pop from the first of the array
console.log(names, " <- After shift")

// Array Concat ------------------
var country1 = ["Bangladesh", "USA"]
var country2 = ["India", "Pakistan"]

var country = country1.concat(country2);
console.log(country, " <- After Concat")

// Array Loops ---------------------
var num = [12, 23, 34, 45, 67]
var sum = 0;

for (var i = 0; i < num.length; i++) {
    console.log(num[i]);
    sum = sum + num[i];
}
console.log(sum);

// Array Splice
var nameCol = ["Nur", "Saba", "Murad", "Lubna"];

    // Adding Elements using Splice
    // nameCol.splice(2,0,"Rahim", "Karim") 
        // From the position 2 adding this 2 name & removing nothing.
        // Output : [ 'Nur', 'Saba', 'Rahim', 'Karim', 'Murad', 'Lubna' ]
        console.log(nameCol);

    nameCol.splice(2,1,"Rahim", "Karim")
        // From the position 2 adding this 2 name & after adding this name removing next 1.
        // Output : [ 'Nur', 'Saba', 'Rahim', 'Karim', 'Lubna' ]
        console.log(nameCol, "<- Array Splice");

// Array Slice
console.log(nameCol.slice(1,3), "<- Array Slice")

// Array Sort - Only for string / Alphabetic element not for number
console.log(nameCol.sort(), "<- Array Sort")

var numberSort = [12,34,56,32,11]
numberSort.sort(function(a,b){
    return a-b;
})
console.log(numberSort, "<- Array Number Sort")

// Array Reverse
console.log(nameCol.reverse(), "<- Array Sort")

    

// ----------------ES-6----------------------

// --------------------Can change main Array: splice, push
// --------------------Can't change the mail Array: Find, Filter, Slice, Concat, Map, Reduce

// var number = [1,2,3,4,5,6,7,8];
// var result = number.filter((currentValue, index, arr)=>{
//     console.log(index)
//     console.log(arr)
//     return currentValue > 5;
// });

// console.log(number);
// console.log(result);


// -----------Array Slice------------

// var number = [1,2,3,4,5,6,7,8];
// var resultSlice = number.slice(1,3);
// console.log(resultSlice);

// -----------Array Splice------------
// var number = [1,2,3,4,5,6,7,8];
// var resultSplice =  number.splice(2,2,11,12,13);
// console.log(resultSplice);
// console.log(number); // Change the main array


// -----------Array Reduce------------
var number = [1,2,3,4,5,6,7,8];
var sum = number.reduce((prevValue, currentValue)=>{
return prevValue + currentValue;
}, 0);

console.log(sum);

// ------------------Spread Operator ---------------------
var numbers = [1,2,3,4]

var a = numbers; 
// "numbers" Array assin in "a".. 
    // when change the value of "numbers"... 
    // the value of "a" will be changed 
var b = [...numbers , 11];
// a copy of "numbers" Array assined in "b"... 
    // if we change the value of array "numbers"... 
    // the value of "b" will be remain same.

numbers.push(5);

console.log(numbers);
console.log(a);
console.log(b);

// ------------------Rest Operator ---------------------
            // 
function myFunArg(){
    console.log(arguments);
}
myFunArg(5,6,7,8,9);

function myFun(...params){
    console.log(params);
}
myFun(5,6,7,8,9);

function myFunp(a, ...params){
    console.log(a)
    console.log(params);
}
myFunp(5,6,7,8,9);