function  test1(){
    console.log("Hello World!");
}

test1();

function test2(){
    return "Hello";
}

function sum2(){
    var s = 0;
    for(var i = 0; i < arguments.length; i++){
        s += arguments[i];
    }
    return s;
}

sum2();

console.log(sum2(3,5,9));
console.log(typeof(sum2));

var m = sum2();
console.log(m);
console.log(typeof(m));

var f = sum2;
console.log(f(2,3));
console.log(typeof(f));

f = 22;
//console.log(f(2,3));

var f2 = function(){
    return "Boa tarde!";
}

f2();
console.log(f2());

var fun4 = function(n1,n2){
    return n1+n2;
}(6,9);

console.log(fun4);