import { computed, Injectable, signal } from '@angular/core';
import { InvestmentResponseModel } from '../models/investment-response-model';
import { InvestmentRequestModel } from '../models/investment-request-model';

@Injectable({
  providedIn: 'root',
})
export class InvestmentCalculator {
  // Use the below code as a help
  // e.g., integrate it into a service or component
  // You may need to tweak it, depending on where and how you use it
  #annualData = signal<InvestmentResponseModel[]>([]);
  anuualData = computed(() => this.#annualData());

  calculateInvestmentResults(invesment: InvestmentRequestModel) {
    const newAnnualData = [];
    let investmentValue = invesment.initial;

    for (let i = 0; i < invesment.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (invesment.expected / 100);
      investmentValue += interestEarnedInYear + invesment.annual;
      const totalInterest =
        investmentValue - invesment.annual * year - invesment.initial;
      newAnnualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: invesment.annual,
        totalInterest: totalInterest,
        totalAmountInvested: invesment.initial + invesment.annual * year,
      });
    }

    this.#annualData.set(newAnnualData);
  }
}
