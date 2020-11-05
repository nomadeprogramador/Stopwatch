const relogio = document.querySelector('.relogio');

const start = document.querySelector('#start');
const pause =document.querySelector('#pause')
const reset = document.querySelector('#reset')
let segundos = 0 ;
let timer ;
function pausaClock(){
    clearInterval(timer)
}
function iniciaClock(){
    timer  = setInterval(function(){
        segundos++;
    relogio.innerHTML=segundosClock(segundos)
    },1000)
}

function segundosClock(segundos){
    const data = new Date(segundos*1000)
    return data.toLocaleTimeString('pt-BR',{
        hour12:false,
        timeZone :'UTC',   
    }

)}
function zerarClock(){
    clearTimeout(timer)

}
start.addEventListener('click',function(event){
    relogio.classList.remove('pausaCor')
    clearInterval(timer)
    iniciaClock()
    
})
pause.addEventListener('click',function(event){
    relogio.classList.add('pausaCor')
    clearInterval(timer)
    pausaClock()
})
reset.addEventListener('click',function(event){
    clearInterval(timer)
    relogio.innerHTML='00:00:00'
    segundos=0
})
