//String object
var str1 = "Welcome to Toronto";
var str2 = 'Bruno ';
var str3 = `Hello ${str2}`;
var str4 = new String("See you!");
var str5 = "Hello " + "Diego";
var str6 = "Hello ".concat("Pankeka").concat(" and Bella!");
var str7 = "Hello ".concat(str2, "Amaral");
var words = str1.split(' ');
console.log(str3);
console.log(str3.length);
console.log(str4.length);
console.log(str2.charAt(2));
console.log(str5);
console.log(str6);
console.log(str7);
console.log(str1.indexOf('to'));
console.log(str1.lastIndexOf('to'));
console.log(str1.indexOf('Hello'));
console.log(words);
var words = str1.split('/\s+/'); //This meaning 1 or more spaces
console.log(words);
str1 = "Welcome to Toronto";
console.log(str1.substr(3,6));
console.log(str1.substring(3,6));
console.log(str1.substring(3));
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log("      Hello      ".trim());
console.log("      Hello      ".trim().toUpperCase().charAt(1));

String.prototype.greeting = function(){
    return "Hello " + this;
}

console.log("Bruno".greeting());
console.log("Diego".greeting());

String.prototype.reverse = function(){
    var rev = '';
    for(var i = this.length -1; i > 0; i --)
        rev += this[i]; //the string
    return rev;
}
var str9 = "Pankeka and Bella";
console.log(str9.reverse());