import { Inject, Injectable } from "@angular/core";
import { EmiResultModel } from "../models/emiResult.model";
import { IEmiCalculatorService } from "./emiCalculator.service.contract";

@Injectable()
export class EmiCalculatorService implements IEmiCalculatorService{
  constructor(@Inject("logger") public loggerRef:ILogWriter){

  }
  calculateEmi(amount:number,tenure:number,ir:number):EmiResultModel{
    this.loggerRef.writeLog(`Caluclate Emi Called ${amount},${tenure},${ir}`);
       return new EmiResultModel(Math.random()*10,Math.random()*10,Math.random()*10);
   }
}
