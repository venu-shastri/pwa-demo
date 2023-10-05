import {Component,Inject} from "@angular/core"
import { IEmiCalculatorInputType } from "../../models/emiInput.contract";
import { EmiResultModel } from "../../models/emiResult.model";
import { IEmiCalculatorService } from "../../services/emiCalculator.service.contract";

@Component({
  templateUrl:"emiCalculatorGod.component.html",
selector:'emi-calculator'}) // <emi-calculator>
export class  EmiCalculatorGodComponent{

  emiCalculationResult:EmiResultModel;
    serviceObj:IEmiCalculatorService
    constructor(@Inject("emiCalculatorToken") serviceRef:IEmiCalculatorService){
      this.serviceObj=serviceRef;
        this.emiCalculationResult=new EmiResultModel(0,0,0);
    }
  onInputChanged(payLoad:IEmiCalculatorInputType){
    console.log(payLoad);
    this.emiCalculationResult=this.serviceObj.calculateEmi(payLoad.amount,payLoad.tenure,payLoad.ir);

  }

}
