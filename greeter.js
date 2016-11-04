/*
Classes with HTML Example

Finally, lets extend the example one last time with classes.
TypeScript supports new features in JavaScript, like support for class-based object-oriented programming.
*/
var Student = (function () {
    function Student(firstName, middleInitial, lastName, mobileNo) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.mobileNo = mobileNo;
        this.fullName = firstName + " " + middleInitial + " " + lastName + " " + mobileNo;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.middleInitial + " " + person.firstName + " " + person.lastName + ", Mobile no: " + person.mobileNo;
}
var user = new Student("Jane", "M.", "User", "98989899989898");
document.body.innerHTML = greeter(user);
