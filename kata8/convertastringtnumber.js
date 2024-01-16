//https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript
//Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

const stringToNumber = function(str){
    // put your code here
    const inputStr = Number(str);
    if (isNaN(inputStr)) {
        return null;
    } else {
        return inputStr;
    }
  };
 console.log(stringToNumber("awesome"));

// results of the console:
//  PS C:\Users\kveta\Documents\CODing\projects\codewars> node .\kata8\convertastringtnumber.js
// 123
// PS C:\Users\kveta\Documents\CODing\projects\codewars> node .\kata8\convertastringtnumber.js
// null
// PS C:\Users\kveta\Documents\CODing\projects\codewars>