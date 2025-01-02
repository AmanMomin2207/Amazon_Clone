// class Car {
//     #brand;
//     #model;
//     speed = 0;
//     isTrunkOpen = false;

//     constructor(carDetails) {
//         this.#brand = carDetails.brand;
//         this.#model = carDetails.model;
//     }

//     displayInfo() {
//         console.log(`${this.#brand} , ${this.#model} , Speed : ${this.speed} , ${this.isTrunkOpen}`);
//     }
    
//     go() {
//         this.isTrunkOpen = false;
//         this.speed+=5;
//         if(this.speed > 200){
//             this.speed = 200;
//         }
//     }

//     brake() {
//         this.speed-=5;
//         if(this.speed < 0){
//             this.speed = 0;
//         }
//     }

//     openTrunk() {
//         if(this.speed === 0){
//             this.isTrunkOpen = true;
//         }
//     }

//     closeTrunk() {
//         this.isTrunkOpen = false;
//     }
// }

// class RaceCar extends Car{

//     acceleration;

//     constructor(carDetails) {
//         super(carDetails);
//         this.acceleration = carDetails.acceleration;
//     }

//     go() {
//         this.speed+=this.acceleration;
//         if(this.speed > 300){
//             this.speed = 300;
//         }
//     }

//     openTrunk() {
//       console.log('Race cars do not have a truck');  
//     }

//     closeTrunk() {
//         console.log('Race cars do not have a truck');
//     }
// }

// const car1 = new Car({
//     brand: 'Toyota',
//     model: 'Corolla',
//     isTrunkOpen: false
// });

// const car2 = new Car({
//     brand: 'Tesla',
//     model: 'Model 3',
//     isTrunkOpen: false
// });

// const car3 = new RaceCar({
//     brand: 'McLaren',
//     model: 'F1',
//     acceleration: 20
// })

// car3.displayInfo();
// car3.go();
// car1.go();
// car1.go();
// car2.go();
// car2.go();
// car2.go();
// car2.openTrunk();
// car2.brake();
// car2.brake();
// car2.brake();
// car2.openTrunk();
// car1.displayInfo();
// car2.displayInfo();
// // console.log(car1);
// // console.log(car2);