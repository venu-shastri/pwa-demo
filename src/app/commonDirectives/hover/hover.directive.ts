import {Directive,ElementRef,Inject, Renderer2,Input,OnInit, HostListener} from "@angular/core"


@Directive({
  selector:"[appHover]"
})
export class HoverDirective implements OnInit
{
  @Input("appHover")
  defaultColor:string="blue";

  @Input()
  toggleColor:string="yellow";
  constructor(
    public targetElement:ElementRef,
    @Inject("logger") public loggerObj:ILogWriter,
    public domEnhancer:Renderer2){

  }
  ngOnInit(){
    this.domEnhancer.setStyle(this.targetElement.nativeElement,"color",this.defaultColor);
  }

  @HostListener("mouseover")
  onHostMouseOver(){
    this.domEnhancer.setStyle(this.targetElement.nativeElement,"color",this.toggleColor);
  }
  @HostListener("mouseleave")
  onHostMouseLeave(){
    this.domEnhancer.setStyle(this.targetElement.nativeElement,"color",this.defaultColor);
  }
}

// <h1 app-hover></h1>
// <p app-hover></p>
