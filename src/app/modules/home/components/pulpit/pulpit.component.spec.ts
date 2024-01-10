import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulpitComponent } from './pulpit.component';

describe('PulpitComponent', () => {
  let component: PulpitComponent;
  let fixture: ComponentFixture<PulpitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PulpitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PulpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
