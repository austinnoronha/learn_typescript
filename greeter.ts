/*
Building your first TypeScript file

In your editor, type the following JavaScript code in greeter.ts:

Compiling your code

CMD: tsc greeter.ts                    

The result will be a file greeter.js which contains the same JavaScript that you fed in. We’re up and running using TypeScript in our JavaScript app!

*/

function greeter(person) {
    return "Hello, " + person;
}

var user = "Jane User";

document.body.innerHTML = greeter(user); 