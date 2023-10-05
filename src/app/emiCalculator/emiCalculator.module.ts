import { NgModule } from "@angular/core"
import { EmiCalculatorGodComponent } from "./components/emiCalculatorGodComponent/emiCalculatorGod.component";
import { EmiInputComponent } from './components/emi-input/emi-input.component';
import { EmiSummaryResultComponent } from './components/emi-summary-result/emi-summary-result.component'
import { EmiCalculatorService } from "./services/emiCalculator.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations:[EmiCalculatorGodComponent, EmiInputComponent, EmiSummaryResultComponent],
  exports:[EmiCalculatorGodComponent],
  imports:[FormsModule,ReactiveFormsModule],
  providers:[
    { provide:"emiCalculatorToken",useClass:EmiCalculatorService}
  ]

})
export class EmiCalculatorModule
{

}
