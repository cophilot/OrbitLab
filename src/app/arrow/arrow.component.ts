import { Component, Input } from '@angular/core';
import Vector from 'src/types/Vector';
import { SettingsService } from '../service/settings.service';
import { ScaleService } from '../service/scale.service';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.sass'],
})
export class ArrowComponent {
  @Input() startX: number = 0;
  @Input() startY: number = 0;
  @Input() endX: number = 0;
  @Input() endY: number = 0;

  angleBefore = 0;

  getWidth(): number {
    const length = Math.sqrt(
      Math.pow(this.endX - this.startX, 2) +
        Math.pow(this.endY - this.startY, 2)
    );
    return this.scale(Math.sqrt(0.5) * length);
  }

  getAngle(): number {
    const v = new Vector(this.startX, this.startY, this.endX, this.endY);
    let a = v.deg(new Vector(0, 0, -10, 10));
    // convert to degrees
    //a = (a * 180) / Math.PI;

    if (a >= 360) {
      a -= 360;
    }
    if (a < 0) {
      a += 360;
    }

    return a;
  }

  getScreenCoordinates(): number[] {
    const x = window.innerWidth / 2 + this.scale(this.endX);
    const y = window.innerHeight / 2 - this.scale(this.endY);
    return [x, y];
  }

  isVisible(): boolean {
    return SettingsService.isVelocityArrowVisible();
  }

  scale(scale: number) {
    return ScaleService.scale(scale);
  }
}
