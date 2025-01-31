import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideCursoCasadosPraSempreComponent } from './slide-curso-casados-pra-sempre.component';

describe('SlideCursoCasadosPraSempreComponent', () => {
  let component: SlideCursoCasadosPraSempreComponent;
  let fixture: ComponentFixture<SlideCursoCasadosPraSempreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideCursoCasadosPraSempreComponent]
    });
    fixture = TestBed.createComponent(SlideCursoCasadosPraSempreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
