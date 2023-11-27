//Global scope
//Global variable, that's meaning that the variable can be access from any part from the code
//Any variable was declared without the key word "var" is considered a GLOBAL VARIABLE

var a = 15;
function doit(){
    b = 19; // These is a GLOBAL VARIABLES
    console.log("(inside doit)a=" + a);
    var c =12;{
        var d = 20; // These variable just can be used inside this code block
        let e = 7; // You can use "let" when you goes to do a block scope
    } // The "c" variable just can be used inside the function

    console.log("d=" + d);

    console.log("c=" + c);

}

console.log("a=" + a);

doit();

console.log("b=" + b);
//console.log("c=" + c);