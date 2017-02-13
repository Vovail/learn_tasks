import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuotesComponent } from './quotes/quotes.component';
import {QuotesService} from "./quotes.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [QuotesComponent],
  providers: [QuotesService],
  exports: [QuotesComponent]
})
export class QuotesModule { }
