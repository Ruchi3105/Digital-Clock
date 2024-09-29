let currentHours = document.getElementById('hrs')
let currentMinutes = document.getElementById('min')
let currentSeconds = document.getElementById('sec')

setInterval(()=>{
    let currentTime = new Date();
    currentHours.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours()
    currentMinutes.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes()
    currentSeconds.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds()
},1000)