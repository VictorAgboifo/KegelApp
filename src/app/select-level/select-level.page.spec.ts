import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectLevelPage } from './select-level.page';

describe('SelectLevelPage', () => {
  let component: SelectLevelPage;
  let fixture: ComponentFixture<SelectLevelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelectLevelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
