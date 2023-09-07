import { Component } from '@angular/core';
import { ObjectService } from '../service/object.service';
import { Router } from '@angular/router';
import { SettingsService } from '../service/settings.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  showAddObjectForm = false;

  constructor(
    private objectService: ObjectService,
    private router: Router,
    private settingsService: SettingsService
  ) {}

  getObjectService() {
    return this.objectService;
  }

  closeAddObjectForm() {
    this.showAddObjectForm = false;
  }

  goToSettings() {
    this.router.navigate(['settings']);
  }
  getSettingsService() {
    return this.settingsService;
  }
}
