

 abstract class Ani {
    abstract makeSound(): void;
    
    soundd(): void {
        console.log('hellooo')
    }
}

class Catt extends Ani {
    makeSound(): void {
        console.log('oiii')
    }
}

const catt : Ani = new Catt()
catt.makeSound()
catt.soundd()

