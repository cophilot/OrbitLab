import { Injectable } from '@angular/core';
import { CoordinateSystemComponent } from '../coordinate-system/coordinate-system.component';

@Injectable({
  providedIn: 'root',
})
export class ScaleService {
  static currentScale = 1;
  static zoomStep = 0.05;
  static fastFactor = 5;

  static zoomOut(fast = false) {
    const step = fast ? this.zoomStep * this.fastFactor : this.zoomStep;
    if (ScaleService.currentScale <= step) {
      return;
    }
    ScaleService.currentScale -= step;
    CoordinateSystemComponent.render();
  }

  static zoomIn(fast = false) {
    const step = fast ? this.zoomStep * this.fastFactor : this.zoomStep;
    ScaleService.currentScale += step;
    CoordinateSystemComponent.render();
  }

  static scale(scale: number): number {
    return scale * ScaleService.currentScale;
  }
}
