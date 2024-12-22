import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ObjectService } from '../service/object.service';
import { VVector } from '../utils/VVector';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Obj } from '../utils/Obj';

@Component({
  selector: 'app-add-object-form',
  templateUrl: './add-object-form.component.html',
  styleUrls: ['./add-object-form.component.sass'],
  imports: [CdkDrag, NgIf, FormsModule],
  standalone: true,
})
export class AddObjectFormComponent {
  @Input() editObject: Obj | undefined;

  heading = 'Add Object';

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

  ngOnInit() {
    if (!this.editObject) {
      return;
    }

    this.name = this.editObject.name;
    this.startX = this.editObject.x;
    this.startY = this.editObject.y;
    this.vX = this.editObject.velocity.x;
    this.vY = this.editObject.velocity.y;
    this.radius = this.editObject.radius;
    this.weight = this.editObject.weight;
    this.color = this.editObject.color;
    this.heading = 'Edit Object';
  }

  add() {
    if (this.name === '' || this.radius <= 0 || this.color === '') {
      this.wrongInput = true;
      return;
    }

    if (this.editObject) {
      this.objectService.editObject(
        this.name,
        this.startX,
        this.startY,
        this.radius,
        this.weight,
        new VVector(this.vX, this.vY),
        this.color
      );
    } else {
      this.objectService.addNewObject(
        this.name,
        this.startX,
        this.startY,
        this.radius,
        this.weight,
        new VVector(this.vX, this.vY),
        this.color
      );
    }

    this.name = '';
    this.startX = 0;
    this.startY = 0;
    this.radius = 10;
    this.color = 'red';
    this.wrongInput = false;
    this.editObject = undefined;
    this.closeForm.emit();
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
