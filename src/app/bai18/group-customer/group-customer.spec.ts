import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupCustomer } from './group-customer';

describe('GroupCustomer', () => {
  let component: GroupCustomer;
  let fixture: ComponentFixture<GroupCustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupCustomer],
    }).compileComponents();

    fixture = TestBed.createComponent(GroupCustomer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
