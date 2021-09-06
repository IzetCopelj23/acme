import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AcmeService } from '../acme.service';

@Component({
  selector: 'app-visa-pay',
  templateUrl: './visa-pay.component.html',
  styleUrls: ['./visa-pay.component.scss'],
})
export class VisaPayComponent implements OnInit {
 form!: FormGroup;
 fields: any[] = [];
  constructor(
    private fb: FormBuilder,
    private acmeService: AcmeService
  ) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('paymentDetails')) {
      this.fields = JSON.parse(sessionStorage.getItem('paymentDetails')).fields;
    }

    let tempFields: any= {};

    this.fields.forEach((x: any) => {
      tempFields[x.name] = [ '', this.getValidations(x.validation)];
    });

    this.form = this.fb.group( tempFields)
  }

  getValidations(v: any[]): any[] {
    let toReturn: any[] =[];

    v.forEach((x: any) => {
      if (x.name === 'required') {
        toReturn.push(Validators.required);
      }

      if (x.name === 'minLength') {
        toReturn.push(Validators.minLength(x.value));
      }

      if (x.name === 'maxLength') {
        toReturn.push(Validators.maxLength(x.value));
      }
      
    });

    return toReturn;
  }

 
}
