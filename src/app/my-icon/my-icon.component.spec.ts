import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyIconComponent } from './my-icon.component';

describe('MyIconComponent', () => {
  let component: MyIconComponent;
  let fixture: ComponentFixture<MyIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyIconComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
