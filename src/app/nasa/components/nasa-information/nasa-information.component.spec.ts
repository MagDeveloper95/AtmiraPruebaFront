import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NasaInformationComponent } from './nasa-information.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NasaInformationComponent', () => {
  let component: NasaInformationComponent;
  let fixture: ComponentFixture<NasaInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasaInformationComponent ],
      imports:[RouterTestingModule]
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
