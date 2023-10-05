import {Component,Input} from '@angular/core'
@Component({
  templateUrl:"./heading.component.html",
  selector:'heading'
  })
export class HeadingComponent{

    @Input() //read-only with in the component
    content:string="";
}
