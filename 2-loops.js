// Loop ControlStatement: for, while, do while

var sum = 0;
 for(var i=1 ; i<=5 ; i++){
    sum = sum + i;
 }
 console.log("Sum using for loops:", sum);

//  while
var whileSum = 0;
var w = 1;
while (w<=5){
    whileSum = whileSum + w;
    w++;
}
console.log("Sum using While loop:",whileSum);

//  do-while
var doWhileSum = 0;
var d = 1;
do{
    doWhileSum = doWhileSum + d;
    d++;
}while (d <= 6);
console.log("Sum using Do-While loop:",doWhileSum);




// ===============   ES-6    ======================

    // for in   :: Object er moddhe diye iterate korbe
             // :: Array er index show korbe
const myObj = {
    name: "Javascript",
    estd: "1995",
    founder: "Brendan Eich",
}

for(property in myObj){
    console.log("For...in:",property);
}

    // for of  :: Array / Object / string je kono iterable object er moddhe diye kaj korbe

    const myArray = [1,2,3,4,5];
    for( element of myArray){
        console.log("For...of",element);
    }