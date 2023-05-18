var price = 0;
var deposit = 0;
var interest = 0;
var pmtPeriod = 10;
var monthlypmt = 0;

var priceList, depositList, intList, periodList;

var priceIsNumber = true;
var priceIsPositive = true;

var depositIsNumber = true;
var depositIsPositive = true;
var depositIsSmaller = true;

var intIsNumber = true;
var intIsPositive = true;
var intIsPercentage = true;

var resultIsRounded = false;
var resultIsRoundedDep = false;
var resultIsRoundedInt = false;

var calcIsNumber = true;

var priceOut, depOut, intOut, termOut, pmtOut;

function formatted(result) {
    //Round result to max. 2 decimals
    formattedResult = result * 100;
    formattedResult = Math.round(formattedResult);
    formattedResult /= 100;
    
    //limit precision to 10 if still more than 10 digits total
    if (formattedResult.toString().length > 10){
        formattedResult = formattedResult.toPrecision(10);
    }
    
    return formattedResult;
}


function showErrors(){
    var errorMsg = document.getElementById("error-msg-mort");
    var message = "";
    var type = "";
    
    if (priceIsNumber == false){
        message += "Price must be a number. "
        type = "error";
    }
    
    if (priceIsPositive == false){
        message += "Price must be positive. "
        type = "error";
    }
    
    if (depositIsNumber == false){
        message += "Deposit must be a number. "
        type = "error";
    }
    
    if (depositIsPositive == false){
        message += "Deposit must be positive. "
        type = "error";
    }
    
    if (depositIsSmaller == false){
        message += "Deposit must be smaller than price. "
        type = "error";
    }
    
    if (intIsNumber == false){
        message += "Interest rate must be a number. "
        type = "error";
    }
    
    if (intIsPositive == false){
        message += "Interest rate must be positive. "
        type = "error";
    }
    
    if (intIsPercentage == false){
        message += "Interest rate must be less than 100%. "
        type = "error";
    }
    
    if (calcIsNumber == false){
        message += "Not enough information to calculate. "
        if (type != "error"){
            type = "warning";
        }
    }
    
    if (resultIsRounded == true || resultIsRoundedDep == true || resultIsRoundedInt == true){
        message += "Note: Results are rounded to 10 digits. ";
        if (type != "error"){
            type = "warning";
        }
    }
    
    errorMsg.innerHTML = message;
        
    if (type=="warning"){
        errorMsg.style.backgroundColor = "lightgoldenrodyellow";
        errorMsg.style.borderLeft = "solid 4px yellow";
        errorMsg.style.visibility = "visible";
    }
    if (type=="error"){
        errorMsg.style.backgroundColor = "pink";
        errorMsg.style.borderLeft = "solid 4px red";
        errorMsg.style.visibility = "visible";
    }
    if (message==""){
        errorMsg.innerHTML = "There is no error.";
        errorMsg.style.visibility = "hidden";
    }
}

function validatePrice(){
    //remove white spaces
    var priceIn = priceList.value.split(' ').join('');;
    if(priceIn==""){
        priceIn = 0;
    }
    priceIn = parseFloat(priceIn);
    if (Number.isNaN(priceIn)){
        priceIsNumber = false;
    }
    else {
        priceIsNumber = true;
        if (priceIn < 0){
            priceIsPositive = false;
        }
        else{
            priceIsPositive = true;
            price = priceIn;
            if (price >= deposit){
                depositIsSmaller = true;
            }
            else {depositIsSmaller = false;}
            if (priceIn.toString().length > 10){
                resultIsRounded = true;
            }
            else {
                resultIsRounded = false;
            }
        }
    }
    showErrors();
    calculateMort();
}

