import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurusosAvancadoComponent } from './curusos-avancado.component';

describe('CurusosAvancadoComponent', () => {
  let component: CurusosAvancadoComponent;
  let fixture: ComponentFixture<CurusosAvancadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurusosAvancadoComponent]
    });
    fixture = TestBed.createComponent(CurusosAvancadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
