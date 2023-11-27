//For create a object use the literal notation
console.log('--------------------------------');
var person1 = {
    firstName : "Bruno",
    "last Name": "Amaral",
    age : 45,
    nation : "Brazil",
    lastAccess: new Date(),
    addres : {streetNumber: 65, street: "Birdstone Cresc", city: "Toronto"},
    print : function(){
        console.log(`The name is ${this.firstName} ${this["last Name"]} and the age is ${this.age}`)
    }
};

console.log(person1.firstName);
console.log('--------------------------------');
console.log(person1["firstName"]);
console.log('--------------------------------');
console.log(person1);
console.log('--------------------------------');
console.log(person1["last Name"]);
console.log('--------------------------------');
console.log(person1.lastAccess.getFullYear());
console.log('--------------------------------');
console.log(person1.addres.city);
console.log('--------------------------------');
person1.print();
console.log('--------------------------------');
person1.height = "178cm";
console.log(person1.height);
console.log('--------------------------------');
person1.age = 35;
console.log(person1.age);
console.log('--------------------------------');
console.log(person1);
console.log('--------------------------------');

//Creating objects - using function constructor

function PersonV2(f = "First Name", l = "Last Name", a = "Age"){
    this.firstName = f;
    this.lastName = l;
    this.age = a;
    this.lastAccess = new Date();
    this.print = function(){
        console.log(`The name is ${this.firstName} ${this.lastName} and the age is ${this.age}`);
    }
}

var p1 = new PersonV2('Sam', 'Tom', 23);

console.log(p1.firstName);
console.log('--------------------------------');

var p2 = new PersonV2();
console.log(p2.firstName);
console.log('--------------------------------');

PersonV2.prototype.height = "189cm";
console.log(p1.height);
console.log(p2.height);
console.log('--------------------------------');

var p = {x:5, y:6}; //This is a literal object
//var p2 = p;
var p2 = Object.create(p);

console.log(p2.x);
p2.x = 3;
console.log(p.x);

console.log('--------------------------------');