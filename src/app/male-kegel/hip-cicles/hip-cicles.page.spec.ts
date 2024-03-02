import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HipCiclesPage } from './hip-cicles.page';

describe('HipCiclesPage', () => {
  let component: HipCiclesPage;
  let fixture: ComponentFixture<HipCiclesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HipCiclesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
