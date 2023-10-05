
import { EmiResultModel } from "../models/emiResult.model";


export interface IEmiCalculatorService{
   calculateEmi(amount:number,tenure:number,ir:number):EmiResultModel;
}
