//TestSuite , TestCases , TestFixture , TestDoubles , TestResult ,TestRunner
//FIRST Principle
//Arrange Act Assert  pattern

//Jasmine

import { HeadingComponent } from "./heading.component";

describe("HeadingComponentTestSuite",()=>{
  beforeAll(()=>{})
  afterAll(()=>{})

   beforeEach(()=>{


  });
  afterEach(()=>{})
 //Test Specifications
     it("ComponentInstatiationTest",()=>{
       //Arrange
       let instance=undefined;
      //Act
      instance=new HeadingComponent();
       //Assert (Expect + Matcher)
       expect(instance).toBeTruthy();

     })
     it("AssertInputPropertyTest",()=>{
       //Arrange
       let instance=undefined;
      //Act
      instance=new HeadingComponent();
      instance.content="test";
       //Assert (Expect + Matcher)
       expect(instance.content).toBe("test");


     })


});
