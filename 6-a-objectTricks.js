const myObj = {
    name: "Javascript",
    estd: "1995",
    founder: "Brendan Eich",
}

var keys = Object.keys(myObj);  // Return the keys in an Array
var values = Object.values(myObj);  // Return the value in an Array
var entries = Object.entries(myObj);  // Return the entries in an Array that means each properties

console.log("Keys-",keys);
console.log("Values-",values);
console.log("Entries-",entries);