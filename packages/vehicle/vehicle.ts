import type { Color } from 'example_project/packages/color/color';

export class Vehicle {
  make: string;
  model: string;
  color: Color

  constructor(make: string, model: string, color: Color) {
      this.make = make;
      this.model = model;
      this.color = color;
  }

  print() {
      return `${this.make} ${this.model}`;
  }

  foo() {
      return 'bar';
  }
}