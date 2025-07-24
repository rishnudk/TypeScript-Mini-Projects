
///   abstraction using interface

// interface Vehicle {
//     startEngine(): void;
//     stopEngine(): void;
//     drive(): void;
// }

// class Car implements Vehicle {
//     startEngine(): void {
//         console.log('started')
//     }

//     stopEngine(): void {
//         console.log('stopped')
//     }

//     drive(): void {
//         console.log('driving')
//     }
// }

// const myCar: Vehicle = new Car();

// myCar.startEngine();
// myCar.drive();
// myCar.stopEngine();


///   Abstraction using Abstract Class

abstract class Vehicle {
    abstract startEngine(): void;

    stopEngine(): void {
        console.log('stopped')
    }
}

class Car extends Vehicle  {
    startEngine(): void {
        console.log('car strted'

        )
    }
}

const myCar = new Car;
 
myCar.startEngine();
myCar.stopEngine();
