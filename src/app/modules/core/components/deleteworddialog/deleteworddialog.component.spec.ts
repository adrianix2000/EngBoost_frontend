import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteworddialogComponent } from './deleteworddialog.component';

describe('DeleteworddialogComponent', () => {
  let component: DeleteworddialogComponent;
  let fixture: ComponentFixture<DeleteworddialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteworddialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteworddialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
