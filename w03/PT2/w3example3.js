console.log('------------------------------------------');
var arr1 = [33,6,"Hi", true];
var arr2 = [];
console.log(arr1);
console.log(arr1[0]);

console.log('------------------------------------------');
arr1.push("Bruno");
console.log(arr1);
console.log(arr1.length);

console.log('------------------------------------------');
arr1.unshift("Amaral");
console.log(arr1);

console.log('------------------------------------------');
var e = arr1.pop();
console.log(arr1);
console.log(e);

console.log('------------------------------------------');
var e = arr1.shift();
console.log(arr1);
console.log(e);

console.log('------------------------------------------');
var arr3 = ["Welcome", "To", "JS"];
var s = arr3.join();
console.log(s);
var s = arr3.join(' ');
console.log(s);

console.log('------------------------------------------');
var arr4 = [4,5,4,3,2,4,5,6,7,8,1];
var arr5 = arr4.slice(2,5);
console.log(arr5);

console.log('------------------------------------------');
var colors = ['red', 'blue', 'yellow', 'white'];
console.log(colors);
for(let i = 0; i < colors.length; i++){
    console.log(`color ${i+1}: ${colors[i]}`)
}

console.log('------------------------------------------');
function print(e){
    console.log(e);
}
print(5);

colors.forEach(print);
console.log('------------------------------------------');

function double(e){
    e*=2;
    return e;
}
var nums = [8,3,5,6];
var arr6 = nums.map(double);
console.log(nums);
console.log(arr6);
console.log('------------------------------------------');

function even(e){
    return e%2===0;
}

var element = nums.find(even);
console.log(element);

var arr8 = nums.filter(even);
console.log(arr8);