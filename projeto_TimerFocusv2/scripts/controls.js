
import {play, pause, btnStop} from "./index.js"
import {funções} from "./functions.js"
import Sounds from "./sounds.js"

let ativa = 0

const functions=funções({})
const sounds = Sounds({})
function Controls() {
  play.addEventListener("click", ()=>{
    functions.countdown()
    functions.playClock()
    
   })
   pause.addEventListener("click",()=>{
    
    functions.pauseClock()
    clearTimeout(functions.hold())
  
   })

   btnStop.addEventListener("click",()=>{
    clearTimeout(functions.hold())
    functions.pauseClock()
     functions.reset() 
     ativa=0
  
     if (true){
      sounds.bgStop()
     }
     
    })
  return{
   
    }
  
  }

  export default Controls

  