export class VVector {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(v: VVector): VVector {
    return new VVector(this.x + v.x, this.y + v.y);
  }

  sub(v: VVector): VVector {
    return new VVector(this.x - v.x, this.y - v.y);
  }

  mult(n: number): VVector {
    return new VVector(this.x * n, this.y * n);
  }

  div(n: number): VVector {
    return new VVector(this.x / n, this.y / n);
  }

  length(): number {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  static getFromJson(json: any): VVector {
    return new VVector(json.x, json.y);
  }
}
