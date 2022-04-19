import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NasaCardComponent } from './nasa-card.component';

describe('NasaCardComponent', () => {
  let component: NasaCardComponent;
  let fixture: ComponentFixture<NasaCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NasaCardComponent],
      imports:[RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('NasaCardComponent be should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('NasaCardComponent should have a photo', () => {
    component.photo = {
      date: new Date(),
      explanation: '',
      hdurl: '',
      media_type: '',
      service_version: '',
      title: '',
      url: ''
    };
    expect(component.photo).toBeTruthy();
  });
});
