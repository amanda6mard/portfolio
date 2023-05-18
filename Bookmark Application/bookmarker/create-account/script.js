var chosenUsername, chosenPassword, passwordConfirm, submit, errorHTML;

function showError(msg){
    errorHTML.style.display = "block";
    errorHTML.innerHTML = msg;
}

function hideError(){
    errorHTML.style.display = "none";
}
function enableFields(){
    enableConfirm();
    enableSubmit();
}

function enableConfirm(){
    if (chosenPassword.value!=""){
        passwordConfirm.disabled=false;
    } else {
        passwordConfirm.value="";
        passwordConfirm.disabled=true;
    }
}

function enableSubmit(){
    if (passwordConfirm.value!=""){
        var error = "";
        if (chosenUsername.value == ""){
            error += "You must choose a username.<br>";
        }

        if (chosenPassword.value == ""){
            error += "You must choose a password.<br>";
        }

        if (chosenPassword.value != passwordConfirm.value){
            error += "Passwords don't match.<br>";
        }

        if (error==""){
            hideError();
            submit.disabled = false;
        } else {
            showError(error);
            submit.disabled = true;
        }
    }
}


function start(){
    chosenUsername = document.getElementById("username");
    chosenUsername.addEventListener("input", enableFields, false);

    chosenPassword = document.getElementById("password");
    chosenPassword.addEventListener("input", enableFields, false);
    
    passwordConfirm = document.getElementById("password-confirm");
    passwordConfirm.addEventListener("input", enableFields, false);
    
    submit = document.getElementById("submit");
    
    errorHTML = document.getElementById("error");
}

window.addEventListener("load", start, false);