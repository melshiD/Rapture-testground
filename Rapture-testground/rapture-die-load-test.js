//die face structure as follows:
//  [die.color, pen.color, numberOfDots, Shape, NumValue]

//      <div class="continer" style="background-color:  *die.color*  ">
//      <svg viewBox="0 0 300 300">
//          <use xlink:href="#(SHAPE)-bottom" fill=(if pen.color =="white" "white"? "red""/>
//          <use xlink:href="#(SHAPE)-top" fill="  *die.color*  "/>
//          <use xlink:href="#dots-(numberOfDots)"/>
//      </svg>
//      </div>

//To access the 'use' elements inside of the svg and die divs
//firstDie.firstElementChild.children[1].attributes[0].value = "#triangle-top";
var color = "gold";

var dieFacesArray = [
                ["red", color, "four", "circle", "7"],
                ["red", "gold", "one", "square", "7"],
                ["white", "red", "two", "square", "7"],
                ["white", "gold", "three", "triangle", "7"],
                ["red", "gold", "three", "hexagon", "7"],
                ["white", color, "five", "triangle", "7"]
            ];//just one die, not a whole bag yet!

//whole die need to be an object, and then I can take the die color out of the array
//since each face of a common die will be the same for our purposes so far

function drawAllFaces(dieFacesArray){
    //Grab a nodelist of all die- elements[attr*=value]
    var pageDieLocations = document.querySelectorAll("[id*=die-]");

    //iterate through the die face array while senidng to die- div locations
    for(var i = 0; i < pageDieLocations.length; i++){
        //send a single face array from the dieFacesArray to a die- div location
        drawDieToBrowser(dieFacesArray[i], pageDieLocations[i])
    }
}

function drawDieToBrowser(dieFaceArray, dieDiv){
    
    //Set some meaningful variable names
    var dieBodyColor    = dieFaceArray[0];
    var diePenColor     = dieFaceArray[1];
    var dieFaceDots     = dieFaceArray[2];
    var dieFaceRune     = dieFaceArray[3];
    var dieFaceNumVal   = dieFaceArray[4];

    //grab a die div (and set background as dieBodyColor)
    //var thisDieFace = document.getElementById("die-1");
    var thisDieLocation = dieDiv;
    thisDieLocation.style.background = dieBodyColor;

    //grab the list of three <use> elements from each die- div
    var dieDrawing = thisDieLocation.firstElementChild.children;

    //trudge through and change values based on dieBag vars
    dieDrawing[0].attributes[0].value = `#${dieFaceRune}-bottom`;
    dieDrawing[0].attributes[1].value = diePenColor;
    dieDrawing[1].attributes[0].value = `#${dieFaceRune}-top`;
    dieDrawing[1].attributes[1].value = dieBodyColor;
    dieDrawing[2].attributes[0].value = `#dots-${dieFaceDots}`;


}
