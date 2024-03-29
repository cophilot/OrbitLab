import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ScaleService {
  static currentScale = 1;
  static zoomStep = 0.05;

  static zoomOut() {
    if (ScaleService.currentScale <= this.zoomStep) {
      return;
    }
    ScaleService.currentScale -= this.zoomStep;
  }

  static zoomIn() {
    ScaleService.currentScale += this.zoomStep;
  }

  static scale(scale: number): number {
    return scale * ScaleService.currentScale;
  }
}
