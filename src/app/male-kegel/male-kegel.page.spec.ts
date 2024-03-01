import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaleKegelPage } from './male-kegel.page';

describe('MaleKegelPage', () => {
  let component: MaleKegelPage;
  let fixture: ComponentFixture<MaleKegelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MaleKegelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
