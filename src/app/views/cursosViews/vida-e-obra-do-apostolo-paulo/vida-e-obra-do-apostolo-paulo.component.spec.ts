import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidaEObraDoApostoloPauloComponent } from './vida-e-obra-do-apostolo-paulo.component';

describe('VidaEObraDoApostoloPauloComponent', () => {
  let component: VidaEObraDoApostoloPauloComponent;
  let fixture: ComponentFixture<VidaEObraDoApostoloPauloComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VidaEObraDoApostoloPauloComponent]
    });
    fixture = TestBed.createComponent(VidaEObraDoApostoloPauloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
