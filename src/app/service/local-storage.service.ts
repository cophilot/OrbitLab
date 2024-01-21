import { Injectable } from '@angular/core';
import { Obj } from '../utils/Obj';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  static saveObjects(objects: Obj[]) {
    localStorage.setItem('objects', JSON.stringify(objects));
  }

  static getObjects(): Obj[] {
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

  static getSettings() {
    const settings = localStorage.getItem('orbitlab-settings');
    if (settings) {
      return JSON.parse(settings);
    }
    return undefined;
  }

  static saveSettings(settings: any) {
    localStorage.setItem('orbitlab-settings', JSON.stringify(settings));
  }

  static clear() {
    localStorage.clear();
  }

  static set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static get(key: string) {
    const value = localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return undefined;
  }
}
