import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AcmeService } from './acme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading = false;
  paymentDetails: any;
 
  constructor(private acmeService: AcmeService, private route: Router) {}

  ngOnInit() {
    this.isLoading = true;
    this.acmeService
      .getPaymentDetails()
      .subscribe((r: any) => {
        this.paymentDetails = r;
        this.isLoading = false;
      });
  }

  onMethodSelection(link: any) {
    this.acmeService
      .getPaymentDetailsByMethod(link)
      .subscribe((r: any) => {
        sessionStorage.setItem('paymentDetails', JSON.stringify(r[0]));
        this.route.navigate([`/${link}`]);
      });
  }
  
}
