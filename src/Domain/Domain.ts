export default function Domain( constructorFunction: Function ) {
    constructorFunction.prototype.selfDrivable = true;
}