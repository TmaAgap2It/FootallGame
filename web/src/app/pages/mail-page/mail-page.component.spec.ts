import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailPageComponent } from './mail-page.component';

describe('MailPageComponent', () => {
  let component: MailPageComponent;
  let fixture: ComponentFixture<MailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
