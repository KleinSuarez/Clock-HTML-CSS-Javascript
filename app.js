const hoursContainer = document.querySelector('.hours')
const minutesContainer = document.querySelector('.minutes')
const secondsContainer = document.querySelector('.seconds')

const updateHour = setInterval(() => {
    const date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    hoursContainer.innerHTML = hour
    minutesContainer.innerHTML = minute
    secondsContainer.innerHTML = second
}, 1000)