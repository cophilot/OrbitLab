export class Obj {
  id: number;
  name: string;
  startX: number;
  startY: number;
  radius: number;
  color: string;
  static idCounter = 0;
  constructor(
    name: string,
    startX: number,
    startY: number,
    radius: number,
    color: string = 'red'
  ) {
    this.id = Obj.idCounter++;
    this.name = name;
    this.startX = startX;
    this.startY = startY;
    this.radius = radius;
    this.color = color;
  }

  getScreenCoordinates(): number[] {
    let newX = this.startX - this.radius + window.innerWidth / 2;
    let newY = this.startY - this.radius + window.innerHeight / 2;
    return [newX, newY];
  }
}
