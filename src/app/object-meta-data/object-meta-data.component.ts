import { Component } from '@angular/core';
import { ObjectService } from '../service/object.service';

@Component({
  selector: 'app-object-meta-data',
  templateUrl: './object-meta-data.component.html',
  styleUrls: ['./object-meta-data.component.sass'],
})
export class ObjectMetaDataComponent {
  showAddObjectForm = false;
  constructor(private objectService: ObjectService) {}

  getObjectService() {
    return this.objectService;
  }

  obj() {
    return this.objectService.getSelectedObjectAsObject();
  }

  trimNumber(number: number): string {
    return number.toFixed(1);
  }

  addTousandSeparator(number: number): string {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  getAbsolutVelocity(x: number, y: number): number {
    return Math.sqrt(x * x + y * y);
  }
}
