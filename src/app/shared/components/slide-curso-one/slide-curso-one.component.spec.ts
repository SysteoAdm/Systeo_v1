import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideCursoOneComponent } from './slide-curso-one.component';

describe('SlideCursoOneComponent', () => {
  let component: SlideCursoOneComponent;
  let fixture: ComponentFixture<SlideCursoOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideCursoOneComponent]
    });
    fixture = TestBed.createComponent(SlideCursoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
