class Singleton {
   constructor() {
    if(Singleton.instance) {
        return Singleton.instance;
    }
    this.value = Math.random()

    Singleton.instance = this;
}

getValue() {
    return this.value;
}
}
const obj1 = new Singleton()
const obj2 = new Singleton()
console.log(obj1.getValue())
console.log(obj2.getValue())