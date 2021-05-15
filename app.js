const hourContainer = document.querySelector('.hour')

const updateHour = setInterval(() => {
    const date = new Date()
    hourContainer.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`
}, 1000)