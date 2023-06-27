import { Component, Input } from '@angular/core';

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

  getPath(): string {
    let x1 = 0;
    let x2 = 0;
    let y1 = 0;
    let y2 = 0;

    if (this.startX <= this.endX && this.startY <= this.endY) {
      y1 = this.getHeight();
      x2 = this.getWidth();
    }
    if (this.startX <= this.endX && this.startY >= this.endY) {
      y2 = this.getHeight();
      x2 = this.getWidth();
    }
    if (this.startX >= this.endX && this.startY >= this.endY) {
      y2 = this.getHeight();
      x1 = this.getWidth();
    }
    if (this.startX >= this.endX && this.startY <= this.endY) {
      y1 = this.getHeight();
      x1 = this.getWidth();
    }

    return `M ${x1} ${y1} L ${x2} ${y2}`;
  }

  getHeadPath(): string[] {
    if (this.startX <= this.endX && this.startY <= this.endY) {
      return [
        `M ${this.getWidth()} ${0} L ${this.getWidth()} ${15}`,
        `M ${this.getWidth() - 15} ${0} L ${this.getWidth()} ${0}`,
      ];
    }
    if (this.startX <= this.endX && this.startY >= this.endY) {
      return [
        `M ${this.getWidth()} ${
          this.getHeight() - 15
        } L ${this.getWidth()} ${this.getHeight()}`,
        `M ${
          this.getWidth() - 15
        } ${this.getHeight()} L ${this.getWidth()} ${this.getHeight()}`,
      ];
    }
    if (this.startX >= this.endX && this.startY >= this.endY) {
      return [
        `M ${0} ${this.getHeight() - 15} L ${0} ${this.getHeight()}`,
        `M ${0} ${this.getHeight()} L ${15} ${this.getHeight()}`,
      ];
    }
    if (this.startX >= this.endX && this.startY <= this.endY) {
      return [`M ${0} ${0} L ${0} ${15}`, `M ${0} ${0} L ${15} ${0}`];
    }
    return [];
  }

  getWidth(): number {
    let width = Math.abs(this.startX - this.endX);
    if (width < 2) {
      return 2;
    }
    return width;
  }

  getHeight(): number {
    let height = Math.abs(this.startY - this.endY);
    if (height < 2) {
      return 2;
    }
    return height;
  }

  getScreenPosition(): number[] {
    let top = Math.max(this.startY, this.endY);
    let left = Math.min(this.startX, this.endX);

    top = window.innerHeight / 2 - top;
    left += window.innerWidth / 2;
    return [top, left];
  }
}
