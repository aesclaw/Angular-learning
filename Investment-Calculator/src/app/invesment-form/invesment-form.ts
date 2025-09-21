import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentCalculator } from '../services/investment-calculator';

@Component({
  selector: 'app-invesment-form',
  imports: [FormsModule],
  templateUrl: './invesment-form.html',
  styleUrl: './invesment-form.scss',
})
export class InvesmentForm{
  initialInvest!: number;
  annualInvest!: number;
  expectedReturn!: number;
  duration!: number;
  private investmentCalculatorService = inject(InvestmentCalculator);

  onSubmit() {
    console.log(this.initialInvest);
    console.log(this.annualInvest);
    console.log(this.expectedReturn);
    console.log(this.duration);

    this.investmentCalculatorService.calculateInvestmentResults(
      {
        initial: this.initialInvest,
        annual: this.annualInvest,
        expected: this.expectedReturn,
        duration: this.duration
      }
    )
  }
}
