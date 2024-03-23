import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BirdDogRPage } from './bird-dog-r.page';

describe('BirdDogRPage', () => {
  let component: BirdDogRPage;
  let fixture: ComponentFixture<BirdDogRPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BirdDogRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
