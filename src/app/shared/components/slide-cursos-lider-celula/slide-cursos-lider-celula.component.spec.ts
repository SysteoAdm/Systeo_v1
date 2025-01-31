import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideCursosLiderCelulaComponent } from './slide-cursos-lider-celula.component';

describe('SlideCursosLiderCelulaComponent', () => {
  let component: SlideCursosLiderCelulaComponent;
  let fixture: ComponentFixture<SlideCursosLiderCelulaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideCursosLiderCelulaComponent]
    });
    fixture = TestBed.createComponent(SlideCursosLiderCelulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
