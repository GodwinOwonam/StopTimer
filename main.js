const startingMinutes = 10;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown-timer-element');

// setInterval(updateCountdown, 1000);

function updateCountdown(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}

class Timer{
    static hours;
    static minutes;
    static seconds;
    static totaltime;

    constructor(){
        console.log("New timer created.");
    }

    updateTimer(){
        this.hours = Math.floor(this.totaltime/3600);
        this.minutes = Math.floor(this.totaltime/60);
        this.seconds= this.totaltime % 60;

        this.hours = this.hours < 10? '0' + this.hours : this.hours;
        this.minutes = this.minutes < 10? '0' + this.minutes : this.minutes;
        this.seconds = this.seconds < 10? '0' + this.seconds : this.seconds;
        
        this.totaltime ++;

        return this.hours, this.minutes, this.seconds;
    }
}


var timer = new Timer();

var startCta = document.getElementById('start-timer');

var hourText = document.getElementById('hours');
var minuteText = document.getElementById('minutes');
var secondText = document.getElementById('seconds');

startCta.addEventListener('click', () =>{
    console.log('timer started');
    hourText.innerHTML = setInterval(timer.updateTimer()[0],1000);
    minuteText.innerHTML = setInterval(timer.updateTimer()[1],1000);
    secondText.innerHTML = setInterval(timer.updateTimer()[2],1000);

    // setInterval(timer.updateTimer(hourText.innerHTML, minuteText.innerHTML, secondText.innerHTML ), 1);

});
