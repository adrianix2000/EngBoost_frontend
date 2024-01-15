import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSessionDialogComponent } from './add-session-dialog.component';

describe('AddSessionDialogComponent', () => {
  let component: AddSessionDialogComponent;
  let fixture: ComponentFixture<AddSessionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSessionDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSessionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
