var addBox, editBox, deleteBox;
var editButtons, deleteButtons;
var nameEdit, urlEdit, nameDelete, urlDelete, editURLID, deleteURLID, bookmarks, bookmarksUL, topTen, yourbks, topbks, scrollIcon, scrollIconUp;
var submitAddButton, submitEditButton, addValidate, editValidate;


function showTop(){ 
    hideBKS();
    topTen.style.display = "block";
    yourbks.classList.remove("active-folder");
    topbks.classList.add("active-folder");
}
function hideTop(){ topTen.style.display = "none";}

function showBKS() { 
    hideTop();
    bookmarks.style.display = "block";
    yourbks.classList.add("active-folder");
    topbks.classList.remove("active-folder");
}
function hideBKS() { bookmarks.style.display = "none";}


function showError(msg, type) {
    if(type=="add"){
        addError.innerHTML = msg;
        addError.style.display = "block";
    }
    
    if(type=="edit"){
        editError.innerHTML = msg;
        editError.style.display = "block";
    }
}

function hideError(){
    addError.style.display = "none";
    editError.style.display = "none";
}

function closeAdd(){ addBox.style.visibility= "hidden";}
function openAdd(){ addBox.style.visibility= "visible";}

function closeEdit(){ editBox.style.visibility= "hidden";}
function openEdit(button){ 
    var value = button.value.split(" ");
    var id = value[0];
    var url = value[1];
    
    value.splice(0, 2);
    
    var name = value.join(" ");
    
    urlEdit.value = url;
    nameEdit.value = name;
    editURLID.value = id;
    
    editBox.style.visibility= "visible";
}

function closeDelete(){ deleteBox.style.visibility= "hidden";}
function openDelete(button){ 
    var value = button.value.split(" ");
    var id = value[0];
    var name = value[1];
    var url = value[2];
    urlDelete.innerHTML = url;
    nameDelete.innerHTML = name;
    deleteURLID.value = id;
    
    deleteBox.style.visibility= "visible";
}

function iconVisibility(){
    if(bookmarksUL.scrollTop === bookmarksUL.scrollHeight - bookmarksUL.offsetHeight) {
       scrollIcon.style.display="none";
   } else {
       scrollIcon.style.display="block";
   }
    
    if(bookmarksUL.scrollTop === 0) {
       scrollIconUp.style.display="none";
   } else {
       scrollIconUp.style.display="block";
   }
    
    if(bookmarks.offsetHeight > bookmarks.scrollHeight){
        scrollIcon.style.display = "none";
        scrollIconUp.style.display = "none";
    }
}

function checkUrl(url, type) {
    if(url !== ""){
        submitAddButton.disabled = false;
    } else {
        submitEditButton.disabled = true;
    }
}

function editAnyway() {
    editValidate.value = "false";
    urlEdit.value = encodeURI(urlEdit.value);
    submitEdit.submit();
}

function addAnyway() {
    addValidate.value = "false";
    urlAdd.value = encodeURI(urlAdd.value);
    submitEdit.submit();
}

function start(){
    addBox = document.getElementById("add-box");
    var addCloseButtons = document.getElementsByName("add-close");
    for (var i = 0, len = addCloseButtons.length; i < len; i++) {
        addCloseButtons[i].addEventListener("click", closeAdd, false);
    }
    
    
    editBox = document.getElementById("edit-box");
    
    var editCloseButtons = document.getElementsByName("edit-close");
    for (var i = 0, len = editCloseButtons.length; i < len; i++) {
        editCloseButtons[i].addEventListener("click", closeEdit, false);
    }
    
    deleteBox = document.getElementById("delete-box");
    var deleteCloseButtons = document.getElementsByName("delete-close");
    for (var i = 0, len = deleteCloseButtons.length; i < len; i++) {
        deleteCloseButtons[i].addEventListener("click", closeDelete, false);
    }
    
    addButton = document.getElementById("add");
    addButton.addEventListener("click", openAdd, false);
    
    editButtons = document.getElementsByName("edit");
    for (var i = 0, len = editButtons.length; i < len; i++) {
        editButtons[i].addEventListener("click", function() { openEdit(this); } , false);
    }
    
    deleteButtons = document.getElementsByName("delete");
    for (var i = 0, len = deleteButtons.length; i < len; i++) {
        deleteButtons[i].addEventListener("click", function() { openDelete(this); }, false);
    }
    
    nameAdd = document.getElementById("nameAdd");
    nameEdit = document.getElementById("nameEdit");
    nameDelete = document.getElementById("nameDelete");
    urlEdit = document.getElementById("urlEdit");
     urlEdit.addEventListener("input", function () {checkUrl(urlEdit.value, "edit");}, false);
    
    urlAdd = document.getElementById("urlAdd");
    urlAdd.addEventListener("input", function () {checkUrl(urlAdd.value, "add");}, false);
    
    urlDelete = document.getElementById("urlDelete");
    editURLID = document.getElementById("editURLID");
    deleteURLID = document.getElementById("deleteURLID");
    
    submitAdd = document.getElementById("submit-add");
    submitAdd.addEventListener("submit", function(e){ 
        e.preventDefault();
        //make extra sure it doesn't go into database with spaces
        urlAdd.value = encodeURI(urlAdd.value);
        submitAdd.submit();
    }, false);
    
    submitAddButton = document.getElementById("submit-add-button");
    
    submitEdit = document.getElementById("submit-add");
    submitEdit.addEventListener("submit", function(e){ 
        e.preventDefault();
        //make extra sure it doesn't go into database with spaces
        urlEdit.value = encodeURI(urlEdit.value);
        submitEdit.submit();
    }, false);
    
    submitEditButton = document.getElementById("submit-edit-button");
    
    addError = document.getElementById("add-error");
    editError = document.getElementById("edit-error");
    
    bookmarks = document.getElementById("bookmarks");
    topTen = document.getElementById("top-ten-bkmrks");
    
    yourbks = document.getElementById("your-bks");
    yourbks.addEventListener("click", showBKS, false);
    
    topbks = document.getElementById("top-ten-bks");
    topbks.addEventListener("click", showTop, false);
    
    scrollIcon = document.getElementById("scroll-icon");
    scrollIconUp = document.getElementById("scroll-icon-up");
    
    bookmarksUL = document.getElementById("bookmarks-ul");
    bookmarksUL.addEventListener("scroll", iconVisibility, false);
    
    editValidate = document.getElementById("edit-validate");
    addValidate = document.getElementById("add-validate");
        
}
                                                                       
window.addEventListener("load", start, false);