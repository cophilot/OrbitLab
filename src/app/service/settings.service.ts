import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  showCoordinateSystem = true;

  constructor(private localStorageService: LocalStorageService) {
    const settings = this.localStorageService.getSettings();
    if (settings) {
      this.showCoordinateSystem = settings.showCoordinateSystem;
    }
  }

  toggleCoordinateSystem() {
    this.showCoordinateSystem = !this.showCoordinateSystem;
    this.saveSettings();
  }

  getShowCoordinateSystem() {
    return this.showCoordinateSystem;
  }

  saveSettings() {
    this.localStorageService.saveSettings(this);
  }
}
