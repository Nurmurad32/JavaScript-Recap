// function findLargestNumber(arr) {
//     var largest = arr[0];
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }
//     return largest;
// }
// var arr = [-1, -4, -3, 230, 14, 50];
// var largest = findLargestNumber(arr);
// console.log("The Largest Number is: ", largest);

// ------------------2--------------
// function GroupOfWord(word) {
//     var output = ' ';
//     for (var i = word.length - 1; i >= 0; i--) {
//         output += word.charAt(i);
//     }
//     return output;
// }
// console.log(GroupOfWord('HeLlo'));

// ------------------3--------------
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 1, 110];
var even = [];
function findTheEvenNumber(arr) {
    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] % 2 == 0)
            even.push(arr[i]);
    }
    return even;
}
var evenNumbers = findTheEvenNumber(arr);
console.log("The Even Number is: ", evenNumbers);