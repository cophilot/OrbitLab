import { Component, Input } from '@angular/core';
import { Obj } from '../utils/Obj';

@Component({
  selector: 'app-object',
  templateUrl: './object.component.html',
  styleUrls: ['./object.component.sass'],
})
export class ObjectComponent {
  @Input() object!: Obj;
}
