import Branch from './Domain/Branch.ts';

const arr: Array<number> = [1, 2, 3];
const iAmJavascriptES6 = () => console.log(...arr);

let car: Branch = new Branch("Nissan");
console.log(car);
console.log(`selfDriving: ${car['selfDrivable']}`);

