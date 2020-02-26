import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasaporteComponent } from './pasaporte.component';

describe('PasaporteComponent', () => {
  let component: PasaporteComponent;
  let fixture: ComponentFixture<PasaporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasaporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasaporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
