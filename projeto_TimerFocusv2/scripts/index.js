import {funções} from "./functions.js"
import sound from "./sounds.js"

let minutes  = document.querySelector(".minutes")
let seconds = document.querySelector(".seconds")
const play = document.querySelector(".play")
const pause = document.querySelector(".pause")
const btnStop = document.querySelector(".stop")
const plus = document.querySelector(".plus")
const less = document.querySelector(".less")
const tree = document.querySelector(".tree")
const store = document.querySelector(".store")
const fire = document.querySelector(".fire")
const rain = document.querySelector(".rain")
const container = document.querySelector(".container")
const btnMoon = document.querySelector(".moon")
const btnSun = document.querySelector(".sun")
var newSeconds = 60
let newMinutes = Number(minutes.textContent)
let auxMinutes = Number(minutes.textContent)

import Controls from "./controls.js"

export {play, pause, btnStop, fire, tree, rain, store, ativa}
export {seconds, minutes, newMinutes, newSeconds, auxMinutes}

const functions = funções({
  
})


const sounds = sound({})
const controls = Controls({
})

 //events

sounds.recent_volumeForest.addEventListener("change", function(){
  sounds.volumeForest()
})
sounds.recent_volumeRain.addEventListener("change", function(){
  sounds.volumeRain()
})
sounds.recent_volumeFire.addEventListener("change", function(){
  sounds.volumeFire()
})
sounds.recent_volumeCafe.addEventListener("change", function(){
  sounds.volumeCafe()
})


plus.addEventListener("click",()=>{
  functions.plusFive()})
  
less.addEventListener("click",()=>{ 
  functions.lessFive()})

  //select mode
  btnSun.addEventListener("click", ()=>{
    container.classList.add("mode")
    btnMoon.classList.remove("hiden")
    btnSun.classList.add("hiden")
  })

  btnMoon.addEventListener("click", ()=>{
    container.classList.remove("mode")
    btnMoon.classList.add("hiden")
    btnSun.classList.remove("hiden")
    
  })



//events sound

let ativa=0

fire.addEventListener("click", ()=>{
  fire.classList.toggle("addBg")
  fire.classList.toggle("addIcon")
  fire.classList.toggle("addBar")
  ativa++
  if (ativa  % 2 ==1 ){
    sounds.bgFire()
  } else {
    sounds.bgStop()
    ativa=0
  }
  
})
rain.addEventListener("click", ()=>{
  rain.classList.toggle("addBg")
  rain.classList.toggle("addIcon")
  rain.classList.toggle("addBar")

  ativa++
  if (ativa  % 2 ==1){
    sounds.bgRain()
    
  } else {
    sounds.bgStop()
    ativa=0    
  }
  
  
})
store.addEventListener("click", ()=>{
  store.classList.toggle("addBg")
  store.classList.toggle("addIcon")
  store.classList.toggle("addBar")
  ativa++
  if (ativa  % 2 ==1){
    sounds.bgCafe()
    
  } else {
    sounds.bgStop()
    ativa=0
  }
  
})

tree.addEventListener("click", ()=>{
  tree.classList.toggle("addBg")
  tree.classList.toggle("addIcon")
  tree.classList.toggle("addBar")
  ativa++
  if (ativa  % 2 ==1){
    sounds.bgFlorest()
    
  } else {
    sounds.bgStop()
    ativa=0
  }
  
})


 