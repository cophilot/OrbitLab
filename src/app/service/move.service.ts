import { Injectable } from '@angular/core';
import { ObjectService } from './object.service';

@Injectable({
  providedIn: 'root',
})
export class MoveService {
  private interval: any | null = null;

  intervalTime: number = 100;

  constructor(private objectService: ObjectService) {}

  start() {
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = setInterval(() => {
      this.objectService.getObjects().forEach((object) => {
        object.move();
      });
    }, this.intervalTime);
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
