import { Component } from '@angular/core';
import { ObjectService } from '../service/object.service';
import { LocalStorageService } from '../service/local-storage.service';
import { SettingsService } from '../service/settings.service';
import { ScaleService } from '../service/scale.service';

@Component({
  selector: 'app-coordinate-system',
  templateUrl: './coordinate-system.component.html',
  styleUrls: ['./coordinate-system.component.sass'],
})
export class CoordinateSystemComponent {
  static xBars: number[] = [];
  static yBars: number[] = [];

  constructor(private objectService: ObjectService) {
    CoordinateSystemComponent.render();
  }

  static render() {
    this.xBars = [];
    this.yBars = [];
    if (SettingsService.getGridSize() < 0) {
      return;
    }

    let middle = window.innerWidth / 2;
    this.xBars.push(middle);

    let offset = 0;
    let gridSize = ScaleService.scale(SettingsService.getGridSize());
    while (middle - offset > 0) {
      offset += gridSize;
      this.xBars.push(middle + offset);
      this.xBars.push(middle - offset);
    }

    middle = window.innerHeight / 2;
    this.yBars.push(middle);

    offset = 0;
    while (middle - offset > 0) {
      offset += gridSize;
      this.yBars.push(middle + offset);
      this.yBars.push(middle - offset);
    }
  }

  getGridGap() {
    return SettingsService.getGridSize();
  }

  getXBars() {
    return CoordinateSystemComponent.xBars;
  }

  getYBars() {
    return CoordinateSystemComponent.yBars;
  }

  unselectObject() {
    this.objectService.setSelectedObject(null);
  }

  isVisibile() {
    return SettingsService.getGridSize() > 0;
  }

  scale(scale: number) {
    return ScaleService.scale(scale);
  }

  floor(value: number) {
    return Math.floor(value);
  }

  innerWidth() {
    return window.innerWidth;
  }

  innerHeight() {
    return window.innerHeight;
  }
}
