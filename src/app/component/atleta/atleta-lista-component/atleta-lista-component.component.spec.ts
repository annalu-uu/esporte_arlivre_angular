import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtletaListaComponentComponent } from './atleta-lista-component.component';

describe('AtletaListaComponentComponent', () => {
  let component: AtletaListaComponentComponent;
  let fixture: ComponentFixture<AtletaListaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtletaListaComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtletaListaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
