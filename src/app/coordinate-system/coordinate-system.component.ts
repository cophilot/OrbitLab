import { Component } from '@angular/core';
import { ObjectService } from '../service/object.service';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-coordinate-system',
  templateUrl: './coordinate-system.component.html',
  styleUrls: ['./coordinate-system.component.sass'],
})
export class CoordinateSystemComponent {
  static gridGap = 50;

  static xBars: number[] = [];
  static yBars: number[] = [];

  constructor(private objectService: ObjectService) {
    const gridGap = LocalStorageService.get('gridGap');
    if (gridGap) {
      CoordinateSystemComponent.gridGap = gridGap;
    }
    CoordinateSystemComponent.render();
  }

  static render() {
    this.xBars = [];
    this.yBars = [];
    if (this.gridGap < 0) {
      return;
    }

    let middle = window.innerWidth / 2;
    this.xBars.push(middle);

    let offset = 0;
    while (middle - offset > 0) {
      offset += this.gridGap;
      this.xBars.push(middle + offset);
      this.xBars.push(middle - offset);
    }

    middle = window.innerHeight / 2;
    this.yBars.push(middle);

    offset = 0;
    while (middle - offset > 0) {
      offset += this.gridGap;
      this.yBars.push(middle + offset);
      this.yBars.push(middle - offset);
    }
  }

  static toggleGridSize() {
    switch (this.gridGap) {
      case 50:
        this.gridGap = 100;
        break;
      case 100:
        this.gridGap = 5000;
        break;
      case 5000:
        this.gridGap = -1;
        break;
      case -1:
        this.gridGap = 20;
        break;
      case 20:
        this.gridGap = 50;
        break;
      default:
        this.gridGap = 50;
        break;
    }
    LocalStorageService.set('gridGap', this.gridGap);
    this.render();
  }

  getGridGap() {
    return CoordinateSystemComponent.gridGap;
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
    return CoordinateSystemComponent.gridGap > 0;
  }
}
