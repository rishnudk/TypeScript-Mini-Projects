
function explicit() {
let name = 'rishnu';
let age = 21;

name = 'john';
age = 'hello'
}


// any  we can use any type, it disable type checking

let data : any ;

data = 'hello'
data = 111
data = true;

//  unknown    , same as any, but it enables type checking while execution

let value :unknown;

value = 'hello'
value = 22

if(typeof value === 'string') {
    console.log(value.toUpperCase())
}



//  never   ,  value that never occurs , a function that never returns / it thorws a error or goes into infinite loops

function throwError(message : string) : never {
    throw new Error(message)
}

function infiniteLoop():never {
    while(true) {
        console.log('running')
    }
}
 

//void  function that does not return a value,  used of r loogin the console message

function logMsg(message:string) : void {
    console.log('this is the message', message)
}

//object     repre4snt a  non primitive value( not number,string,boolean)
 
let person : object; 

person = {name : 'rishnu', age : 23};
person = null
person = 'hello'

//array    use type []  or Array <type>

let num : number[] = []
let namess : Array<string> = []
num.push(4)
num.push('hi')
namess.push('dk')
namess.push(1)


//tuple    fixed length array 
let user : [string, number]
user = ['dk' , 11]
user = [11, 'dk']   // order matters
user = ['dk' , 11 , 'hi']   // too many elements
console.log(user[0])
console.log(user[1])

//enum  special dataype used to define set of named constants

enum Direction {
    up,
    down,
    left,
    right
}
console.log(Direction.up)
enum color{
    red = 'red',
    green = 'green'
}
console.log(color.red)