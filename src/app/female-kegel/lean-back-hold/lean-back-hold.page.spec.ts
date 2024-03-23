import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeanBackHoldPage } from './lean-back-hold.page';

describe('LeanBackHoldPage', () => {
  let component: LeanBackHoldPage;
  let fixture: ComponentFixture<LeanBackHoldPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LeanBackHoldPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
