import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcecreamTypesComponent } from './icecream-types.component';

describe('IcecreamTypesComponent', () => {
  let component: IcecreamTypesComponent;
  let fixture: ComponentFixture<IcecreamTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcecreamTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcecreamTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
