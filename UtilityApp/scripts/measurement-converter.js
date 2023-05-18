var unit1, units2, fromNumber, measurementType;
var conversionType = "weight";
var unitsHTML = "";
var weightUnits = ["mg", "g", "kg", "oz", "lbs"];
var lengthUnits = ["mm", "cm", "m", "km", "in", "ft"];
var sup2 = "^2";
var areaUnits = ["mm" + sup2, "cm"+ sup2, "m"+ sup2, "km"+ sup2, "in"+ sup2, "ft"+ sup2];
var sup3 = "^3";
var volumeUnits = ["mm"+ sup3, "cm"+ sup3, "m"+ sup3, "km"+ sup3, "mL", "L", "in"+ sup3, "ft"+ sup3];
var fromUnit, toUnit, fromNumber = 0;
var result = 0;
var formattedResult = "";

function formatResult() {
    //Round result to max. 9 decimals
    formattedResult = result * 1000000000;
    formattedResult = Math.round(formattedResult);
    formattedResult /= 1000000000;
    
    //limit precision to 10 if still more than 10 digits total
    if (formattedResult.toString().length > 10){
        formattedResult = formattedResult.toPrecision(10);
    }
}

function updateUnits() { 
    unitsHTML = "";
    switch(conversionType){
        case "weight":
            for (unit in weightUnits){
                unitsHTML += "\n<option value='"; 
                unitsHTML += weightUnits[unit];
                unitsHTML += "'>";
                unitsHTML += weightUnits[unit];
                unitsHTML += "</option>";
            }
            break;
        case "length":
            for (unit in lengthUnits){
                unitsHTML += "\n<option value='"; 
                unitsHTML += lengthUnits[unit];
                unitsHTML += "'>";
                unitsHTML += lengthUnits[unit];
                unitsHTML += "</option>";
            }
            break;
        case "area":
            for (unit in areaUnits){
                unitsHTML += "\n<option value='"; 
                unitsHTML += areaUnits[unit];
                unitsHTML += "'>";
                unitsHTML += areaUnits[unit];
                unitsHTML += "</option>";
            }
            break;
        case "volume":
            for (unit in volumeUnits){
                unitsHTML += "\n<option value='"; 
                unitsHTML += volumeUnits[unit];
                unitsHTML += "'>";
                unitsHTML += volumeUnits[unit];
                unitsHTML += "</option>";
            }
            break;
    }
    
    units1.innerHTML = unitsHTML;
    units2.innerHTML = unitsHTML;
    updateDisplay();
}

function toKG() {
    switch(fromUnit){
        case "mg":
            result = fromNumber / 1000000;
            break;
        case "g":
            result = fromNumber / 1000;
            break;
        case "kg":
            result = fromNumber;
            break;
        case "oz":
            result = fromNumber / 35.2739619;
            break;
        case "lbs":
            result = fromNumber / 2.20462262;
            break;
    }
}
function toWeightUnit() {
    switch(toUnit){
        case "mg":
            result = result * 1000000;
            break;
        case "g":
            result = result * 1000;
            break;
        case "kg":
            break;
        case "oz":
            result = result * 35.2739619;
            break;
        case "lbs":
            result = result * 2.20462262;
            break;
    }
}
function toM() {
    switch(fromUnit){
        case "mm":
            result = fromNumber / 1000;
            break;
        case "cm":
            result = fromNumber / 100;
            break;
        case "m":
            result = fromNumber;
            break;
        case "km":
            result = fromNumber * 1000;
            break;
        case "in":
            result = fromNumber * 0.3048 / 12;
            break;
        case "ft":
            result = fromNumber * 0.3048;
            break;
    }
}
function toLengthUnit() {
    switch(toUnit){
        case "mm":
            result = result * 1000;
            break;
        case "cm":
            result = result * 100;
            break;
        case "m":
            break;
        case "km":
            result = result / 1000;
            break;
        case "in":
            result = result / 0.3048 * 12;
            break;
        case "ft":
            result = result / 0.3048;
            break;
    }
}
function toM2() {
    var unit = fromUnit.split("^2")[0];
    switch(unit){
        case "mm":
            result = fromNumber / 1000000;
            break;
        case "cm":
            result = fromNumber / 10000;
            break;
        case "m":
            result = fromNumber;
            break;
        case "km":
            result = fromNumber * 1000000;
            break;
        case "in":
            result = fromNumber * (0.3048 / 12) * (0.3048 / 12);
            break;
        case "ft":
            result = fromNumber * 0.3048 * 0.3048;
            break;
    }
}
function toAreaUnit() {
    var unit = toUnit.split("^2")[0];
    switch(unit){
        case "mm":
            result = result * 1000000;
            break;
        case "cm":
            result = result * 10000;
            break;
        case "m":
            break;
        case "km":
            result = result / 1000000;
            break;
        case "in":
            result = result / (0.3048 / 12) / (0.3048 / 12);
            break;
        case "ft":
            result = result / 0.3048 / 0.3048;
            break;
    }
}
function toM3() {
    var unit = fromUnit.split("^3")[0];
    switch(unit){
        case "mm":
            result = fromNumber / 1000000000;
            break;
        case "cm":
            result = fromNumber / 1000000;
            break;
        case "m":
            result = fromNumber;
            break;
        case "km":
            result = fromNumber * 1000000000;
            break;
        case "mL":
            result = fromNumber / 1000000;
            break;
        case "L":
            result = fromNumber / 1000;
            break;
        case "in":
            result = fromNumber * (0.3048 / 12) * (0.3048 / 12) * (0.3048 / 12);
            break;
        case "ft":
            result = fromNumber * 0.3048 * 0.3048 * 0.3048;
            break;
    }
}
function toVolumeUnit() {
    var unit = toUnit.split("^3")[0];
    switch(unit){
        case "mm":
            result = result * 1000000000;
            break;
        case "cm":
            result = result * 1000000;
            break;
        case "m":
            break;
        case "km":
            result = result / 1000000000;
            break;
        case "mL":
            result = result * 1000000;
            break;
        case "L":
            result = result * 1000;
            break;
        case "in":
            result = result / (0.3048 / 12) / (0.3048 / 12)/ (0.3048 / 12);
            break;
        case "ft":
            result = result / 0.3048 / 0.3048 / 0.3048;
            break;
    }
}

