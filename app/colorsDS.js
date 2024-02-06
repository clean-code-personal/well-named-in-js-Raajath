const MajorColorNames = [
    "WHITE", "RED", "BLACK", "YELLOW", "VIOLET"
];
const MinorColorNames = [
	"BLUE", "ORANGE", "GREEN", "BROWN", "SLATE"
];

function ColorPair(){
           this.majorColor;
           this.minorColor;
}

ColorPair.prototype.toString=function(){
	
    return `MajorColor:${this.majorColor},MinorColor:${this.minorColor}`;
}

   


function getReferenceManual() {
    let manualObject = [];
    let manualString="                   Color Coding wires \n\n"
       for (let majorIndex = 0; majorIndex < MajorColorNames.length; majorIndex++) {
        for (let minorIndex = 0; minorIndex < MinorColorNames.length; minorIndex++) {
            let pairNumber = (majorIndex * MinorColorNames.length) + (minorIndex + 1);
            let colorPair = {
                pairNumber: pairNumber,
                majorColor: MajorColorNames[majorIndex],
                minorColor: MinorColorNames[minorIndex]
            };
            // to test Object
            manualObject.push(colorPair);
        
            //to print string
            manualString += `Pair Number: ${colorPair.pairNumber}, Major Color: ${colorPair.majorColor}, Minor Color: ${colorPair.minorColor}\n`;
        }
    }

    return [manualObject,manualString];
}

manual= getReferenceManual();
manualObject=manual[0];
manualString=manual[1];



module.exports={MajorColorNames,MinorColorNames,ColorPair,manualObject,manualString};
