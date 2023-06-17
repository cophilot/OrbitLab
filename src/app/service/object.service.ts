import { Injectable } from '@angular/core';
import { Obj } from '../utils/Obj';

@Injectable({
  providedIn: 'root',
})
export class ObjectService {
  private objects: Obj[] = [];

  constructor() {}

  getObjects(): Obj[] {
    return this.objects;
  }

  addNewObject(
    name: string,
    startX: number,
    startY: number,
    radius: number,
    color: string = 'red'
  ): void {
    this.objects.push(new Obj(name, startX, startY, radius, color));
  }

  addObject(object: Obj): void {
    this.objects.push(object);
  }

  deleteObject(id: number): void {
    this.objects = this.objects.filter((object) => object.id !== id);
  }
}
