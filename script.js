var event = prompt("Enter your Event: ");
var eventDate = prompt("Enter date of that event to be occur (\"28 Nov 2021\"in this format) : ");

const secondsEl = document.getElementById('seconds');
const minutesEl = document.getElementById('mins');

const daysEl = document.getElementById('days');

const hoursEl = document.getElementById('hours');

const newYear = eventDate

document.getElementById('heading').innerHTML = event;
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
