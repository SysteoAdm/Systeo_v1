import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideCursosEscolaBiblicaComponent } from './slide-cursos-escola-biblica.component';

describe('SlideCursosEscolaBiblicaComponent', () => {
  let component: SlideCursosEscolaBiblicaComponent;
  let fixture: ComponentFixture<SlideCursosEscolaBiblicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideCursosEscolaBiblicaComponent]
    });
    fixture = TestBed.createComponent(SlideCursosEscolaBiblicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
