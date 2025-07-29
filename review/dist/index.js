"use strict";
const sayHi = (user) => {
    return `Hi, ${user.name}! You are ${user.age} years old.`;
};
console.log(sayHi({ name: "Rishnu", age: 25 }));
