import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  static isInit = false;

  static showCoordinateSystem = true;

  static init() {
    if (this.isInit) {
      return;
    }
    const settings = LocalStorageService.getSettings();
    if (settings) {
      this.showCoordinateSystem = settings.showCoordinateSystem;
    }
    this.isInit = true;
  }

  static toggleCoordinateSystem() {
    this.init();
    this.showCoordinateSystem = !this.showCoordinateSystem;
    this.saveSettings();
  }

  static getShowCoordinateSystem() {
    this.init();
    return this.showCoordinateSystem;
  }

  static saveSettings() {
    LocalStorageService.saveSettings(this);
  }
}
