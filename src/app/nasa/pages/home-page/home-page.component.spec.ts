import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('HomePageComponent should be create', () => {
    expect(component).toBeTruthy();
  });

  it('HomePageComponent should render router-outlet', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
  });
  it('HomePageComponent should render app-log-atmira', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-log-atmira')).toBeTruthy();
  });
  
});
