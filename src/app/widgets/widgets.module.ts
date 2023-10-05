import { NgModule } from "@angular/core";
import { HeadingComponent } from "./components/heading/heading.component";
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations:[HeadingComponent, CardComponent],
  exports:[HeadingComponent,CardComponent]
})
export class WidgetsModule{

}
