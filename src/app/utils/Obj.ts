import { ScaleService } from '../service/scale.service';
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

  isColliding(object2: Obj): boolean {
    if (this.id === object2.id) {
      return false;
    }
    return this.getDistanceTo(object2) <= this.radius + object2.radius;
  }

  getDistanceTo(object2: Obj): number {
    return Math.sqrt(
      (this.x - object2.x) * (this.x - object2.x) +
        (this.y - object2.y) * (this.y - object2.y)
    );
  }

  makeHistoryPoint() {
    this.history.push({ x: this.x, y: this.y });
  }

  getScreenCoordinates(): number[] {
    let newX = scale(this.x - this.radius) + window.innerWidth / 2;
    let newY = window.innerHeight / 2 - scale(this.y) - scale(this.radius);
    return [newX, newY];
  }

  serialize(): any {
    const name = this.name.replace(/ /g, '_');
    const color = this.color.replace(/#/g, '!');
    return `${name}~${this.x}~${this.y}~${this.radius}~${this.weight}~${this.velocity.x}~${this.velocity.y}~${color}`;
  }

  static deserialize(serialized: string): Obj {
    const parts = serialized.split('~');
    const name = parts[0].replace(/_/g, ' ');
    const x = parseFloat(parts[1]);
    const y = parseFloat(parts[2]);
    const radius = parseFloat(parts[3]);
    const weight = parseFloat(parts[4]);
    const velocity = new VVector(parseFloat(parts[5]), parseFloat(parts[6]));
    const color = parts[7].replace(/!/g, '#');
    return new Obj(name, x, y, radius, weight, velocity, color);
  }

  static deserializeArray(serialized: string): Obj[] {
    serialized = serialized.replace(/%20/g, ' ').replace(/=/g, '');
    const objects: Obj[] = [];
    serialized.split(';').forEach((serializedObj) => {
      try {
        objects.push(Obj.deserialize(serializedObj));
      } catch (e) {
        console.error(e);
      }
    });
    return objects;
  }

  static serializeArray(objects: Obj[]): string {
    return objects.map((object) => object.serialize()).join(';');
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

function scale(scale: number): number {
  return ScaleService.scale(scale);
}
