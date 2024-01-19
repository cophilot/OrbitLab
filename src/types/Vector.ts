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
    return Math.acos(this.dot(v) / (this.length() * v.length()));
  }

  static getFromJson(json: any): Vector {
    return new Vector(json.start.x, json.start.y, json.end.x, json.end.y);
  }
}

export default Vector;
