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

  constructor(private localStorageService: LocalStorageService) {
    this.objects = this.localStorageService.getObjects();
    Obj.idCounter = this.objects.length;
  }

  reset(): void {
    this.objects = this.localStorageService.getObjects();
  }

  getObjects(): Obj[] {
    return this.objects;
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
    this.localStorageService.saveObjects(this.objects);
  }

  addObject(object: Obj): void {
    this.objects.push(object);
  }

  deleteObject(id: number): void {
    this.objects = this.objects.filter((object) => object.id !== id);
    this.localStorageService.saveObjects(this.objects);
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
}
