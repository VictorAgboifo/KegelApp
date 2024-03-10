import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginPage } from './login.page';

import { IonicModule } from '@ionic/angular';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async(() => {

//delete if issues come
    await TestBed.configureTestingModule({
      declarations: [LoginPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();  //end of delete if issues come

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});










