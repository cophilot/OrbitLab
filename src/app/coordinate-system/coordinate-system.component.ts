import { Component } from '@angular/core';
import { ObjectService } from '../service/object.service';

@Component({
  selector: 'app-coordinate-system',
  templateUrl: './coordinate-system.component.html',
  styleUrls: ['./coordinate-system.component.sass'],
})
export class CoordinateSystemComponent {
  constructor(private objectService: ObjectService) {}

  unselectObject() {
    this.objectService.setSelectedObject(null);
  }
}
