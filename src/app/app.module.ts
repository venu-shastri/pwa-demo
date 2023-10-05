import {NgModule} from "@angular/core"
import { EmiCalculatorModule } from "./emiCalculator/emiCalculator.module"
import { EmiCalculatorGodComponent } from "./emiCalculator/components/emiCalculatorGodComponent/emiCalculatorGod.component"
import { BrowserModule } from "@angular/platform-browser"
import { WidgetsModule } from "./widgets/widgets.module"
import { HeadingComponent } from "./widgets/components/heading/heading.component"
import { AppComponent } from "./app.component"
import { CommonDirectivesModule } from "./commonDirectives/commonDirectives.module"

@NgModule({
  declarations:[AppComponent],
  imports:[EmiCalculatorModule,BrowserModule,WidgetsModule,CommonDirectivesModule],
  bootstrap:[AppComponent],
  providers:[
    { provide:"logger",useClass:ConsoleLogger}
  ]
})
export class AppModule{

}
