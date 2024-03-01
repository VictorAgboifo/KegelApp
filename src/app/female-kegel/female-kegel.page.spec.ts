import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FemaleKegelPage } from './female-kegel.page';

describe('FemaleKegelPage', () => {
  let component: FemaleKegelPage;
  let fixture: ComponentFixture<FemaleKegelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FemaleKegelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
