import { Component, OnInit ,EventEmitter, Output} from '@angular/core';
import { IEmiCalculatorInputType } from '../../models/emiInput.contract';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-emi-input',
  templateUrl: './emi-input.component.html',
  styleUrls: ['./emi-input.component.css']
})
export class EmiInputComponent implements OnInit {

  ngOnInit(): void {

  }
  @Output()
 inputChangedEvent=new EventEmitter<IEmiCalculatorInputType>();

calculate(inputForm:FormGroup){
  console.log(inputForm);
  let payload:IEmiCalculatorInputType =inputForm.value;
  this.inputChangedEvent.emit(payload);
}
clear(inputForm:FormGroup){
  inputForm.reset;
}
}
