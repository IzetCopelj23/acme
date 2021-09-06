import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcmeService {

  constructor(private http:HttpClient) { 
  }

  getPaymentDetails(){
    return this.http.get("/paymentDetails")
  }

  getPaymentDetailsByMethod(method : string){
    return this.http.get(`/paymentMethods/?name=${method}`);
  }
}
