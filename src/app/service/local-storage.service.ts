import { Injectable } from '@angular/core';
import { Obj } from '../utils/Obj';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  saveObjects(objects: Obj[]) {
    localStorage.setItem('objects', JSON.stringify(objects));
  }

  getObjects(): Obj[] {
    const objects = localStorage.getItem('objects');
    if (objects) {
      let objectArray = JSON.parse(objects);
      let objs: Obj[] = [];
      for (let object of objectArray) {
        objs.push(Obj.getObjFromJson(object));
      }
      return objs;
    }
    return [];
  }
}
