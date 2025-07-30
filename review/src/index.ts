
// generic function
 function echo<T>(data:T) : T {
    return data;
 }
 console.log(echo<string>('hello'))

 // multiple inheritance

interface CanFly {
    fly(): void
}

interface CanSwim {
    siwm() : void
}

class Duck implements CanFly, CanSwim {
    fly(): void {
        console.log('duck can fly')
    }
    siwm(): void {
        console.log('duck can swimmm');
        
    }
}

const d = new Duck()
d.fly()
d.siwm()


// Create a function that accepts a user-defined type, 
// and that type is defined using either a type alias or an interface

type User = {
    name : string;
    age : number;
}

function printUser(user:User) : void {
    console.log('function accedpted');
    
}

const u1 : User = { name : 'rishnu', age : 22}
printUser(u1)

//generic function that returns arguments in an array

function toArray<T>(...arg:T[]):T[] {
    return arg
}
console.log(toArray<number>(1,2,3));

function returnArray<T extends any[]>(...arg:T):T {
    return arg;
}

console.log(returnArray(1,2,3))


//  Generic Function That Filters Only Strings


function extractSrting<T>(arr:T[]):string[] {
    return arr.filter((item) => typeof item === "string" )
}
const mixed = [1,'hello', true]
console.log(extractSrting(mixed))

// abstraction using abstract class
 abstract class Person {
    abstract dance() : void
    
 }

 class human extends Person {
    dance() {
        console.log('dancing');
        
    }
    swim() : void {
        console.log('swimming');
        
    }
 }

 const h1  = new human()
 h1.dance()
 h1.swim()


 interface Vehicle {
    start(): void;
    stop():void
    
 }

  class Bike implements Vehicle {
    start() : void {
        console.log('bike started');
        
    }
    stop(): void {
        console.log('bike stopped');
        
    }
  }

  const b1 =  new Bike()
  b1.start()
  b1.stop()


  //omit implementation

  type  Order  = {
    id:number;
    name : string;
  }
  type NewOrder = Omit<Order, 'name'>
  const new1 : NewOrder = {
    id : 4
  }


  //simple custom class decorator

  function Logger(constructor: Function) {
    console.log('constructor created')
  }
@Logger
  class Vehicle {
    constructor() {
        console.log('instance creted')
    }
  }
  
  const v1 = new Vehicle()

  //tuple

  let person : [string, number];
  person = ['dk', 21]
//   p1 = [22,'hi']



// class with constructor 

class Prsn {
    name : string;
    age: number;

    constructor(name: string, age:number) {
        this.name = name;
        this.age = age
    }
    greet() : void {
        console.log(` name is ${this.name} and age is ${this.age}`);
        
    }
}
 
const p1 = new Prsn('dk', 22)
p1.greet()

// complex intersection and union type,

 type Base = {
    id:string;
    email : string;
 }

 type User1 = Base & {
    role: 'user';
    purchases: string[]
 }

 type Admin1 = Base & {
    role : 'admin';
    permissions: string[]
 }

 type Person1 = User1 | Admin1

 const person1 : Person1  = {
    id : 'hii',
    email: ' hello@gmail.com' , 
    role : 'user',
    purchases : ['hii', 'hii']

 }

 // custom type guard
 function isString(value1:unknown) : value1 is string {
    return typeof value1 === 'string';
 }
const value11 : unknown = 'hello'
if(isString(value11)) {
    console.log(value11.toUpperCase());
    
}

  // intersection 
  //combine multiple types into one
  type A = { name : string}
  type B = {age : number}

  type C = A & B
  const c : C = {
    name : 'rishnu',
    age:11
  }

  //method over loading 
  //TS support method/function overloading using multiple signature
  function add(a:number, b:number):number;
  function add(a:string, b:string):string; 
  function add(a:any, b:any):any{
    return a + b;
  }
  console.log(add(2,3));
  console.log(add('hello','hi'));

  //  function to return strings from
  //  an input array containing any datatype

  function getString(arr: any[]):string[] {
    return arr.filter(item => typeof item === 'string')
  }
  console.log(getString(['hi',23,true,{name:'dk'},'hello']));
  
  
  
