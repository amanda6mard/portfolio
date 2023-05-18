var colorStyleHTML = "";
var color1, color2, color3, title;
var toolBlock;
var toolTitleHTML  = "Measurement Converter";
var measurementConverter, mortgageCalculator, metronome;
var measurementConverterMob, mortgageCalculatorMob, metronomeMob;
var activeTool, activeMob;

function setMeas() {
    toolTitleHTML = "Measurement Converter";
    switchTool(measurementConverter,measurementConverterMob);
}
function setMort() {
    toolTitleHTML = "Mortgage Calculator";
    switchTool(mortgageCalculator, mortgageCalculatorMob);
}
function setMetro() {
    toolTitleHTML = "Metronome";
    switchTool(metronome, metronomeMob);
}

function switchTool (newTool, newMob) {
    //Change tab
    //remove class from current
    activeTool.classList.remove("active");
    // remove from mobile tool
    activeMob.classList.remove("active");
    
    
    //change active tab
    activeTool = newTool;
    activeMob = newMob;
    //add class to new 
    activeTool.classList.add("active");
    //add to mobile tool
    activeMob.classList.add("active");
    
    
    //Change title
    title.innerHTML = toolTitleHTML;
    
   loadTool();
}

function loadTool() {
    switch(activeTool){
        case measurementConverter:
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    toolBlock.innerHTML = this.responseText;
                    loadMeasListeners();
                }
            };
            xhttp.open("GET", "measurement-converter.txt", true);
            xhttp.send();
            break;
        case mortgageCalculator:
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    toolBlock.innerHTML = this.responseText;
                    loadMortListeners();
                }
            };
            xhttp.open("GET", "mortgage-calculator.txt", true);
            xhttp.send();
            break;
        case metronome:
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    toolBlock.innerHTML = this.responseText;
                    loadMetroListeners();
                }
            };
            xhttp.open("GET", "metronome.txt", true);
            xhttp.send();
            break;
        default: 
    }
}

function changeColorPurple(){
    colorStyleHTML = "<link rel='stylesheet' href='styles/purple.css'>"
    
    var color = document.getElementById("color-scheme");
    color.innerHTML = colorStyleHTML;
}

function changeColorGreen(){
    colorStyleHTML = "<link rel='stylesheet' href='styles/green.css'>"
    
    var color = document.getElementById("color-scheme");
    color.innerHTML = colorStyleHTML;
}

function changeColorBlue(){
    colorStyleHTML = "<link rel='stylesheet' href='styles/blue.css'>"
    
    var color = document.getElementById("color-scheme");
    color.innerHTML = colorStyleHTML;
}

function start() {
    //Color picker listeners
    color1 = document.getElementById("color1");
    color1.addEventListener("click", changeColorPurple, false);
    
    color2 = document.getElementById("color2");
    color2.addEventListener("click", changeColorGreen, false);
    
    color3 = document.getElementById("color3");
    color3.addEventListener("click", changeColorBlue, false);
    
    
    //main nav listeners
    measurementConverter = document.getElementById("measurement-converter");
    activeTool = measurementConverter;
    measurementConverter.addEventListener("click", setMeas, false);
    
    mortgageCalculator = document.getElementById("mortgage-calculator");
    mortgageCalculator.addEventListener("click", setMort, false);
    
    metronome = document.getElementById("metronome");
    metronome.addEventListener("click", setMetro, false);
    
    
    //mobile nav listeners
    measurementConverterMob = document.getElementById("measurement-converter-mobile");
    activeMob = measurementConverterMob;
    measurementConverterMob.addEventListener("click", setMeas, false);
    
    mortgageCalculatorMob = document.getElementById("mortgage-calculator-mobile");
    mortgageCalculatorMob.addEventListener("click", setMort, false);
    
    metronomeMob = document.getElementById("metronome-mobile");
    metronomeMob.addEventListener("click", setMetro, false);
    
    
    //other element variables
    title = document.getElementById("tool-title");
    toolBlock = document.getElementById("tool-block");
    
    setMeas();
}

window.addEventListener("load", start, false);