document.addEventListener('DOMContentLoaded', ()=>{
    const nextGame = new Date('Sep 4 2022 17:00:00');

    const daysVal=document.querySelector('.time-count-days .time-count-val');
    const hoursVal=document.querySelector('.time-count-hours .time-count-val');
    const minutesVal=document.querySelector('.time-count-minutes .time-count-val');
    const secondsVal=document.querySelector('.time-count-seconds .time-count-val');

    const daysText=document.querySelector('.time-count-days .time-count-text');
    const hoursText=document.querySelector('.time-count-hours .time-count-text');
    const minutesText=document.querySelector('.time-count-minutes .time-count-text');
    const secondsText=document.querySelector('.time-count-seconds .time-count-text');

    const timeCount = ()=>{
        let now = new Date();
        let leftUntil = nextGame-now;

        let days = Math.floor(leftUntil/1000/60/60/24);
        let hours = Math.floor(leftUntil/1000/60/60)%24;
        let minutes = Math.floor(leftUntil/1000/60)%60;
        let seconds = Math.floor(leftUntil/1000)%60;

        daysVal.textContent = days;
        hoursVal.textContent = hours;
        minutesVal.textContent = minutes;
        secondsVal.textContent = seconds;
    };
    timeCount();
    setInterval(timeCount,1000);
});