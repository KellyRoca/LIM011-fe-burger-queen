import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';

fdescribe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería getArrayOfExtras ser vacío cuando el array de extras seleccionados es vacío', () => {
    const extrasSelected = [];
    component.getArrayOfExtras(extrasSelected);

    expect(component.arrExtras).toEqual([]);
    expect(component.priceExtras).toEqual(0);
  });

  it('debería getArrayOfExtras tener 1 elememento cuando el array de extras seleccionados es 1 y un priceExtras igual a 1', () => {
    const expectExtrasSelected = [
      {
        id: '123e', data: {
          category: 'extras',
          // tslint:disable-next-line: max-line-length
          image: 'https://firebasestorage.googleapis.com/v0/b/burgerqueen-ee96d.appspot.com/o/huevo.png?alt=media&token=2bd203e1-b8ec-49ee-bcd0-2673a6904535',
          name: 'Huevo',
          popup: false,
          price: 1,
        }

      }
    ];

    const extrasSelected = expectExtrasSelected;
    component.getArrayOfExtras(extrasSelected);

    expect(component.arrExtras).toEqual(expectExtrasSelected);
    expect(component.priceExtras).toEqual(1);
  });
});
