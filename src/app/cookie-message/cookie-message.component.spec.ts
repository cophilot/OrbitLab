import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieMessageComponent } from './cookie-message.component';

describe('CookieMessageComponent', () => {
  let component: CookieMessageComponent;
  let fixture: ComponentFixture<CookieMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookieMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CookieMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
