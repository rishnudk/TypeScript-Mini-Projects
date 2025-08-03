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









