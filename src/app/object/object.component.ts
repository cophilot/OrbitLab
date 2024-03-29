import { Component, Input } from '@angular/core';
import { Obj } from '../utils/Obj';
import { ObjectService } from '../service/object.service';
import { SettingsService } from '../service/settings.service';
import { ScaleService } from '../service/scale.service';

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

  areObjectNamesVisible() {
    return SettingsService.areObjectNamesVisible();
  }

  scale(scale: number) {
    return ScaleService.scale(scale);
  }
}
