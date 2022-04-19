import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NasaInformationComponent } from './nasa-information.component';

describe('NasaInformationComponent', () => {
  let component: NasaInformationComponent;
  let fixture: ComponentFixture<NasaInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasaInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
