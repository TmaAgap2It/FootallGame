import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEmailComponent } from './new-email.component';

describe('NewEmailComponent', () => {
  let component: NewEmailComponent;
  let fixture: ComponentFixture<NewEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
