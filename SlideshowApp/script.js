var lastButton, playButton, nextButton, orderButton, directButton, captionButton, transitionButton, colorButton, start;

var transPicker
var colorPicker;

var reset, remove, timing, transition;

var colorPickerShowing = false;
var transPickerShowing = false;

var transType = "none";

var colorOn = false;
var captionOn = true;

var isPlaying = false;
var isTransitioning = false;
var needsToTransition = false;
var randomOn = false;
var dirForward = true;

var colorBox, hrange, srange, lrange, arange;

var h = 180;
var s = 100;
var l = 50;
var a = 25;

var alpha, hsl;

var img = [];
var imgCap= [];
var imgNum = 0;
var imgMax = 0;
var orderArray = [];
var shuffleNum=0;

var start, drawInt;
var interval = 2000;

var c;
var ctx;

var f=0.1;

function loadShow(){
    for (i in slideshow.image){
        img[i] = new Image();
        img[i].src = slideshow.image[i].source;
        imgCap[i] = slideshow.image[i].caption;
        orderArray[i] = i;
    }
    imgMax = slideshow.image.length;
    
    drawLoading();
}

function draw(){
    if(needsToTransition){
        switch(transType){
            case "none":
                drawImage(1);
                drawColor();
                drawCaption(1);
                break;
            case "right":
                drawRight();
                break;
            case "down":
                drawDown();
                break;
            case "stretchRight":
                drawStretchRight();
                break;
            case "stretchDown":
                drawStretchDown();
                break;
            case "fade":
                drawFade(0.1);
                break;
        }
    } else {
        drawImage(1);
        drawColor();
        drawCaption(1);
    }
    
}

//to be used when drawing with a transition
function drawImage(opacity){
    ctx.globalAlpha = opacity;
    ctx.drawImage(img[imgNum], 0, 0, 800, 450);
}

function drawLoading() {
    drawLoad1();
    setTimeout(drawLoad2, 500);
    setTimeout(drawLoad3, 1500);
    setTimeout(draw, 3000);
}

function drawLoad1() {
    ctx.fillStyle = "#fff";
    ctx.textBaseline = "top";
    ctx.font = "normal 18px sans-serif";
    ctx.fillText("Loading.", 100, 350);
}

function drawLoad2() {
    ctx.fillStyle = "#fff";
    ctx.textBaseline = "top";
    ctx.font = "normal 18px sans-serif";
    ctx.fillText("Loading..", 100, 350);
}

function drawLoad3() {
    ctx.fillStyle = "#fff";
    ctx.textBaseline = "top";
    ctx.font = "normal 18px sans-serif";
    ctx.fillText("Loading...", 100, 350);
}




function drawLast(){
    
    if(dirForward){
        var a = imgNum-1;
        if (imgNum==0){ a=imgMax-1;}
    } else {
        var a = imgNum+1;
        if (imgNum==imgMax-1){ a=0;}
    }
    
    if(randomOn){
        a = orderArray[shuffleNum-1];
        if (shuffleNum==0){
        a=orderArray[imgMax-1]
        }
    }
    
    ctx.globalAlpha = 1;
    ctx.drawImage(img[a], 0, 0, 800, 450);
    
    //draw last caption
    if (captionOn){
        ctx.globalAlpha = 0.7;
        ctx.fillStyle = "#000000";
        ctx.fillRect(40,40, 720, 40);
        ctx.globalAlpha = 1;
        ctx.fillStyle = "#fff";
        ctx.textBaseline = "top";
        ctx.font = "normal 18px sans-serif";
        ctx.fillText(imgCap[a], 52, 52, 696);
    }
    
}

function drawColor(){
    if (colorOn){
        ctx.globalAlpha = alpha;
        ctx.fillStyle = hsl;
        ctx.fillRect(0, 0, 800, 450);   
    }
}

function drawCaption(opacity){
    if (captionOn){
        ctx.globalAlpha = 0.7*opacity;
        ctx.fillStyle = "#000000";
        ctx.fillRect(40,40, 720, 40);
        ctx.globalAlpha = opacity;
        ctx.fillStyle = "#fff";
        ctx.textBaseline = "top";
        ctx.font = "normal 18px sans-serif";
        ctx.fillText(imgCap[imgNum], 52, 52, 696);
    }
}

