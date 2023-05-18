var bpmIn, bpmOut, shadow, click, button, audio, tempo;
var bpm= 60;
var interval = 1000;
var isPlaying = false;
var audioOn = true;

var start;

function togglePlay() {
    if (isPlaying){
        stopMetro();
        button.innerHTML = "<i class='fas fa-play'></i>";
    }
    else {
        startMetro();
        button.innerHTML = "<i class='fas fa-pause'></i>";
    }
}

function toggleAudio() {
    if (audioOn){
        audioOn = false;
        audio.innerHTML = "Sound off <i class='fas fa-volume-off'></i>";
    }
    else {
        audioOn = true;
        audio.innerHTML = "Sound on <i class='fas fa-volume-up'></i>";
    }
}

function startMetro(){
    isPlaying = true;
    showShadow();
    start = setInterval(showShadow, interval);
}

function playClick(){
    click.play();
}

function stopMetro() {
    isPlaying = false;
    clearInterval(start);
    hideShadow();
}

function hideShadow(){
    shadow.style.display = "none";
}

function showShadow(){
    shadow.style.display = "inline-block";
    setTimeout(hideShadow, 200);
    if (audioOn){
        playClick();
    }
}

function setBPM() {
    bpm = bpmIn.value;
    bpmOut.innerHTML = bpm;
    
    interval = 60/bpm*1000;
    
    if (isPlaying){
        stopMetro();
        startMetro();
    }
    
    setTempo();
}

function setTempo(){
    if (bpm<=50){ tempo.value = "40";}
    if (50<bpm && bpm<=60){ tempo.value = "50"; }
    if (60<bpm && bpm<=66) { tempo.value = "60"; }
    if (66<bpm && bpm<=76) { tempo.value = "70"; }
    if (76<bpm && bpm<=90) { tempo.value = "80"; }
    if (90<bpm && bpm<=108) { tempo.value = "95"; }
    if (108<bpm && bpm<=120) { tempo.value = "110"; }
    if (120<bpm && bpm<=125) { tempo.value = "125"; }
    if (125<bpm && bpm<=140) { tempo.value = "130"; }
    if (140<bpm && bpm<=168) { tempo.value = "140"; }
    if (168<bpm) { tempo.value = "180"; }
}

function selectTempo() {
    num = tempo.value;
    setBPMTo(num);
}

function setBPMTo(num) {
    bpmIn.value = num;
    setBPM();
}

function loadMetroListeners() {

    bpmIn = document.getElementById("bpm-input");
    bpmIn.addEventListener("change", setBPM, false);
    
    button = document.getElementById("play-button");
    button.addEventListener("click", togglePlay, false);
    
    audio = document.getElementById("audio-toggle");
    audio.addEventListener("click", toggleAudio, false);
    
    tempo = document.getElementById("tempo");
    tempo.addEventListener("change", selectTempo, false);
    
    bpmOut = document.getElementById("BPM");
    shadow = document.getElementById("shadow");
    click = document.getElementById("click");
    setTempo();
}