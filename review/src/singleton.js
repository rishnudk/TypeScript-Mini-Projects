
class Singleton {
    constructor() {
        if(Singleton.instance) {
            return Singleton.instance
        }

        this.value = Math.random();

        Singleton.instance = this;
    }

    greet() {
        return this.value;
    }
}
const obj1 = new Singleton();
const obj2 = new Singleton();
console.log(obj1.greet());
console.log(obj2.greet());
