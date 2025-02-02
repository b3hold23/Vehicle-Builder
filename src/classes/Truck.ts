// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  // TODO: Declare properties of the Truck class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // TODO: Create a constructor that accepts the properties of the Truck class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
  {
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    super();
    this.towingCapacity = towingCapacity;
  }
    // TODO: The constructor should initialize the properties of the Truck class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;

    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    this.wheels = wheels.length === 4 ? wheels : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
  }

  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Car | Truck | Motorbike): void {
    if (this.towingCapacity >= vehicle.weight) {
      console.log(`${this.make} ${this.model} is towing ${vehicle.make} ${vehicle.model}`);
    } else {
      console.log(`${this.make} ${this.model} cannot tow ${vehicle.make} ${vehicle.model} due to insufficient towing capacity`);
    }
  }

  // TODO: Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails();
    console.log(`Towing capacity ${this.towingCapacity}`);
    console.log(`Wheels: ${this.wheels.map(wheel => wheel.size)}`);
  }
}

// Export the Truck class as the default export
export default Truck;
