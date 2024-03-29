import { Component } from '@angular/core';
import { MoveService } from '../service/move.service';
import { ObjectService } from '../service/object.service';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { NgIf } from '@angular/common';
import { MyIconComponent } from '../my-icon/my-icon.component';
import { ScaleService } from '../service/scale.service';

@Component({
  selector: 'app-play-bar',
  templateUrl: './play-bar.component.html',
  styleUrls: ['./play-bar.component.sass'],
  standalone: true,
  imports: [CdkDrag, NgIf, MyIconComponent],
})
export class PlayBarComponent {
  playSpeed: number = 1;
  isVisible: boolean = true;

  constructor(
    private moveService: MoveService,
    private objectService: ObjectService
  ) {}

  nextStep() {
    this.moveService.nextStep();
  }
  prevStep() {
    this.moveService.prevStep();
  }

  toggleSpeed() {
    switch (this.playSpeed) {
      case 1:
        this.playSpeed = 2;
        break;
      case 2:
        this.playSpeed = 5;
        break;
      case 5:
        this.playSpeed = 10;
        break;
      case 10:
        this.playSpeed = 0.5;
        break;
      case 0.5:
        this.playSpeed = 1;
        break;
    }

    this.moveService.setSpeed(1000 / this.playSpeed);
  }

  togglePlayPause() {
    if (this.isPlaying()) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    this.moveService.start();
  }

  pause() {
    this.moveService.stop();
  }

  reset() {
    this.pause();
    this.objectService.reset();
  }

  isPlaying() {
    return this.moveService.isPlaying;
  }

  zoomOut() {
    ScaleService.zoomOut();
  }

  zoomIn() {
    ScaleService.zoomIn();
  }
}
