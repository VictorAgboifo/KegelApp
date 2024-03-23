import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BirdDogLPage } from './bird-dog-l.page';

describe('BirdDogLPage', () => {
  let component: BirdDogLPage;
  let fixture: ComponentFixture<BirdDogLPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BirdDogLPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
