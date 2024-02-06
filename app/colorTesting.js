const { getColorFromPairNumber, getPairNumberFromColor } = require('./colorConversion.js');
const { MajorColorNames, MinorColorNames, ColorPair,manualObject } = require('./colorsDS.js');

function testPairNumber(pairNumber,expectedMajorColor,expectedMinorColor){
    let testPair=getColorFromPairNumber(pairNumber);
    console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair}`);
    console.assert(testPair.majorColor == expectedMajorColor);
    console.assert(testPair.minorColor == expectedMinorColor);

}

function testColor(majorColor,minorColor,expectedPairNumber)
{
    let testPair = new ColorPair();
    testPair.majorColor=majorColor;
    testPair. minorColor =minorColor;
    pairNumber =getPairNumberFromColor(testPair);
    console.log(`[In]Colors: ${testPair}, [Out] PairNumber: ${pairNumber}`);
    console.assert(pairNumber==expectedPairNumber);
}

/*function testManualAuto()
{ 
    
    //Assuming  getColorFromPairNumber is alredy tested
   for(const testPair of manualObject)
    {
        let pairNumber=testPair.pairNumber;
        testColor=getColorFromPairNumber(pairNumber);
        console.assert(testColor.majorColor==testPair.majorColor);
        console.assert(testColor.minorColor==testPair.minorColor);
       
    }

}*/

function testManualEntry(pairNumber,majorColor,minorColor)
{
  let result =  manualObject.find((obj) =>{return obj.pairNumber===pairNumber && obj.majorColor===majorColor && obj.minorColor===minorColor});
  
  if(result){
    console.log("\n Exists in Reference Manual");
    testPairNumber(pairNumber,majorColor,minorColor);
    //assertion should not fail here
  }
  else{
    console.log("\n Does't exist in Reference manual");
    testPairNumber(pairNumber,majorColor,minorColor);
    // assertion should fail here
  }
  
}





function runTests(){

  testPairNumber(4,"WHITE","BROWN"); 
   
   testPairNumber(5,"WHITE","SLATEGRAY"); 
   
   testPairNumber(23,"RED","GREEN");
  
   testColor("YELLOW","GREEN",18);
   testColor("RED","BLUE",6);
 

  // testManualAuto();
   
   testManualEntry(4,"WHITE","BROWN");
   testManualEntry(25,"VIOLET","SLATE");

   testManualEntry(23,"WHITE","BROWN");
   testManualEntry(3,"YELLOW","BLACK");
   testManualEntry(6,"GREEN","ORANGE");
   

  

}

module.exports={runTests};
