import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcecreamFlavorComponent } from './icecream-flavor.component';

describe('IcecreamFlavorComponent', () => {
  let component: IcecreamFlavorComponent;
  let fixture: ComponentFixture<IcecreamFlavorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IcecreamFlavorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IcecreamFlavorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
