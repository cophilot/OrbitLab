import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { CoordinateSystemComponent } from '../coordinate-system/coordinate-system.component';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private static isInit = false;

  private static gridSize = 50;
  private static showObjectNames = true;
  private static showVelocityArrow = true;

  static init() {
    if (this.isInit) {
      return;
    }
    const settings = LocalStorageService.getSettings();
    if (settings) {
      this.gridSize = settings.gridSize;
      this.showObjectNames = settings.showObjectNames;
      this.showVelocityArrow = settings.showVelocityArrow;
    }
    this.isInit = true;
  }

  static saveSettings(): void {
    this.init();
    LocalStorageService.saveSettings({
      gridSize: this.gridSize,
      showObjectNames: this.showObjectNames,
      showVelocityArrow: this.showVelocityArrow,
    });
  }

  static getGridSize(): number {
    this.init();
    return this.gridSize;
  }

  static areObjectNamesVisible(): boolean {
    this.init();
    return this.showObjectNames;
  }

  static toggleObjectNamesVisibility(): void {
    this.init();
    this.showObjectNames = !this.showObjectNames;
    this.saveSettings();
  }

  static isVelocityArrowVisible(): boolean {
    this.init();
    return this.showVelocityArrow;
  }

  static toggleVelocityArrowVisibility(): void {
    this.init();
    this.showVelocityArrow = !this.showVelocityArrow;
    this.saveSettings();
  }

  static toggleGridSize(): void {
    this.init();

    switch (this.gridSize) {
      case 50:
        this.gridSize = 100;
        break;
      case 100:
        this.gridSize = 5000;
        break;
      case 5000:
        this.gridSize = -1;
        break;
      case -1:
        this.gridSize = 20;
        break;
      case 20:
        this.gridSize = 50;
        break;
      default:
        this.gridSize = 50;
        break;
    }
    CoordinateSystemComponent.render();
    this.saveSettings();
  }
}
