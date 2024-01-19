import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyWordDialogComponent } from './modify-word-dialog.component';

describe('ModifyWordDialogComponent', () => {
  let component: ModifyWordDialogComponent;
  let fixture: ComponentFixture<ModifyWordDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyWordDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyWordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
