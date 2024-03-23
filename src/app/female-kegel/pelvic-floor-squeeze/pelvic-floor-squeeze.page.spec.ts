import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PelvicFloorSqueezePage } from './pelvic-floor-squeeze.page';

describe('PelvicFloorSqueezePage', () => {
  let component: PelvicFloorSqueezePage;
  let fixture: ComponentFixture<PelvicFloorSqueezePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PelvicFloorSqueezePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