function calculate() {
    switch(conversionType){
        case "weight":
            toKG();
            toWeightUnit();
            break;
        case "length":
            toM();
            toLengthUnit();
            break;
        case "area":
            toM2();
            toAreaUnit();
            break;
        case "volume":
            toM3();
            toVolumeUnit();
            break;
    }
    formatResult();
}

function displayError(message, type){
    var errorMsg = document.getElementById("error-msg");
    errorMsg.innerHTML = message;
    
    if (type=="warning"){
        errorMsg.style.backgroundColor = "lightgoldenrodyellow";
        errorMsg.style.borderLeft = "solid 4px yellow";
    }
    else{
        errorMsg.style.backgroundColor = "pink";
        errorMsg.style.borderLeft = "solid 4px red";
    }

    errorMsg.style.visibility = "visible";
}

function hideError(){
    var errorMsg = document.getElementById("error-msg");
    errorMsg.style.visibility = "hidden";
}

function validateInput(){
    //remove white spaces
    fromNumber = fromNumberIn.value.split(' ').join('');
    
    //
    
    if(fromNumber==""){
        fromNumber = 0;
    }
    fromNumber = parseFloat(fromNumber);
    if (Number.isNaN(fromNumber)){
        displayError("Input must be a number.");
    }
    else {
        if (fromNumber.toString().length > 10){
            displayError("Note: Result will be rounded to 10 digits.", "warning");
        }
        else{
        hideError();
        }
        updateDisplay();
    }
}

function updateDisplay() {
    fromUnit = units1.value;
    toUnit = units2.value;
    if (fromNumber==""){
        fromNumber = 0;
    }
    
    calculate();
    var resultDisplay = document.getElementById("result-display");
    resultDisplay.innerHTML = formattedResult;
}

function conversionSelection() {
    var selection = measurementType.value;
    switch(selection){
        case "weight":
            conversionType = "weight";
            break;
        case "length":
            conversionType = "length";
            break;
        case "area":
            conversionType = "area";
            break;
        case "volume":
            conversionType = "volume";
            break;
    }
    updateUnits();
}

function loadMeasListeners() {

    measurementType = document.getElementById("measurement-type");
    measurementType.addEventListener("change", conversionSelection, false);
    
    units1 = document.getElementById("units-1");
    units1.addEventListener("change", updateDisplay, false);
    units2 = document.getElementById("units-2");
    units2.addEventListener("change", updateDisplay, false);
    
    fromNumberIn = document.getElementById("from-number");
    fromNumberIn.onkeypress = function(){
        if (event.keyCode == 13){
            event.preventDefault();
        }
    };
    fromNumberIn.addEventListener("keyup", validateInput, false);
    
    updateUnits();
    updateDisplay();
}