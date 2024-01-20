import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedpulpitComponent } from './sharedpulpit.component';

describe('SharedpulpitComponent', () => {
  let component: SharedpulpitComponent;
  let fixture: ComponentFixture<SharedpulpitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedpulpitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedpulpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
