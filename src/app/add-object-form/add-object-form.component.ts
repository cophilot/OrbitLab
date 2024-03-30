import { Component, Output, EventEmitter } from '@angular/core';
import { ObjectService } from '../service/object.service';
import { VVector } from '../utils/VVector';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-object-form',
  templateUrl: './add-object-form.component.html',
  styleUrls: ['./add-object-form.component.sass'],
  imports: [CdkDrag, NgIf, FormsModule],
  standalone: true,
})
export class AddObjectFormComponent {
  name: string = '';
  startX: number = 0;
  startY: number = 0;
  vX: number = 0;
  vY: number = 0;
  radius: number = 10;
  weight: number = 10;
  color: string = 'red';

  wrongInput = false;

  @Output() closeForm = new EventEmitter();

  constructor(private objectService: ObjectService) {}

  add() {
    if (this.name === '' || this.radius <= 0 || this.color === '') {
      this.wrongInput = true;
      return;
    }
    this.objectService.addNewObject(
      this.name,
      this.startX,
      this.startY,
      this.radius,
      this.weight,
      new VVector(this.vX, this.vY),
      this.color
    );
    this.name = '';
    this.startX = 0;
    this.startY = 0;
    this.radius = 10;
    this.color = 'red';
    this.wrongInput = false;
  }

  close() {
    this.name = '';
    this.startX = 0;
    this.startY = 0;
    this.radius = 10;
    this.color = 'red';
    this.wrongInput = false;
    this.closeForm.emit();
  }
}
