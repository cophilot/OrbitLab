import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../../service/settings.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass'],
})
export class SettingsComponent {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService,
    private settingsService: SettingsService
  ) {}

  exportObjects() {
    const objects = this.localStorageService.getObjects();
    const dataStr =
      'data:text/json;charset=utf-8,' +
      encodeURIComponent(JSON.stringify(objects));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute('href', dataStr);
    downloadAnchorNode.setAttribute('download', 'objects.json');
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

  importObjects() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (event: any) => {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        const objects = JSON.parse(reader.result as string);
        this.localStorageService.saveObjects(objects);
      };
    };
    input.click();
  }

  clearLocalStorage() {
    this.localStorageService.clear();
    alert('Local storage cleared!');
  }

  goToHome() {
    this.router.navigate(['']);
  }
}
