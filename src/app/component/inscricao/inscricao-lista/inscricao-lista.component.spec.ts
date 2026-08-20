import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscricaoListaComponent } from './inscricao-lista.component';

describe('InscricaoListaComponent', () => {
  let component: InscricaoListaComponent;
  let fixture: ComponentFixture<InscricaoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscricaoListaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InscricaoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
