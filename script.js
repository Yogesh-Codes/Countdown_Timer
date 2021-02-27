const secondsEl = document.getElementById('seconds');
const minutesEl = document.getElementById('mins');

const daysEl = document.getElementById('days');

const hoursEl = document.getElementById('hours');


const newYear = "28 Nov 2021"

function countdown(){
    const newYearsDate = new Date(newYear);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate)/1000;
    const days = Math.floor(totalSeconds/(3600*24))
    const hours = Math.floor(totalSeconds/3600) % 24;
    const minutes = Math.floor(totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    
    secondsEl.innerHTML = formatTime(seconds);
    minutesEl.innerHTML = formatTime(minutes);

    daysEl.innerHTML = formatTime(days);

    hoursEl.innerHTML = formatTime(hours);

}
function formatTime(time){
    return time < 10 ? `0${time}` : time;
}
setInterval(countdown, 1000);
