import { Component, HostListener } from '@angular/core';
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

  constructor(private objectService: ObjectService, private router: Router) {
    const url = this.router.url;
    if (!url.includes('share')) {
      return;
    }
    const parts = url.split('share/');
    if (!parts || parts.length < 2) {
      return;
    }
    const objects = parts[1];
    if (!objects) {
      return;
    }
    objectService.addObjectFromURL(objects);
  }

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
    return SettingsService;
  }
}
