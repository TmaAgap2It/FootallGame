import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailListItemComponent } from './mail-list-item.component';

describe('MailListItemComponent', () => {
  let component: MailListItemComponent;
  let fixture: ComponentFixture<MailListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailListItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
