
// union  : A value can be any one of the specified types.

// let value : string | number;

// value = 'hello'
// value = 123
// value = true;


//intersection  A value must have all types combined

type person = { name: string};

type Employee = { id: number};

type Workerr = person  & Employee;

const workerId : Workerr = { 
    name : 'rishnu',
    id : 11
}


// extends    
 //   means "inherits from" or "is based on" another type
 //    If Type B extends Type A, then Type B gets everything from Type A, and can add more.

interface Persons {
    name : string;
    age : number;
}

interface Empp extends Persons {
    empId: number;
}


const e : Empp  = {
    name : 'rishnu',
    age : 11,
    empId : 33
}


// extends wit h class

class Animal {
    move() {
        console.log('moving')
    }
}

class Dog extends Animal {
    bark() {
        console.log('barking')
    }
}

const d = new Dog();
d.move();
d.bark();


// optional properties 

interface P {
    name : string;
    age? : number;
}

const p1 : P = { name : 'rishnu'}
const p2 : P = {age : 12}