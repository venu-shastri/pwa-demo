import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-emi-summary-result',
  templateUrl: './emi-summary-result.component.html',
  styleUrls: ['./emi-summary-result.component.css']
})
export class EmiSummaryResultComponent implements OnInit {
  @Input()
  emi:number=0;
  @Input()
  totalI:number=0;
  @Input()
  totalAmountPayable=0;
  constructor() { }

  ngOnInit(): void {
  }

}
