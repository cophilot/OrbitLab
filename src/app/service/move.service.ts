import { Injectable } from '@angular/core';
import { ObjectService } from './object.service';
import { Obj } from '../utils/Obj';
import { SettingsService } from './settings.service';
import { CollisionMode } from 'src/types/CollisionMode';

@Injectable({
  providedIn: 'root',
})
export class MoveService {
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
      this.objectService.getObjects().forEach((object2) => {
        if (object.id !== object2.id) {
          object.calculateGravityForce(object2);
        }
      });
      object.stageMove();
    });
    this.applyMoves();
    this.checkCollision();
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

  checkCollision() {
    const objs = this.objectService.getObjects();
    for (let i = 0; i < objs.length; i++) {
      for (let j = i + 1; j < objs.length; j++) {
        if (objs[i].isColliding(objs[j])) {
          this.handleCollision(objs[i], objs[j]);
        }
      }
    }
  }

  handleCollision(object1: Obj, object2: Obj) {
    if (SettingsService.getCollisionMode() === CollisionMode.IGNORE) {
      return;
    }
    if (SettingsService.getCollisionMode() === CollisionMode.END) {
      alert('Collision detected: ' + object1.name + ' and ' + object2.name);
      this.stop();
      return;
    }
  }
}
