import { Component } from '@angular/core';
import { ObjectService } from '../service/object.service';

@Component({
  selector: 'app-coordinate-system',
  templateUrl: './coordinate-system.component.html',
  styleUrls: ['./coordinate-system.component.sass'],
})
export class CoordinateSystemComponent {
  xBars: number[] = [];
  yBars: number[] = [];

  constructor(private objectService: ObjectService) {
    const gridGap = 50;

    let middle = window.innerWidth / 2;
    this.xBars.push(middle);

    let offset = 0;
    while (middle - offset > 0) {
      offset += gridGap;
      this.xBars.push(middle + offset);
      this.xBars.push(middle - offset);
    }

    middle = window.innerHeight / 2;
    this.yBars.push(middle);

    offset = 0;
    while (middle - offset > 0) {
      offset += gridGap;
      this.yBars.push(middle + offset);
      this.yBars.push(middle - offset);
    }
  }

  unselectObject() {
    this.objectService.setSelectedObject(null);
  }
}
