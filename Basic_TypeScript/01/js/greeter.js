"use strict";
{
    const greeter = (person) => {
        return "Hello, " + person;
    };
    const user = "takyu";
    const greet = document.querySelector('#greet');
    greet.textContent = greeter(user);
}