function drawRight(){
    isTransitioning = true;
    
    var steps = 100;
    var stepInt = 2000/steps;
    var i = 0;
    
    var y1 = img[imgNum].height;
    var x = 800/steps;
    var x1 = y1 * x / 450;
        
    if (interval <=2000 ){
        stepInt = 900/steps;
    }
    
    drawInt = setInterval(function() {
        drawLast();
        ctx.drawImage(img[imgNum], 0, 0, x1, y1,0, 0, x, 450);
        drawColor();
        x = x + 800/steps;
        x1 = y1 * x / 450;
        i++;
        if(i === steps) {
            stopTransition();
        }
    }, stepInt);
}
function drawStretchRight(){
    isTransitioning = true;
    
    var steps = 100;
    var stepInt = 2000/steps;
    var i = 0;
    
    var x1 = img[imgNum].width;
    var y1 = img[imgNum].height;
    var x = 800/steps;
    
    if (interval <=2000 ){
        stepInt = 900/steps;
    }
    
    drawInt = setInterval(function() {
        drawLast();
        ctx.drawImage(img[imgNum], 0, 0, x1, y1,0, 0, x, 450);
        drawColor();
        x = x + 800/steps;
        i++;
        if(i === steps) {
            stopTransition();
        }
    }, stepInt);
}
function drawDown(){
    isTransitioning = true;
    var steps = 50;
    var stepInt = 2000/steps;
    var i = 0;
    
    var x1 = img[imgNum].width;
    var y = 450/steps;
    var y1 = x1 * y / 800;
    
    
    if (interval <=2000 ){
        stepInt = 900/steps;
    }
    
    drawInt = setInterval(function() {
        drawLast();
        ctx.drawImage(img[imgNum], 0, 0, x1, y1,0, 0, 800, y);
        drawColor();
        y = y + 450/steps;
        y1 = x1 * y / 800;
        i++;
        if(i === steps) {
            stopTransition();
        }
    }, stepInt);
}

function drawStretchDown(){
    isTransitioning = true;
    var steps = 50;
    var stepInt = 2000/steps;
    var i = 0;
    
    var x1 = img[imgNum].width;
    var y1 = img[imgNum].height;
    var y = 450/steps;
    
    if (interval <=2000 ){
        stepInt = 900/steps;
    }
    
    drawInt = setInterval(function() {
        drawLast();
        ctx.drawImage(img[imgNum], 0, 0, x1, y1,0, 0, 800, y);
        drawColor();
        y = y + 450/steps;
        i++;
        if(i === steps) {
            stopTransition();
        }
    }, stepInt);
}
    
    
function drawFade(){
    isTransitioning = true;
    var steps = 50;
    var stepInt = 2000/steps;
    var i = 0;
    
    var opacity = 1/steps;
    
    if (interval <=2000 ){
        stepInt = 900/steps;
    }
    
    drawInt = setInterval(function() {
        //draw last image at full opacity
        drawLast();
        //draw next image at step opacity
        drawImage(opacity);
        drawColor();
        drawCaption(opacity);
        opacity = opacity + 1/steps;
        i++;
        if(i === steps) {
            stopTransition();
        }
    }, stepInt);
}

function stopTransition(){
    clearInterval(drawInt);
    drawImage(1);
    drawColor();
    drawCaption(1);
    isTransitioning = false;
}

function nextClick(){
    if (dirForward){
        needsToTransition = true;
        moveForward();
        needsToTransition = false;
    } else {
        needsToTransition = true;
        moveBack();
        needsToTransition = false;
    }
}

function lastClick(){
    if (dirForward){
        needsToTransition = true;
        moveBack();
        needsToTransition = false;
    } else {
        needsToTransition = true;
        moveForward();
        needsToTransition = false;
    }
}
  
   
function moveBack(){ 
    if(isTransitioning){
        stopTransition();
    }
    if (--imgNum >= 0){
        draw();
    } else {
        imgNum = imgMax-1;
        draw();
    }
}


function moveForward(){
    if(isTransitioning){
        stopTransition();
    }
    if (++imgNum < imgMax){
        draw();
    } else {
        imgNum = 0;
        draw();
    }
}

