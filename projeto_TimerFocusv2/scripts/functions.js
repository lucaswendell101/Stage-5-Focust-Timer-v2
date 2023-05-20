import Sounds from "./sounds.js"
import {play, pause, btnStop, fire, tree, rain, store,} from "./index.js"
import {seconds, auxMinutes} from "./index.js"

// let minutes  = document.querySelector(".minutes")
const sounds = Sounds({})

let minutes  = document.querySelector(".minutes")
let newSeconds = 60
let ativa = 0
let newMinutes = Number(minutes.textContent)


export function funções({}){
let cont=0
let timerOut
function minutesDisplay(){
  seconds.textContent = String(newSeconds).padStart(2,"0")
  minutes.textContent = String(newMinutes).padStart(2,"0")
 
}
 function playClock(){
  play.classList.add("hiden")
  pause.classList.remove("hiden")
 }

 function pauseClock(){
  play.classList.remove("hiden")
  pause.classList.add("hiden")
 }

 function stopClock(){
  pauseClock()
 } 

 function countdown(){
  timerOut = setTimeout(function(){
    
    if (newSeconds==60){
      --newMinutes
    }

    newSeconds = newSeconds - 1
    
    
    minutesDisplay()  
      
   
    if (newSeconds==0 && newMinutes==0){

      pauseClock()
      
      reset()
      return}
      
    if (newSeconds<=0){
      newSeconds=60
    }
      
    countdown()} 
     
    
    , 100) 
  
}

function plusFive(){
  newMinutes = Number(minutes.textContent)+5
  minutes.textContent = String(newMinutes).padStart(2,"0")
}
function lessFive(){  
  if (newMinutes>5){
    newMinutes = Number(minutes.textContent)-5
    minutes.textContent = String(newMinutes).padStart(2,"0")
  }else{
    alert("Você tem menos de 5 minutos")
  }
}

function hold(){
  clearTimeout(timerOut)
}

function reset(){
  newMinutes = auxMinutes;
  newSeconds =10;
  minutes.textContent = String(newMinutes).padStart(2,"0")
  seconds.textContent = '00'

  fire.classList.remove("addBg")
  fire.classList.remove("addIcon")
  tree.classList.remove("addBg")
  tree.classList.remove("addIcon")
  rain.classList.remove("addBg")
  rain.classList.remove("addIcon")
  store.classList.remove("addBg")
  store.classList.remove("addIcon")
  ativa=0
  sounds.bgStop()


  return ativa
}

function contador(){
  
  cont++
  return cont
}
return{

  stopClock,
  countdown,
  plusFive,
  lessFive,
  minutesDisplay,
  playClock,
  pauseClock,
  hold,
  reset,
  contador

}
}

