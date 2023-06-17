import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectMetaDataComponent } from './object-meta-data.component';

describe('ObjectMetaDataComponent', () => {
  let component: ObjectMetaDataComponent;
  let fixture: ComponentFixture<ObjectMetaDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectMetaDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectMetaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
