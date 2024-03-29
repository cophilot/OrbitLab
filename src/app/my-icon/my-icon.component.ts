import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

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

  visibleDescription: boolean = false;
  descriptionX: number = 0;
  descriptionY: number = 0;

  showDescription(event: MouseEvent) {
    //this.visibleDescription = true;
    // get the position of the mouse
    this.descriptionX = event.clientX;
    this.descriptionY = event.clientY;
  }

  hideDescription() {
    this.visibleDescription = false;
  }
}
