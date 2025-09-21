import { Component, inject } from '@angular/core';
import { Header } from "./header/header";
import { InvesmentForm } from "./invesment-form/invesment-form";
import { InvestmentCalculator } from './services/investment-calculator';
import { InvestmentResults } from "./investment-results/investment-results";

@Component({
  selector: 'app-root',
  imports: [Header, InvesmentForm, InvestmentResults],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'Investment-Calculator';
  investmentCalculatorService = inject(InvestmentCalculator);
}
