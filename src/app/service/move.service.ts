import { Injectable } from '@angular/core';
import { ObjectService } from './object.service';

@Injectable({
  providedIn: 'root',
})
export class MoveService {
  static G = 6.6743e-11;

  private interval: any | null = null;

  isPlaying: boolean = false;

  speed: number = 1000;

  constructor(private objectService: ObjectService) {}

  setSpeed(speed: number) {
    this.speed = speed;
    if (this.isPlaying) {
      this.start();
    }
  }

  start() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = setInterval(() => {
      this.nextStep();
    }, this.speed);
    this.isPlaying = true;
  }

  nextStep() {
    this.objectService.getObjects().forEach((object) => {
      object.stageMove();
    });
    this.applyMoves();
  }

  prevStep() {
    this.objectService.getObjects().forEach((object) => {
      object.stageMove(false);
    });
    this.applyMoves(false);
  }

  applyMoves(forward: boolean = true) {
    this.objectService.getObjects().forEach((object) => {
      object.applyMove(forward);
    });
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.isPlaying = false;
  }
}
