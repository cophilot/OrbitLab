import { Component } from '@angular/core';
import { LocalStorageService } from '../service/local-storage.service';

@Component({
  selector: 'app-cookie-message',
  templateUrl: './cookie-message.component.html',
  styleUrls: ['./cookie-message.component.scss'],
})
export class CookieMessageComponent {
  static visible = true;
  isVisible() {
    return CookieMessageComponent.visible;
  }

  static hide() {
    CookieMessageComponent.visible = false;
  }

  acceptAllCookies() {
    LocalStorageService.acceptAllCookies();
    CookieMessageComponent.hide();
  }

  acceptEssentialCookies() {
    LocalStorageService.acceptEssentialCookies();
    CookieMessageComponent.hide();
  }

  getStorageService() {
    return LocalStorageService;
  }
}
