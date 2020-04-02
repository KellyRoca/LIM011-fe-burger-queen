import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement} from '@angular/core';
import { HeaderComponent } from './header.component';

fdescribe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let a: HTMLElement;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    a = fixture.nativeElement.querySelector('a');
  });

  it('debería crearse el componente', () => {
    expect(component).toBeTruthy();
  })

  it('el título del header debe ser burger queen', () => {
    fixture.detectChanges();
    expect(a.textContent).toContain(component.title);
  })

  it('no hay etiqueta a en el DOM despues de createComponent()', () => {
    expect(a.textContent).toEqual('');
  });
});
