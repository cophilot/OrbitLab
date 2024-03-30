import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { InfoBoxComponent } from '../info-box/info-box.component';

@Component({
  selector: 'app-my-icon',
  templateUrl: './my-icon.component.html',
  styleUrls: ['./my-icon.component.scss'],
  standalone: true,
  imports: [NgIf],
})
export class MyIconComponent {
  @Input() name: string = '';
  @Input() size: number = 26;
  @Input() description: string = '';
  @Input() border: boolean = false;
  @Input() textIcon: boolean = false;

  showDescription(event: MouseEvent) {
    InfoBoxComponent.show(this.description);
  }

  hideDescription() {
    InfoBoxComponent.hide();
  }
}
