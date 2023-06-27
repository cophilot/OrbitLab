import { Component } from '@angular/core';
import { MoveService } from '../service/move.service';
import { ObjectService } from '../service/object.service';

@Component({
  selector: 'app-play-bar',
  templateUrl: './play-bar.component.html',
  styleUrls: ['./play-bar.component.sass'],
})
export class PlayBarComponent {
  isPlaying: boolean = false;

  constructor(
    private moveService: MoveService,
    private objectService: ObjectService
  ) {}

  togglePlayPause() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  play() {
    this.isPlaying = true;
    this.moveService.start();
  }

  pause() {
    this.isPlaying = false;
    this.moveService.stop();
  }

  reset() {
    this.objectService.reset();
  }
}
