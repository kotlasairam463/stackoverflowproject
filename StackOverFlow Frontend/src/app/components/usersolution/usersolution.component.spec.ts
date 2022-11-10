import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersolutionComponent } from './usersolution.component';

describe('UsersolutionComponent', () => {
  let component: UsersolutionComponent;
  let fixture: ComponentFixture<UsersolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
