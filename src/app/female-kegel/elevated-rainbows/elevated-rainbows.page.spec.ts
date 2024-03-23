import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElevatedRainbowsPage } from './elevated-rainbows.page';

describe('ElevatedRainbowsPage', () => {
  let component: ElevatedRainbowsPage;
  let fixture: ComponentFixture<ElevatedRainbowsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ElevatedRainbowsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
