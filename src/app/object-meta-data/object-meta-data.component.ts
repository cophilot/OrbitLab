import { Component } from '@angular/core';
import { ObjectService } from '../service/object.service';

@Component({
  selector: 'app-object-meta-data',
  templateUrl: './object-meta-data.component.html',
  styleUrls: ['./object-meta-data.component.sass'],
})
export class ObjectMetaDataComponent {
  constructor(private objectService: ObjectService) {}

  getObjectService() {
    return this.objectService;
  }
}
