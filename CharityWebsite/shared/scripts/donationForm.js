function processAmountSelection(senderId, targetId)
{
    //remove active from all others
    let elements = document.getElementsByName("donation-amount");
    for(let element of elements){
        element.classList.remove("active-custom-radio");
    }

    //set element sender to active-custom-radio
   document.getElementById(senderId).classList.add("active-custom-radio");

   if(senderId === "custom-input" &&  document.getElementById(senderId).value === ""){
    document.getElementById(senderId).value=25;
   }

    //check corresponding radio button
    document.getElementById(targetId).checked = true;
}

function processCustomAmount(senderId, targetId)
{
   document.getElementById(targetId).value = +(document.getElementById(senderId).value);
}

function processYearSelection(senderId, targetId)
{
    //remove active from all others
    let elements = document.getElementsByName("year-selection");
    for(let element of elements){
        element.classList.remove("active-custom-radio");
    }

    //set element sender to active-custom-radio
   document.getElementById(senderId).classList.add("active-custom-radio");

    //check corresponding radio button
    document.getElementById(targetId).checked = true;
}

function processDonationTypeSelection(senderId, targetId)
{
    //remove active from all others
    let elements = document.getElementsByClassName("active-tab");
    for(let element of elements){
        element.classList.remove("active-tab");
    }

    //set element sender to active-tab
   document.getElementById(senderId).classList.add("active-tab");

    //check corresponding radio button
    document.getElementById(targetId).checked = true;

    //hide duration if not monthly
    if(document.donationForm.donationType.value !== "monthly")
    {
        document.getElementById("frequency-form").classList.add("hidden");
    } else {
        document.getElementById("frequency-form").classList.remove("hidden");
    }
}

function processForm()
{
    let html;
    if(document.donationForm.donationType.value === "once"){
        html = `<h3>Thank you!</h3>
        <p>You're donation of <strong><span class="accent-color">$${document.donationForm.donationAmount.value}</span></strong> has been received</p>
        `
    } else if (document.donationForm.donationType.value === "monthly") {
        let time =document.donationForm.duration.value;
        html = `<h3>Thank you!</h3>
        <p>Your monthly donation of <strong><span class="accent-color">$${document.donationForm.donationAmount.value}</span></strong> has been set up.</p>
        <p>Your card will be charged on the first Monday of the month for the next <strong><span class="accent-color">${time} year${time>1? "s" : ""}</span></strong></p>
         `
    }
   
    document.getElementById("donation-modal-contents").innerHTML = html;
    toggleModel();
}

function toggleModel(){
    let modal = document.getElementById("donation-modal");
    if(modal.classList.contains("hidden"))
    {
        modal.classList.remove("hidden")
    } else {
        modal.classList.add("hidden")
    }
}

function loadDonationFormListeners()
{
    document.getElementById("10-button").addEventListener("click", ()=>{processAmountSelection("10-button", "10-radio")});
    document.getElementById("15-button").addEventListener("click", ()=>{processAmountSelection("15-button", "15-radio")});
    document.getElementById("25-button").addEventListener("click", ()=>{processAmountSelection("25-button", "25-radio")});
    document.getElementById("40-button").addEventListener("click", ()=>{processAmountSelection("40-button", "40-radio")});
    document.getElementById("onetime-donation").addEventListener("click", ()=>{processDonationTypeSelection("onetime-donation", "type-once")});
    document.getElementById("monthly-donation").addEventListener("click", ()=>{processDonationTypeSelection("monthly-donation", "type-monthly")});
    
    document.getElementById("1-year-button").addEventListener("click", ()=>{processYearSelection("1-year-button", "1-year-radio")});
    document.getElementById("2-year-button").addEventListener("click", ()=>{processYearSelection("2-year-button", "2-year-radio")});
    document.getElementById("5-year-button").addEventListener("click", ()=>{processYearSelection("5-year-button", "5-year-radio")});

    document.getElementById("custom-input").addEventListener("click", ()=>{processAmountSelection("custom-input", "custom-amount")});
    document.getElementById("custom-input").addEventListener("focus", ()=>{processAmountSelection("custom-input", "custom-amount")});
    document.getElementById("custom-input").addEventListener("change", ()=>{processCustomAmount("custom-input", "custom-amount")});

    document.getElementById("submit-button").addEventListener("click", processForm);
    document.getElementById("close-button").addEventListener("click", toggleModel);

}

window.addEventListener("load", loadDonationFormListeners);