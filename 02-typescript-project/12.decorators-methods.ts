// const minimumFuel = (fuel: number) => (
//   target: any,
//   propertyKey: string,
//   descriptor: PropertyDescriptor
// ) => {
//   const originalMethod = descriptor.value;

//   descriptor.value = function (...args: any) {
//     const key = "fuel";
//     if (target[key] > fuel) {
//       originalMethod.apply(this, args);
//     } else {
//       console.log("Not enough fuel!");
//     }
//   };

//   return descriptor;
// };

// class Rocket {
//   constructor(public fuel: number = 0) {}

//   @minimumFuel(100)
//   public launch() {
//     console.log("Launching in 3... 2... 1... 🚀");
//   }
// }

// const rocket = new Rocket();
// rocket.launch();
