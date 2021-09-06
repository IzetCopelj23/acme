import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SepaPayComponent } from './sepa-pay.component';

describe('SepaPayComponent', () => {
  let component: SepaPayComponent;
  let fixture: ComponentFixture<SepaPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SepaPayComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SepaPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
