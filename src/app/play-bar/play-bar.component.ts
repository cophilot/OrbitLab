import { Component, HostListener } from '@angular/core';
import { MoveService } from '../service/move.service';
import { ObjectService } from '../service/object.service';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { NgIf } from '@angular/common';
import { MyIconComponent } from '../my-icon/my-icon.component';
import { ScaleService } from '../service/scale.service';
import { Router } from '@angular/router';

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
    private objectService: ObjectService,
    private router: Router
  ) {}

  nextStep() {
    this.pauseIfPlaying();
    this.moveService.nextStep();
  }
  prevStep() {
    this.pauseIfPlaying();
    this.moveService.prevStep();
  }

  pauseIfPlaying() {
    if (this.isPlaying()) {
      this.pause();
    }
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

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // Handle keyboard events here
    switch (event.key) {
      case 'ArrowRight':
        this.nextStep();
        break;
      case 'ArrowLeft':
        this.prevStep();
        break;
      case ' ':
        this.togglePlayPause();
        break;
      case 'Enter':
        this.toggleSpeed();
        break;
      case 'ArrowUp':
        this.zoomIn();
        break;
      case 'ArrowDown':
        this.zoomOut();
        break;
    }
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

  zoomOut(fast = false) {
    ScaleService.zoomOut(fast);
  }

  zoomIn(fast = false) {
    ScaleService.zoomIn(fast);
  }

  resetZoom() {
    ScaleService.resetZoom();
  }

  getZoomFactor() {
    return ScaleService.currentScale;
  }

  goToSettings() {
    this.router.navigate(['settings']);
  }
}
