/*
Interfaces

In TypeScript, two types are compatible if their internal structure is compatible.
This allows us to implement an interface just by having the shape the interface requires, without an explicit implements clause.
*/
function greeter(person) {
    return "Hello, My name is " + person.firstName + " " + person.lastName + " & Mobile no is " + person.mobileNo;
}
var user = { firstName: "Mickey", lastName: "Jones", mobileNo: 98892828728 };
document.body.innerHTML = greeter(user);
