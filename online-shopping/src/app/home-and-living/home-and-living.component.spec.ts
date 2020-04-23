import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAndLivingComponent } from './home-and-living.component';

describe('HomeAndLivingComponent', () => {
  let component: HomeAndLivingComponent;
  let fixture: ComponentFixture<HomeAndLivingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAndLivingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAndLivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
