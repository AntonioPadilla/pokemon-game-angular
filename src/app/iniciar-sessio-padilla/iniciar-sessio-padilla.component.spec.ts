import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciarSessioPadillaComponent } from './iniciar-sessio-padilla.component';

describe('IniciarSessioPadillaComponent', () => {
  let component: IniciarSessioPadillaComponent;
  let fixture: ComponentFixture<IniciarSessioPadillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciarSessioPadillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciarSessioPadillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
