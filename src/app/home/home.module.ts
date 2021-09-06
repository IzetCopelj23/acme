import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SepaPayComponent } from './sepa-pay/sepa-pay.component';
import { VisaPayComponent } from './visa-pay/visa-pay.component';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, CommonModule, TranslateModule, SharedModule, HomeRoutingModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  declarations: [HomeComponent, SepaPayComponent, VisaPayComponent],
})
export class HomeModule {}
