export class Car {
  
  public description = 'DI';
  
  
  constructor(public engine: Engine, public tires: Tires) {}
  
  drive() {
    return `${this.description} car with ` +
      `${this.engine.cylinders} cylinders and ${this.tires.make} tires.`;
  }
}