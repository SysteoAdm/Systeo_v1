import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideCursoLiderDeCelulaComponent } from './slide-curso-lider-de-celula.component';

describe('SlideCursoLiderDeCelulaComponent', () => {
  let component: SlideCursoLiderDeCelulaComponent;
  let fixture: ComponentFixture<SlideCursoLiderDeCelulaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideCursoLiderDeCelulaComponent]
    });
    fixture = TestBed.createComponent(SlideCursoLiderDeCelulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
