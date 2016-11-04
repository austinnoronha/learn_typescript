/*
Classes with HTML Example

Finally, lets extend the example one last time with classes. 
TypeScript supports new features in JavaScript, like support for class-based object-oriented programming.
*/

class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName, public mobileNo) {
        this.fullName = firstName + " " + middleInitial + " " + lastName + " " + mobileNo;
    }
}

interface Person {
    middleInitial: string;
    firstName: string;
    lastName: string;
    fullName: string;
    mobileNo: string;
}

function greeter(person : Person) {
    return "Hello, " + person.middleInitial + " " + person.firstName + " " + person.lastName+ ", Mobile no: " + person.mobileNo;
}


var user = new Student("Jane", "M.", "User", "98989899989898");

document.body.innerHTML = greeter(user);