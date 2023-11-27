//function declaration
function add1 (n1, n2){
    return n1 + n2;
}

console.log (add1(2,3));

//function expression
var add2 = function(n1, n2){
    return n1 + n2;
}

//
var add3 = (n1, n2) => n1 + n2;

var multBy2 = n1 => n1 * 2;

console.log(multBy2(3));

console.log(add3(3,4));