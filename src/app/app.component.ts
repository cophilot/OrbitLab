import { Component } from '@angular/core';
import { LocalStorageService } from './service/local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'OrbitLab';
  ngOnInit() {
    LocalStorageService.init();
  }
}
