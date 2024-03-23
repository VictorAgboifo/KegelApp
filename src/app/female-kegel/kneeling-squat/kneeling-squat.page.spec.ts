import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KneelingSquatPage } from './kneeling-squat.page';

describe('KneelingSquatPage', () => {
  let component: KneelingSquatPage;
  let fixture: ComponentFixture<KneelingSquatPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(KneelingSquatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
