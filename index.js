const inputEl = document.getElementById('input-el')
const convertBtn = document.getElementById('convert-btn')
const lengthEl = document.getElementById('length-el')
const volumeEl = document.getElementById('volume-el')
const massEl = document.getElementById('mass-el')

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204


convertBtn.addEventListener('click', function(){
    let baseValue = inputEl.value 
    lengthEl.innerHTML += `<p>${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue/meterToFeet).toFixed(3)} meters </p>`
    volumeEl.innerHTML += `<p>${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue / literToGallon).toFixed(3)} liters </p>`
    massEl.innerHTML += `<p>${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue / kiloToPound).toFixed(3)} kilos </p>`
    
})

