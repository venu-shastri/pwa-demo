import { TestBed,ComponentFixture } from "@angular/core/testing";
import { HeadingComponent } from "./heading.component";
import { BrowserTestingModule } from "@angular/platform-browser/testing";
import { By } from "@angular/platform-browser";
import {expectText} from '../../../test-helpers'
describe("HeadingComponentTestSuite",()=>{
  let fixture:ComponentFixture<HeadingComponent>

  beforeEach(async ()=>{
    await TestBed.configureTestingModule({
    declarations:[HeadingComponent],
    imports:[BrowserTestingModule]
        }).compileComponents();

        fixture=TestBed.createComponent(HeadingComponent);

  });

  it("InstanceTest",()=>{

    expect(fixture.componentInstance).toBeTruthy();

  });

  it("InputPropertyTest",()=>{
     let instance=fixture.componentInstance;
     instance.content="Hello";
     fixture.detectChanges();
     expectText(fixture,"headingRoot","Hello");


  });

});





