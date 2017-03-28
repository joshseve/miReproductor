var miRola = document.getElementById("miRola");

function playAudio(){
miRola.play();
}

function pauseAudio(){
miRola.pause();
}

function stopAudio(){
miRola.load();
}

function subirVolumen(){
miRola.volume+=0.1;
}

function bajarVolumen(){
miRola.volume-=0.1;
}

function adelantar(){
miRola.currentTime+=15;
}

function atrasar(){
miRola.currentTime-=15;
 }

miRola.ontimeupdate = function() {
var rango = document.getElementById("rango")
rango.value = miRola.currentTime;
};
