
function generateFooter(){
    let name = "";
    let cookieName ="name=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cookieName) == 0) {
            name = c.substring(cookieName.length, c.length);
        }
    }

    let email = "";
    cookieName ="email=";
    decodedCookie = decodeURIComponent(document.cookie);
    ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
     let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cookieName) == 0) {
            email = c.substring(cookieName.length, c.length);
        }
    }
    let footer = `<div id="footer-page-list">
    <nav>
        <ul>
            <li><a href="../home">Home</a></li>
            <li><a href="../about-us">About Us</a></li>
            <li><a href="../our-work">Our Work</a></li>
            <li><a href="../get-involved">Get Involved</a></li>
            <li><a href="../news">News</a></li>
            <li><a href="../adopt">Adopt</a></li>
            <li><a href="../donate">Donate</a></li>
        </ul>
    </nav>
</div>
<div class="centered">
    <ul>
        <li><a href="../adopt" class="button accent-button link-button button-stretch">Adopt a pet</a></li>
        <li> <a href="../donate" class="button accent-dark-button link-button button-stretch">Donate</a></li>
        <li>
            <div class="button accent-button button-stretch" id="back-button">Go to last page</div>
        </li>
    </ul>
</div>
<div id="contact-form">
    <form id="contact-form" name="contactForm">
        <h2>Contact us</h2>
        <div id="form-warning">Test</div>
        <div id="form-error">Test</div>
        <div class="form-group-line">
            <label>Your name:</label>
            <input type=text name="name" ${name !== "" ? `value="${name}"` : ""}>
        </div>
        <div class="form-group-line">
            <label>Your email:</label>
            <input type="email" name="email" ${email !== "" ? `value="${email}"` : ""}>
        </div>
        <label>Your message:</label>
        <textarea name="message"></textarea>
        <div>
            <label>remember me</label>
            <input type="checkbox" checked="true" name="rememberMe">
        </div>
        <input class="button accent-button no-side-mg" type="submit">
        <p>Note - This is an example website. This form does not actually send messages. It simply demonstrates some validation (name + message fields), and using cookies to prepopulate form fields.</p>
    </form>
    <div id="success-message"></div>
</div>`;

    let footerElement = document.getElementsByTagName("footer")[0];
    if ( typeof footerElement !== 'undefined'){
        footerElement.innerHTML = footer;
        return true;
    }
}

function isValid(checkForErrors=true){
    //always checks for warnings
    //only checks for errors when checkForErrors is true

    document.getElementById("form-error").style.display = "none";

    msg = "";
    if(document.contactForm.name.value === "") {
        msg = "Warning - name field empty.";
    } else if ((/\d/.test(document.contactForm.name.value))){
        msg = "Warning - does your name really contain numbers?";
    }
    if(msg !== "") {
        let field = document.getElementById("form-warning");
        field.innerHTML = msg;
        field.style.display = "block";
    } else {
        document.getElementById("form-warning").style.display = "none";
    }

    if(checkForErrors){
        msg = "";
        if(document.contactForm.message.value === "") {
            msg = "Error - message is empty"; 
        }
    
        if(msg !== "") {
            let field = document.getElementById("form-error");
            field.innerHTML = msg;
            field.style.display = "block";
            return false;
        }
    }
    
    return true;
}

function processContactForm(){
    event.preventDefault();
    if(isValid())
    {
        let successMessage = `<p>Thank you ${document.contactForm.name.value}, your message has been sent.</p>`;
        if(document.contactForm.rememberMe.checked){
            let name = document.contactForm.name.value;
            let email = document.contactForm.email.value;
            document.cookie = `name=${name}`;
            document.cookie = `email=${email}`;
            successMessage += `<p>Your name [${name}] and email [${email}] have been remembered. This form will be pre-populated with their values when you navigate to other pages</p>`;
        }
        document.getElementById("success-message").innerHTML = successMessage;
    }
    
}

function footerIni()
{
    document.getElementById("search-button");
    if(generateFooter())
    {
        document.getElementById("back-button").addEventListener("click", ()=>{window.history.back()});
        document.getElementById("contact-form").addEventListener("submit", processContactForm);
        document.getElementById("contact-form").addEventListener("input", ()=>{isValid(false);});
    }
    
}

window.addEventListener("load",footerIni);