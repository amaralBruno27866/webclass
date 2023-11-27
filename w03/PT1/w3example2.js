var str1 = "Welcome to Toronto";
var reg1 = /to/;
console.log(reg1.test(str1));

var reg2 = /TO/;
console.log(reg2.test(str1));

var reg3 = /TO/i;
console.log(reg3.test(str1));

var reg4 = /Toronto/;
console.log(reg4.test(str1));

var reg5 = /^Toronto/;
console.log(reg5.test(str1));

var reg6 = /Toronto$/;
console.log(reg6.test(str1));
console.log(/^W.*e/.test(str1));
console.log(/^W.+e/.test(str1));
console.log(/c.+ome/.test(str1));
console.log(/W.{3,}e/.test(str1));
console.log(/[Ww]elcome/.test(str1));

var str = "Welcome to Toronto";
var patt1 = /to/ig;

var result = str.match(patt1);
console.log(result);
console.log(result[0]);

var str = "Welcome to Toronto";
var patt = /to/ig;
var result = str.replace(patt, "<TO>");
console.log(result);

var pat1 = /^[a-zA-Z]$/
console.log(pat1.test("AB"));
console.log(pat1.test("B"));

var pat1 = /^[a-zA-Z]{4,}$/
console.log(pat1.test("aB"));
console.log(pat1.test("aasdjfB"));

var pat2 = /^[0-9]{3}[-][0-9]{3}[-][0-9]{4}$/
console.log(pat2.test("123-12-123"));
console.log(pat2.test("123-813-1239"));

var pat2 = /^([0-9]{3}[-]){2}[0-9]{4}$/
console.log(pat2.test("123-12-123"));
console.log(pat2.test("123-813-1239"));

var pat2 = /^([0-9]{3}[-]){2}[\d]{4}$/
console.log(pat2.test("123-12-123"));
console.log(pat2.test("123-813-1239"));

var pat2 = /^([0123456789]{3}[-]){2}[\d]{4}$/
console.log(pat2.test("123-12-123"));
console.log(pat2.test("123-813-1239"));

var pat2 = /^((0|1|2|3|4|5|6|7|8|9){3}[-]){2}[\d]{4}$/
console.log(pat2.test("123-12-123"));
console.log(pat2.test("123-813-1239"));

str = "name:Bruno,45;Brazil"
var arr =  str.split(/[:,;]/);
console.log(arr);
var arr =  str.split(/\d{2}/);
console.log(arr);
var arr =  str.split(/[a:,;]/);
console.log(arr);
var arr =  str.split(/[am:,;]/);
console.log(arr);


