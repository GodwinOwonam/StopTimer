let time = 0; var timerVal;

var startCta = document.getElementById('start-timer');
var pauseCta = document.getElementById('pause-timer');
var resetCta = document.getElementById('reset-timer');

var startCtaText = document.getElementById('start-cta-text');

var hourText = document.getElementById('hours');
var minuteText = document.getElementById('minutes');
var secondText = document.getElementById('seconds');

startCta.addEventListener('click', () =>{
    startCta.classList.add("hidden");
    if(pauseCta.classList.contains('hidden')){
        pauseCta.classList.remove('hidden');
    }
    timerVal = setInterval(updateTimer, 1000);

});

pauseCta.addEventListener('click', () => {
    pauseTimer();
    startCtaText.innerHTML = 'Continue';
    pauseCta.classList.add('hidden');
    startCta.classList.remove('hidden');
});

resetCta.addEventListener('click', () =>{
    startCtaText.innerHTML = 'Start';

    if(startCta.classList.contains('hidden')){
        startCta.classList.remove("hidden");
    }

    if(!pauseCta.classList.contains('hidden')){
        pauseCta.classList.add('hidden');
    }
    resetTimer();
});

function updateTimer(){
    var hours = Math.floor(time/3600)
    var minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10? '0' + seconds : seconds;
    minutes = minutes < 10? '0' + minutes : minutes;
    hours = hours < 10? '0' + hours : hours;

    hourText.innerHTML = `${hours}`;
    minuteText.innerHTML = `${minutes}`;
    secondText.innerHTML = `${seconds}`;    
    
    // countdownEl.innerHTML = `${minutes}:${seconds}`;
    time++;
}


function pauseTimer() {
    time = hourText.innerHTML * 3600 + minuteText.innerHTML * 60 + secondText.innerHTML;

    hourText.innerHTML = hourText.innerHTML;
    minuteText.innerHTML = minuteText.innerHTML;
    secondText.innerHTML = secondText.innerHTML;  

    clearInterval(timerVal);
}

function resetTimer() {
    clearInterval(timerVal);
    time = 0;
    hourText.innerHTML = '00';
    minuteText.innerHTML = '00';
    secondText.innerHTML = '00'; 
}