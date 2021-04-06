const addFuelToRocket = (target: typeof Rocket) => {
  return class extends target {
    fuel = 100;
    destiny = "moon";
  };
};

@addFuelToRocket
class Rocket {
  constructor(public fuel: number = 0) {}
}

let rocket = new Rocket();
console.log(rocket.fuel);
// const key: string = "destiny";
// console.log(rocket[key]);
console.log(Object.getOwnPropertyNames(rocket));
console.log(Object.entries(rocket));
