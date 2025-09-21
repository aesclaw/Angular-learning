import { Component, input } from '@angular/core';
import { InvestmentResponseModel } from '../models/investment-response-model';
import { CurrencyPipe } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  imports: [NgFor, CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.scss'
})
export class InvestmentResults {
  investmentResults = input.required<InvestmentResponseModel[]>();
}
