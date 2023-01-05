import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailNavBarComponent } from './mail-nav-bar.component';

describe('MailNavBarComponent', () => {
  let component: MailNavBarComponent;
  let fixture: ComponentFixture<MailNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailNavBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
