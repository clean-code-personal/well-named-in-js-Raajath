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

function testManual()
{ 
    
    //Assuming  getColorFromPairNumber is alredy tested
   for(const testPair of manualObject)
    {
        let pairNumber=testPair.pairNumber;
        testColor=getColorFromPairNumber(pairNumber);
        console.assert(testColor.majorColor==testPair.majorColor);
        console.assert(testColor.minorColor==testPair.minorColor);
       
    }
}



function runTests(){

   testPairNumber(4,"WHITE","BROWN"); 
   testPairNumber(5,"WHITE","SLATEGRAY"); 
   testPairNumber(23,"RED","GREEN");
  
   testColor("YELLOW","GREEN",18);
   testColor("RED","BLUE",6);

   testManual();


}

module.exports={runTests};