function moveRandom(){
    if(isTransitioning){
        stopTransition();
    }
    if (++shuffleNum < imgMax){
        imgNum = orderArray[shuffleNum];
        draw();
    } else {
        shuffleNum = 0;
        imgNum = orderArray[shuffleNum];
        draw();
    }
}

function togglePlay(){
    if(isPlaying){
        pauseShow();
    } else {
        playShow();
    }
}

function playShow(){
    isPlaying = true;
    draw();
    if(randomOn){
        start = setInterval(moveRandom, interval);
    } else {
        if(dirForward){
            start = setInterval(moveForward, interval);
        } else {
        start = setInterval(moveBack, interval);
        }
    }
    changePlayButton();
    needsToTransition = true;
}

function pauseShow(){
    stopTransition();
    clearInterval(start); 
    isPlaying = false;
    changePlayButton();
    needsToTransition=false;

}

function toggleOrder(){
    if (randomOn){
        randomOn=false;
        //make button solid color
        orderButton.classList.remove("active");
        enableButtons();
    } else {
        randomOn=true;
        orderButton.classList.add("active");
        disableButtons();
        orderArray = shuffle(orderArray);
    }
    if(isPlaying){
        pauseShow();
        playShow();
    }
}

//Function from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function enableButtons(){
    directButton.disabled = false;
}

function disableButtons(){
    directButton.disabled = true;
    //make sure direction is toggled forward
    dirForward=true;
    directButton.classList.remove("active");
}

function toggleDirection(){
    if (dirForward){
        dirForward=false;
        //make button solid color
        directButton.classList.add("active");
    } else {
        dirForward=true;
        directButton.classList.remove("active");
    }
    if(isPlaying){
        pauseShow();
        playShow();
    }
}

function toggleCaption(){
    if (isTransitioning) { stopTransition();}
    if (captionOn){
        captionOn=false;
        changeCaptionButton();
        
        needsToTransition = false;
        draw();
        needsToTransition = true;
        
    } else {
        captionOn=true;
        changeCaptionButton();
    
        needsToTransition = false;
        draw();
        needsToTransition = true;
    }
}

function changeCaptionButton(){
    var html="";
    /*INITIAL HTML
    <div class="button-icon">
        <i class="fas fa-comment-slash"></i>
    </div>
    <div class="button-label">
        Hide Caption
    </div>*/
    
    html += "<div class='button-icon'>                            <i class='";
    if (captionOn){
        html += "fas fa-comment-slash";
    } else {
        html += "fas fa-comment";
    }
    
    html += "'></i></div><div class='button-label'>"
    if (captionOn){
        html += "Hide Caption";
    } else {
        html += "Show Caption";
    }
    html +="</div>";
    
    captionButton.innerHTML = html;
}

function changePlayButton(){
    var html="";
    /*INITIAL HTML
    <div class="button-icon">
        <i class="fas fa-play"></i>
    </div>
    <div class="button-label">
        Play Show
    </div>*/
    
    html += "<div class='button-icon'>                            <i class='";
    if (isPlaying){
        html += "fas fa-pause";
    } else {
        html += "fas fa-play";
    }
    
    html += "'></i></div><div class='button-label'>"
    if (isPlaying){
        html += "Pause Show";
    } else {
        html += "Play Show";
    }
    html +="</div>";
    
    playButton.innerHTML = html;
}

function changeTransition(){    
    transType = transition.value;
    if (isTransitioning){
        pauseShow();
        playShow();
    }
}

function changeTiming(){
    var time = timing.value *1000;
    interval = time;
    
    if (isPlaying){
        pauseShow();
        playShow();
    }
}

function changeColor(){
    h = hrange.value;
    s = srange.value;
    l = lrange.value;
    a = arange.value;
    
    //change colors in picker
    colorBox.style.backgroundColor = "hsl(" + h + "," + s + "%," + l + "%)";
    
    srange.style.backgroundImage = "linear-gradient(to right, hsl(" + h +", 0%," +l+ "%), hsl(" + h + ", 50%," + l + "%), hsl(" + h + ", 100%, " + l + "%))";
    
    lrange.style.backgroundImage = "linear-gradient(to right, hsl(" +h+ ", " +s+ "%, 0%), hsl(" +h+ ", " +s+ "%, 50%), hsl(" +h+ ", " +s+ "%, 100%))";
    
    arange.style.backgroundImage = "linear-gradient(to right, hsla(" +h+ ", 100%, 50%, 0), hsla(" + h+ ", 100%, 50%, .1), hsla(" + h+" , 100%, 50%, .2), hsla("+ h+ ", 100%, 50%, 1))";
    
    if(colorOn){
        addColor();
    }
    
}


