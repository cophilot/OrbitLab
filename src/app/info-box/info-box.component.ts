import { Component } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss'],
})
export class InfoBoxComponent {
  static text = '';
  static visible = false;

  static show(text: string) {
    InfoBoxComponent.text = text;
    InfoBoxComponent.visible = true;
  }

  static hide() {
    InfoBoxComponent.visible = false;
  }

  isVisible() {
    return InfoBoxComponent.visible && InfoBoxComponent.text.trim().length > 0;
  }

  getText() {
    return InfoBoxComponent.text;
  }
}
