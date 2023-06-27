import { VVector } from './VVector';

export class Obj {
  id: number;
  name: string;
  x: number;
  y: number;
  velocity: VVector;
  radius: number;
  weight: number;
  color: string;
  static idCounter = 0;
  constructor(
    name: string,
    x: number,
    y: number,
    radius: number,
    weight: number,
    velocity: VVector,
    color: string = 'red'
  ) {
    this.id = Obj.idCounter++;
    this.name = name;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
    this.weight = weight;
  }

  move() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
  }

  getScreenCoordinates(): number[] {
    let newX = this.x - this.radius + window.innerWidth / 2;
    let newY = window.innerHeight / 2 - this.y - this.radius;
    return [newX, newY];
  }

  static getObjFromJson(json: any): Obj {
    return new Obj(
      json.name,
      json.x,
      json.y,
      json.radius,
      json.weight,
      VVector.getFromJson(json.velocity),
      json.color
    );
  }
}