function addColor(){
    alpha = a /100;
    hsl = "hsl("+h+","+s+"%,"+l+"%)";
    
    colorOn = true;
    colorButton.classList.remove("picker-active");
    colorButton.classList.add("active");
    if(isPlaying){
        pauseShow();
        playShow();
    } else {
        drawImage(1);
        drawColor();
        drawCaption(1);
    }
}

function removeColor(){    
    colorOn = false;
    colorButton.classList.remove("active");
    colorButton.classList.add("picker-active");
    drawImage(1);
    drawColor();
    drawCaption(1);
}

function resetColors(){
    hrange.value = "180";
    srange.value = "100";
    lrange.value = "50";
    arange.value = "25";
    
    changeColor();
}

function toggleColorButton(){
    //if transition picker showing, hide it
    if (transPickerShowing){
        transPicker.style.display = "none";
        //remove solid color
        transitionButton.classList.remove("picker-active");
        transPickerShowing = false;
    }

    //if color picker showing, hide it
    if (colorPickerShowing){
        colorPicker.style.display = "none";
        //remove solid color
        colorButton.classList.remove("picker-active");
        colorPickerShowing = false;
    }
    //if color picker NOT showing, show it
    else {
        colorPicker.style.display = "block";
        //make solid color
        colorButton.classList.add("picker-active");
        colorPickerShowing = true;
    }        

}

function toggleTransitionButton(){
    //if color picker showing, hide it
    if (colorPickerShowing){
        colorPicker.style.display = "none";
        //remove solid color
        colorButton.classList.remove("picker-active");
        colorPickerShowing = false;
    }

    //if color picker showing, hide it
    if (transPickerShowing){
        transPicker.style.display = "none";
        //remove solid color
        transitionButton.classList.remove("picker-active");
        transPickerShowing = false;
    }
    //if color picker NOT showing, show it
    else {
        transPicker.style.display = "block";
        //make solid color
        transitionButton.classList.add("picker-active");
        transPickerShowing = true;
    }
}

function start() {
    lastButton = document.getElementById("last-button");
    lastButton.addEventListener("click", lastClick, false);
    
    playButton = document.getElementById("play-button");
    playButton.addEventListener("click", togglePlay, false);
    
    nextButton = document.getElementById("next-button");
    nextButton.addEventListener("click", nextClick, false);
    
    orderButton = document.getElementById("order-button");
    orderButton.addEventListener("click", toggleOrder, false);
    
    directButton = document.getElementById("dir-button");
    directButton.addEventListener("click", toggleDirection, false);
    
    captionButton = document.getElementById("cap-button");
    captionButton.addEventListener("click", toggleCaption, false);
    
    transitionButton = document.getElementById("trans-button");
    transitionButton.addEventListener("click", toggleTransitionButton, false);
    
    colorButton = document.getElementById("color-button");
    colorButton.addEventListener("click", toggleColorButton,false);
    
    transPicker = document.getElementById("trans-picker");
    colorPicker = document.getElementById("color-picker");
    
    colorBox = document.getElementById("color-box");
    colorBox.addEventListener("click", addColor,false);
    
    hrange = document.getElementById("h-range");
    hrange.addEventListener("change", changeColor, false);
    
    srange = document.getElementById("s-range");
    srange.addEventListener("change", changeColor, false);
    
    lrange = document.getElementById("l-range");
    lrange.addEventListener("change", changeColor, false);
    
    arange = document.getElementById("a-range");
    arange.addEventListener("change", changeColor, false);
    
    reset =document.getElementById("reset-color");
    reset.addEventListener("click", resetColors, false)
    
    remove = document.getElementById("remove-color");
    remove.addEventListener("click", removeColor, false);
    
    timing = document.getElementById("timing");
    timing.addEventListener("change", changeTiming, false);
    
    transition = document.getElementById("transition");
    transition.addEventListener("change", changeTransition, false);
        
    c = document.getElementById("slideshow");
    ctx = c.getContext("2d");
    
    loadShow();     
}

window.addEventListener("load", start, false);