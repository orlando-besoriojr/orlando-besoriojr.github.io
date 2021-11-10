let seconds1 = 0;
let minutes1 = 0;

let displaySeconds1 = 0;
let displayMinutes1 = 0;

function stopWatch1() {
    seconds1++;
    
    if(seconds1 / 60 === 1) {
        seconds1 = 0;
        minutes1++;
    }

    if(seconds1 < 10) {
        displaySeconds1 = "0"+seconds1.toString();
    }
    else {
        displaySeconds1 = seconds1;
    }

    if(minutes1 < 10) {
        displayMinutes1 = "0"+minutes1.toString();
    }
    else {
        displayMinutes1 = minutes1;
    }
}

window.setInterval(stopWatch1, 1000);
