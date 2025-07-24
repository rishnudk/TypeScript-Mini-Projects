var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("hello my name is ".concat(this.name, " and age is ").concat(this.age));
    };
    return Person;
}());
var person1 = new Person('rishnu', 11);
person1.greet();
