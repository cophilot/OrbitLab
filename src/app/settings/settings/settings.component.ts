import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../../service/settings.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import {
  getEarthMoonExample,
  getEllipticalOrbit,
  getFlyByExample,
  getPlutoCharonExample,
  getThreeBody,
} from '../../../data/examples';
import { ObjectService } from 'src/app/service/object.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass'],
})
export class SettingsComponent {
  constructor(private router: Router, private objectService: ObjectService) {}

  exportObjects() {
    const objects = this.objectService.getObjectsForExport();
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

  shareURL() {
    const objString = this.objectService.getObjectsAsURLString();
    const url = window.location.origin + '/#/share/' + objString;
    const textArea = document.createElement('textarea');
    textArea.value = url;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();
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
        const objects: any[] = JSON.parse(reader.result as string);
        objects.forEach((object) => {
          this.objectService.addObjectFromJSON(object);
        });
      };
    };
    input.click();
  }

  importExample(example: string) {
    let objects: any[] = [];

    switch (example.toLowerCase()) {
      case 'earth-moon':
        objects = getEarthMoonExample();
        break;
      case 'pluto-charon':
        objects = getPlutoCharonExample();
        break;
      case 'elliptical-orbit':
        objects = getEllipticalOrbit();
        break;
      case 'three-body':
        objects = getThreeBody();
        break;
      case 'flyby':
        objects = getFlyByExample();
        break;
      default:
        break;
    }
    this.objectService.empty();
    objects.forEach((object) => {
      this.objectService.addObjectFromJSON(object);
    });
  }

  getSettings() {
    return SettingsService;
  }

  getLocalStorageService() {
    return LocalStorageService;
  }

  goToHome() {
    this.router.navigate(['']);
  }
}
