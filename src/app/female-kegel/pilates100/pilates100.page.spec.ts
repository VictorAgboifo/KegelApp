import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pilates100Page } from './pilates100.page';

describe('Pilates100Page', () => {
  let component: Pilates100Page;
  let fixture: ComponentFixture<Pilates100Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Pilates100Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
