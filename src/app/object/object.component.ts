import { Component, Input } from '@angular/core';
import { Obj } from '../utils/Obj';
import { ObjectService } from '../service/object.service';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.sass'],
})
export class ObjectComponent {
  @Input() object!: Obj;

  constructor(private objectService: ObjectService) {}

  getObjectService() {
    return this.objectService;
  }

  selectObject() {
    if (this.objectService.getSelectedObject() === this.object.id) {
      this.objectService.setSelectedObject(null);
      return;
    }
    this.objectService.setSelectedObject(this.object);
  }
}
