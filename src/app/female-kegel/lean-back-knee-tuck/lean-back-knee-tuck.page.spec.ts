import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeanBackKneeTuckPage } from './lean-back-knee-tuck.page';

describe('LeanBackKneeTuckPage', () => {
  let component: LeanBackKneeTuckPage;
  let fixture: ComponentFixture<LeanBackKneeTuckPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LeanBackKneeTuckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
