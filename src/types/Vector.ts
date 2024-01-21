import Point from './Point';

class Vector {
  start: Point;
  end: Point;

  constructor(
    startX: number = 0,
    startY: number = 0,
    endX: number = 0,
    endY: number = 0
  ) {
    this.start = new Point(startX, startY);
    this.end = new Point(endX, endY);
  }

  add(v: Vector): Vector {
    return new Vector(
      this.start.x + v.start.x,
      this.start.y + v.start.y,
      this.end.x + v.end.x,
      this.end.y + v.end.y
    );
  }

  sub(v: Vector): Vector {
    return new Vector(
      this.start.x - v.start.x,
      this.start.y - v.start.y,
      this.end.x - v.end.x,
      this.end.y - v.end.y
    );
  }

  mult(n: number): Vector {
    return new Vector(
      this.start.x * n,
      this.start.y * n,
      this.end.x * n,
      this.end.y * n
    );
  }

  length(): number {
    return Math.sqrt(
      Math.pow(this.end.x - this.start.x, 2) +
        Math.pow(this.end.y - this.start.y, 2)
    );
  }

  dot(v: Vector): number {
    return (
      (this.end.x - this.start.x) * (v.end.x - v.start.x) +
      (this.end.y - this.start.y) * (v.end.y - v.start.y)
    );
  }

  deg(v: Vector): number {
    // calculate the angle between two vectors clockwise
    const dot = this.dot(v);
    const length = this.length() * v.length();
    let angle = Math.acos(dot / length);
    // convert to degrees
    angle = (angle * 180) / Math.PI;

    // check if the angle is clockwise or counterclockwise
    const cross = this.cross(v);
    if (cross < 0) {
      angle = 360 - angle;
    }

    return angle;
  }

  cross(v: Vector): number {
    return (
      (this.end.x - this.start.x) * (v.end.y - v.start.y) -
      (this.end.y - this.start.y) * (v.end.x - v.start.x)
    );
  }

  static getFromJson(json: any): Vector {
    return new Vector(json.start.x, json.start.y, json.end.x, json.end.y);
  }
}

export default Vector;
