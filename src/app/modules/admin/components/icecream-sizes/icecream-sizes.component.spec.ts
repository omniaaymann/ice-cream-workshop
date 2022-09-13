import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcecreamSizesComponent } from './icecream-sizes.component';

describe('IcecreamSizesComponent', () => {
  let component: IcecreamSizesComponent;
  let fixture: ComponentFixture<IcecreamSizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcecreamSizesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcecreamSizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
