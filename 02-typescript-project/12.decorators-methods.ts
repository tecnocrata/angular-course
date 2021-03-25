// import { performance } from "perf_hooks";

// const measure = (
//   target: Object,
//   propertyKey: string,
//   descriptor: PropertyDescriptor
// ) => {
//   const originalMethod = descriptor.value;

//   descriptor.value = function (...args) {
//     const start = performance.now();
//     const result = originalMethod.apply(this, args);
//     const finish = performance.now();
//     console.log(`Execution time: ${finish - start} milliseconds`);
//     return result;
//   };

// class Rocket {
//   @measure
//   launch() {
//     console.log("Launching in 3... 2... 1... 🚀");
//   }
// }
