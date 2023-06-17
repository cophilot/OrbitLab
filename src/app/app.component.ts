import { Component } from '@angular/core';
import { ObjectService } from './service/object.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'OrbitLab';

  showAddObjectForm = false;

  constructor(private objectService: ObjectService) {}

  getObjects() {
    return this.objectService.getObjects();
  }

  closeAddObjectForm() {
    this.showAddObjectForm = false;
  }
}
