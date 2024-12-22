import { Injectable } from '@angular/core';
import { Obj } from '../utils/Obj';
import { LocalStorageService } from './local-storage.service';
import { VVector } from '../utils/VVector';

@Injectable({
  providedIn: 'root',
})
export class ObjectService {
  private objects: Obj[] = [];

  private selectedObject: Obj | null = null;

  constructor() {
    this.objects = LocalStorageService.getObjects();
    Obj.idCounter = this.objects.length;
  }

  reset(): void {
    this.objects = LocalStorageService.getObjects();
  }

  getObjects(): Obj[] {
    return this.objects;
  }

  checkName(name: string) {
    return !this.objects.find((object) => object.name === name);
  }

  editObject(
    name: string,
    startX: number,
    startY: number,
    radius: number,
    weight: number,
    velocity: VVector,
    color: string = 'red'
  ): void {
    if (!this.selectedObject) {
      return;
    }
    this.deleteObject(this.selectedObject.id, false);
    this.addObject(
      new Obj(name, startX, startY, radius, weight, velocity, color),
      false
    );
    this.selectedObject = null;
    LocalStorageService.saveObjects(this.objects);
  }

  addNewObject(
    name: string,
    startX: number,
    startY: number,
    radius: number,
    weight: number,
    velocity: VVector,
    color: string = 'red'
  ): void {
    this.objects.push(
      new Obj(name, startX, startY, radius, weight, velocity, color)
    );
    LocalStorageService.saveObjects(this.objects);
  }

  addObject(object: Obj, save = true): void {
    this.objects.push(object);
    if (save) {
      LocalStorageService.saveObjects(this.objects);
    }
  }

  addObjectFromJSON(json: any): void {
    const object = Obj.getObjFromJson(json);
    this.objects.push(object);
    LocalStorageService.saveObjects(this.objects);
  }

  deleteObject(id: number, save = true): void {
    this.objects = this.objects.filter((object) => object.id !== id);
    if (save) {
      LocalStorageService.saveObjects(this.objects);
    }
  }

  getSelectedObject(): number {
    if (this.selectedObject) {
      return this.selectedObject.id;
    }
    return -1;
  }

  getSelectedObjectAsObject(): any {
    return this.selectedObject;
  }

  setSelectedObject(obj: Obj | null): void {
    this.selectedObject = obj;
  }

  deleteSelectedObject(): void {
    if (this.selectedObject) {
      this.deleteObject(this.selectedObject.id);
    }
    this.selectedObject = null;
  }

  editSelectedObject(): void {
    if (this.selectedObject) {
      this.deleteObject(this.selectedObject.id);
    }
    this.selectedObject = null;
  }

  getObjectsForExport(): any[] {
    return this.objects.map((object) => {
      return {
        name: object.name,
        x: object.x,
        y: object.y,
        radius: object.radius,
        color: object.color,
        weight: object.weight,
        velocity: {
          x: object.velocity.x,
          y: object.velocity.y,
        },
      };
    });
  }

  joinObjects(object1: Obj, object2: Obj): void {
    let prim = object1;
    let sec = object2;
    if (object1.weight < object2.weight) {
      prim = object2;
      sec = object1;
    }

    const newObject = new Obj(
      prim.name + '_' + sec.name,
      prim.x,
      prim.y,
      prim.radius + sec.radius / 2,
      prim.weight + sec.weight,
      prim.velocity.add(sec.velocity.div(2)),
      prim.color
    );
    this.deleteObject(prim.id, false);
    this.deleteObject(sec.id, false);
    this.addObject(newObject, false);
  }

  empty(): void {
    this.objects = [];
    LocalStorageService.saveObjects(this.objects);
  }
}
