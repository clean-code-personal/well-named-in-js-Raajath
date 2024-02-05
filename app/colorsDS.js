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
    let manual = [];

    for (let majorIndex = 0; majorIndex < MajorColorNames.length; majorIndex++) {
        for (let minorIndex = 0; minorIndex < MinorColorNames.length; minorIndex++) {
            let pairNumber = (majorIndex * MinorColorNames.length) + (minorIndex + 1);
            let colorPair = {
                pairNumber: pairNumber,
                majorColor: MajorColorNames[majorIndex],
                minorColor: MinorColorNames[minorIndex]
            };
            manual.push(colorPair);
        }
    }

    return manual;
}

let manual= getReferenceManual();



module.exports={MajorColorNames,MinorColorNames,ColorPair,manual};
