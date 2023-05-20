
export default function Sounds(){

let soundFlorest = new Audio("./sounds/Floresta.wav")
let soundFire = new Audio("./sounds/Lareira.wav")
let soundCafe = new Audio("./sounds/Cafeteria.wav")
let soundRain = new Audio("./sounds/Chuva.wav")

let recent_volumeForest = document.querySelector('#volumeForest');
let recent_volumeFire = document.querySelector('.volumeFire');
let recent_volumeRain = document.querySelector('.volumeRain');
let recent_volumeCafe = document.querySelector('.volumeCafe');

function volumeForest(){
  soundFlorest.volume = recent_volumeForest.value /100;
}
function volumeFire(){
  soundFire.volume = recent_volumeFire.value /100;
}
function volumeRain(){
  soundRain.volume = recent_volumeRain.value /100;
}
function volumeCafe(){
  soundCafe.volume = recent_volumeCafe.value /100;
}

//BACKGROUND SOUNDS
function bgFlorest(){
  volumeForest()
  soundFlorest.play()
}

function bgFire(){
  volumeFire()
  soundFire.play()
}

function bgCafe(){
  volumeCafe()
  soundCafe.play()
}
function bgRain(){
  volumeRain()
  soundRain.play()
}

function bgStop(){
  soundFire.pause();
  soundCafe.pause();
  soundRain.pause();
  soundFlorest.pause();
}

return {
  bgFlorest,
  bgFire,
  bgRain,
  bgCafe,
  bgStop,
  volumeForest,
  volumeFire,
  volumeRain,
  volumeCafe,
  recent_volumeForest,
  recent_volumeFire,
  recent_volumeRain,
  recent_volumeCafe
}
}
