function greeting(name) {
    return "Hello, " + name;
}
console.log("(Fn)greeting: " + greeting("Taro"));
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var jiro = {
    firstName: "Jiro",
    lastName: "Tokyo"
};
console.log("(Fn)greeter: " + greeter(jiro));
var user = {
    firstName: "John",
    lastName: "Doe",
    age: 10
};
console.log("user");
console.log(user);
var user2 = {
    firstName: "John",
    lastName: "Doe"
};
console.log("user2:");
console.log(user2);
var user3 = {
    firstName: "John",
    lastName: "Doe"
};
console.log("user3:");
console.log(user3);
var fruit = "apple";
console.log("fruit: " + fruit);
var tHello = function (name) { return "Hello ".concat(name); };
console.log("tHello: " + tHello("Daniel"));
var iHello = function (name) { return "Hello ".concat(name); };
console.log("iHello: " + iHello("Michael"));
