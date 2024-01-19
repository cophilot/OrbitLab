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

  private moveVectorX: number = 0;
  private moveVectorY: number = 0;

  private history: any[] = [];

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
    this.makeHistoryPoint();
  }

  calculateGravityForce(object2: Obj) {
    let distance = Math.sqrt(
      (this.x - object2.x) * (this.x - object2.x) +
        (this.y - object2.y) * (this.y - object2.y)
    );
    let force = (this.weight * object2.weight) / (distance * distance);
    let forceX = force * ((object2.x - this.x) / distance);
    let forceY = force * ((object2.y - this.y) / distance);
    this.velocity.x += forceX / this.weight;
    this.velocity.y += forceY / this.weight;
  }

  stageMove(forward: boolean = true) {
    if (forward) {
      this.moveVectorX += this.velocity.x;
      this.moveVectorY += this.velocity.y;
    } else if (this.history.length > 0) {
      this.moveVectorX = this.history[this.history.length - 1].x - this.x;
      this.moveVectorY = this.history[this.history.length - 1].y - this.y;
    }
  }

  applyMove(forward: boolean = true) {
    this.x += this.moveVectorX;
    this.y += this.moveVectorY;
    this.moveVectorX = 0;
    this.moveVectorY = 0;
    if (forward) {
      this.makeHistoryPoint();
    } else if (this.history.length > 1) {
      this.history.pop();
    }
  }

  makeHistoryPoint() {
    this.history.push({ x: this.x, y: this.y });
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
