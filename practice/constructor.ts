
class Person {
    name : string;
    age : number;

    constructor(name:string, age: number) {
        this.name = name;
        this.age = age;
    }
    greet(): void {
        console.log(`hello my name is ${this.name} and age is ${this.age}`)
    }
}

const person1 = new Person('rishnu' , 11)
person1.greet();

