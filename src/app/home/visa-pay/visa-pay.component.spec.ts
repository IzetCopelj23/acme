import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisaPayComponent } from './visa-pay.component';

describe('VisaPayComponent', () => {
  let component: VisaPayComponent;
  let fixture: ComponentFixture<VisaPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisaPayComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisaPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
