//integer
var integer = 1;


//string
var string = 'dog';


//boolean
var boolean = true;




//arrays are key (index) and values pairs

//arays with integer as keys
var computers = ["server", "desktop", "tablet"];
var computers = [0: "server", 1: "desktop", 2: "tablet"];
computers[0] = "server";

//arays with string as keys
var car = ["make": "Nissan", "model": "Terrano", "engine": "3.5l"];
car.make = “Nissan”;
var carDetails = [
    "make": "Nissan",
    "model": "Terrano",
    "engine": ["bhp": "160", "size": "3.5l", "turbo": true ]
];
carDetails.engine.turbo = true




//function definition used to create code templates https://github.com/mariusbanea/web-developers-toolkit/blob/master/js/functions-and-objects-theory-with-examples.js
/*
 function components:
 -- function name (ex: "addingNumbers")
 -- input paramenters (ex: "parameter1", "parameter2")
 -- output paramenters (ex: "result")
 -- some set of instructions to convert the imput paramenters into output (ex: "var result = parameter1 + parameter2;")
*/
var addingNumbers = function (parameter1, parameter2) {
    var result = parameter1 + parameter2;
    return result;
};
//function usage / call
addingNumbers(3, 4); //result is 7
addingNumbers(2, 9); //result is 11




//object
var object = {
    'bananas', 'oranges', 'apples'
};
