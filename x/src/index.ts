console.log("TypeScript is running!");

// mapped example

type User = {
    name : string;
    age : number;
}

type OneUser = {
    [one in keyof User]? : User[one]
}

const OneUser : OneUser = {
    name : 'rishnu'
}

console.log(OneUser);

//generic function

function echo<T>(data:T) : T {
    return data
}

console.log(echo<string>('hello0'));

//multiple inheritance

interface CanFly {
    fly():void;
}
interface CanSwim {
    swim():void;
}

class Duck implements CanFly, CanSwim {
    fly() : void {
        console.log('can fly');
        
    }
    swim() : void {
        console.log('can swimm');
        
    }
}

const d  = new Duck()
d.fly()
d.swim()

//function that accepts user-defined type,
//and that type is defined using either
//  a type alias or type interface

type User1 = {
    name : string;
    age : number;

}
function printuser(user:User1) : void {
    console.log('function accepted');
    
}

const u1 : User = {name : 'rishnu', age : 11}
printuser(u1)

// generic function that returns argument in a array

function toArray<T>(...args:T[]): T[] {
    return args
}

console.log(toArray<string>('hu','yy'));


// abstraction using abstract class

abstract class Person {
    abstract dance() : void;

    swim() : void {
        console.log('swimm');
        
    }
}

class Human extends Person {
    dance () : void {
        console.log('dancing');
        
    }
}

const h = new Human()
h.dance()
h.swim()


//interface

interface Vehicle {
    start() : void
    stop() : void
}

class Bike implements Vehicle { 
    start(): void {
        console.log('bike starts');
        
    }
    stop(): void {
        console.log('it stoppeed');
        
    }
}

const b  = new Bike()
b.start()
b.stop()

 // omit example
type Order = {
    id : number;
    name: string
}

type NewOrder = Omit<Order, 'name' >

const t : NewOrder = {id: 2 }
console.log(t);

//custom class decorator

function Logger(constructor : Function) {
    
    console.log('constructor created');
    
}

@Logger
class Check {
    constructor () {
      
        console.log('instance created');
        
    }
}
const l = new Check()
console.log(l);



// tuple example

let person : [string, number]
person = ['dk' , 11]
console.log(person);


// class with constructor

class Prsn {
    name :string
    age : number

    constructor(name : string, age : number) {
        this.name = name
        this.age = age
    }

    greet() : void {
        console.log(`${this.name} ${this.age}`);
        
    }
}

const p1 = new Prsn('dk', 22)
console.log(p1);
