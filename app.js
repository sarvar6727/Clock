const numbers = document.querySelectorAll('.numbers')

const hourMile = document.getElementById('hour')
const minuteMile = document.getElementById('minute')
const secondMile = document.getElementById('second')

let degree = 30

numbers.forEach(num => {
    num.style.transform = `rotate(${degree}deg)`
    degree += 30
})

function setTime(){
    const date = new Date()

    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    let secondsRotation = seconds * 6
    let minutesRotation = minutes * 6
    let hoursRotation = hours * 30 + minutesRotation / 12

    secondMile.style.transform = `rotate(${secondsRotation}deg)`
    minuteMile.style.transform = `rotate(${minutesRotation}deg)`
    hourMile.style.transform = `rotate(${hoursRotation}deg)`
}

setInterval(() => {
    setTime()
}, 1000)