function validateDeposit(){
    //remove white spaces
    var depositIn = depositList.value.split(' ').join('');
    if(depositIn==""){
        depositIn = 0;
    }
    depositIn = parseFloat(depositIn);
    if (Number.isNaN(depositIn)){
        depositIsNumber = false;
    }
    else {
        depositIsNumber = true;
        if (depositIn < 0){
            depositIsPositive = false;
        }
        else { 
            depositIsPositive = true;
            deposit = depositIn;
        }
        
        if (depositIn > price){
            depositIsSmaller = false;
        }
        else{
            depositIsSmaller = true;
            if (depositIn.toString().length > 10){
                resultIsRoundedDep = true;
            }
            else{
                resultIsRoundedDep = false;
            }
        }
    } 
    showErrors();
    calculateMort();
}

function validateInt(){
    //remove white spaces
    var intIn = intList.value.split(' ').join('');
    if(intIn==""){
        intIn = 0;
    }
    intIn = parseFloat(intIn);
    if (Number.isNaN(intIn)){
        intIsNumber = false;
    }
    else {
        intIsNumber = true;
        if (intIn < 0){
            intIsPositive = false;
        }
        else{
            intIsPositive = true;
            if (intIn > 100){
                intIsPercentage = false;
            }
            else{
                intIsPercentage = true;
                interest = intIn;
                if (interest.toString().length > 10){
                    resultIsRoundedInt = true;
                }
                else{
                    resultIsRoundedInt = false;
                }
            }
        }
    }
    showErrors();
    calculateMort();
}

function setPeriod(){
    pmtPeriod = periodList.value;
    calculateMort();
}

function updateMortUnits(){
    var unitsHTML ="<option value='1'>1 year</option>";
    
    for (var i =2; i <= 35; i++){
        unitsHTML += "<option value='";
        unitsHTML += i ;
        if (i==10){
            unitsHTML += "' selected='selected"
        }
        unitsHTML += "'>";
        unitsHTML += i;
        unitsHTML += " years";
        unitsHTML += "</option>";
    }
    periodList.innerHTML = unitsHTML;
}

function calculateMort(){
    
    //calculate Loan
    var l = price - deposit;
    
    //number of months
    var n = pmtPeriod * 12;
    
    //calculate monthly payment with formula
    // P = L[c(1 + c)^n]/[(1 + c)^n - 1]
    
    //monthly interest Rate (c) = % / 12
    var c = interest/100/12;
    
    var p = l*(c * Math.pow((1 + c), n))/(Math.pow((1 + c), n) - 1);
    
    if(Number.isNaN(p)){
        calcIsNumber = false;
    }
    
    else {
        calcIsNumber = true;
        monthlypmt = formatted(p);
        updateMortDisplay();
    }
    
    showErrors();
    
}

function updateMortDisplay(){
    pmtOut.innerHTML = monthlypmt;
    priceOut.innerHTML = formatted(price);
    depOut.innerHTML = formatted(deposit);
    intOut.innerHTML = formatted(interest);
    termOut.innerHTML = pmtPeriod;
    loanOut.innerHTML = formatted((price-deposit));
}

function loadMortListeners() {
    
    priceList = document.getElementById("price");
    priceList.onkeypress = function(){
        if (event.keyCode == 13){
            event.preventDefault();
        }
    };
    priceList.addEventListener("keyup", validatePrice, false);
    
    depositList = document.getElementById("deposit");
    depositList.onkeypress = function(){
        if (event.keyCode == 13){
            event.preventDefault();
        }
    };
    depositList.addEventListener("keyup", validateDeposit, false);

    periodList = document.getElementById("repayment-term");
    periodList.addEventListener("change", setPeriod, false);
    
    intList = document.getElementById("interest");
    intList.onkeypress = function(){
        if (event.keyCode == 13){
            event.preventDefault();
        }
    };
    intList.addEventListener("keyup", validateInt, false);
    
    priceOut = document.getElementById("price-out");
    depOut = document.getElementById("dep-out");
    termOut = document.getElementById("term-out");
    intOut = document.getElementById("int-out");
    pmtOut = document.getElementById("mort-result");
    loanOut = document.getElementById("loan-out");
    
    updateMortUnits();
    updateMortDisplay();
}