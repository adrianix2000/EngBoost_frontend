import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSessionSnackBarComponent } from './delete-session-snack-bar.component';

describe('DeleteSessionSnackBarComponent', () => {
  let component: DeleteSessionSnackBarComponent;
  let fixture: ComponentFixture<DeleteSessionSnackBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSessionSnackBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSessionSnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
