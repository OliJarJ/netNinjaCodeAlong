//javascript review

//variables
var myVarOliver;
myVarOliver = 10; //assigned value of 10

var myVar2 = 'hello';
myVar2 //returns 'hello'

var myVar2 = 'hello again';
myVar2 //returns 'hello again'

var myVar2 = 2;
myVar2 //returns 2

//shorthand
var myVar = 10;
myVar = myVar + 5
myVar +=5; //15
myVar += 5; //20
myVar -= 10; //10
myVar /-2 //5
myVar *= 5; //25

//Incremental and Decremental

myVar += 1; //26
myVar++ //26
myVar //27
++myVar //28

//Logging to the Console
var myVar = "Shaun";

document.write(myVar);
console.log(myVar) //returns Shaun

document.write(10)

console.log(50) //returns 50

console.log(20 * 5) //returns 100

var customerAge = 32;
customerAge //returns 32

var myVar = 40; //will return 40

//Initialize 3 variables

var a = 5;
var b = 10;
var c = 'I am a ';

a = a + 1; //6
b = b + 10; //20
c = c + 'string'; //'I am a string'

//Adding
var sum = 20 + 20; //40

console.log(sum)

//Subtraction
var difference = 45 - 0; //45

//Multiplication
var product = 3 * 8; //24

//Division
var quotient = 66/11; //6

//Incrementing
var myVar = 87;
myVar = myVar++;

//Decrementing
var myVar = myVar--;

//Decimals
var ourDecimal = 5.5;
var myDecimal = 0.009;

//Multiply Decimals
var product = 2.0 * 2.5; 
console.log(product); //5

//Divide Decimals
var quotient = 2.0 / 2.0;
console.log(quotient);

//Remainder
var remainder;
remainder = 11 % 3; //2

//Compound Assignment with Augmented Addition
var a = 5;
var b = 10;
var c = 'I am a ';

a += 1; //6
b += 10; //20
c += 'string'; //'I am a string'

//Declare String Variables
var firstName = "Oliver"; //called string literals
var lastName = "Jarjosa";

//Escaping Literal Quotes
var myString = "I am a \"double quoted\" string inside of \"double quotes\"";
console.log(myStr) // Will show: I am a "double quoted" string inside of "double quotes"
/*or
use single quotes on outside and double quotes indside of string.
you can ALSO use back ticks*/

//Concatenating String the the + Operator

var ourStr = "I come first. " + "I come second.";

var myStr = "This is the start. " + "This is the end.";

//or

var ourStr = "I come first. ";
var ourStr += "I come second.";

//Constructing Strings with Variables

var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

//Appending Variables to Strings

var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;

var someAdjective = "worthwhile";
var myStr = "Learning to code is ";
myStr += someAdjective;

//Find the length of a string
var firstNameLength = 0;
var firstName = "Ada";
firstNameLength = firstName.length;

var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length;
console.log(lastNameLength)

//First letter
var firstNameLength = 0;
var firstName = "Ada";
firsLetterOfFirstNameLength = firstName.length;

var lastNameLength = 0;
var lastName = "Lovelace";
firstLetterOfLastNameLength = lastName.length;
console.log(lastNameLength)

//String immutability

var myStr = "Jello World";

myStr[0] = "H";//there will be an error

myStr = "Hello World";//this will be changed