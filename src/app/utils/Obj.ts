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

  private newX: number | undefined = undefined;
  private newY: number | undefined = undefined;

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

  stageMove(forward: boolean = true) {
    if (forward) {
      this.newX = this.x + this.velocity.x;
      this.newY = this.y + this.velocity.y;
    } else if (this.history.length > 0) {
      this.newX = this.history[this.history.length - 1].x;
      this.newY = this.history[this.history.length - 1].y;
    }
  }

  applyMove(forward: boolean = true) {
    if (this.newX !== undefined && this.newY !== undefined) {
      this.x = this.newX;
      this.y = this.newY;
      this.newX = undefined;
      this.newY = undefined;
      if (forward) {
        this.makeHistoryPoint();
      } else if (this.history.length > 1) {
        this.history.pop();
      }
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
