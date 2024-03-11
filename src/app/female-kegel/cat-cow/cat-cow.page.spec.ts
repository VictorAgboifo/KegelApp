import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatCowPage } from './cat-cow.page';

describe('CatCowPage', () => {
  let component: CatCowPage;
  let fixture: ComponentFixture<CatCowPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CatCowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
