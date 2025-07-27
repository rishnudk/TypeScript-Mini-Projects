
function hello(constructor: Function) {
    console.log('hellooo')
}

@hello
class Myclass {
    constructor() {
        console.log('myclass is created here');
        
    }
}

const obj = new Myclass()
