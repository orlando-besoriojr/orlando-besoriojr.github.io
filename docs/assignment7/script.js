// Youtube tutorial for a stopwatch
// https://www.youtube.com/watch?v=1INmsFnD-u4
// There was a stopwatch because I originally thought of creating a speedrun leaderboard. But that became too big of a project, so I scrapped it last minute to make this project.
// This turned into a reflection on how to view this art piece since when I first saw it, I was just confused as to what its purpose was.
// The second stopwatch is used to compare the users initial and mostly visual reaction to their more interactive exploration of the piece.



let seconds1 = 0;
let minutes1 = 0;

let seconds2 = 0;
let minutes2 = 0;

let timeSeconds1 = 0;
let timeMinutes1 = 0;

let timeSeconds2 = 0;
let timeMinutes2 = 0;

let interval = null;
let interval2 = null;

let state = 0;
let state2 = 0;

function stopWatch1() {
    seconds1++;
    
    if(seconds1 / 60 === 1) {
        seconds1 = 0;
        minutes1++;
    }

    if(seconds1 < 10) {
        timeSeconds1 = "0"+seconds1.toString();
    }
    else {
        timeSeconds1 = seconds1;
    }

    if(minutes1 < 10) {
        timeMinutes1 = "0"+minutes1.toString();
    }
    else {
        timeMinutes1 = minutes1;
    }

    document.getElementById("time").innerHTML = timeMinutes1 + ":" + timeSeconds1;
}

function startStop1() {
    if(state === 0) {
        interval = window.setInterval(stopWatch1, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        state = 1;
    }
    else {
        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        state = 0;

        let min1 = timeMinutes1;
        let sec1 = timeSeconds1;

        let div = document.getElementById("emptyDiv");
        let inDiv = document.createElement("div");
        inDiv.classList.add("add");
        inDiv.innerHTML = timeMinutes1 + ":" + timeSeconds1;
        div.appendChild(inDiv);

    }
}

function reset1() {
    window.clearInterval(interval);
    state = 0;
    seconds1 = 0;
    minutes1 = 0;
    document.getElementById("time").innerHTML = "00:00";
    document.getElementById("startStop").innerHTML = "Start";
}


function stopWatch2() {
    seconds2++;
    
    if(seconds2 / 60 === 1) {
        seconds2 = 0;
        minutes2++;
    }

    if(seconds2 < 10) {
        timeSeconds2 = "0"+seconds2.toString();
    }
    else {
        timeSeconds2 = seconds2;
    }

    if(minutes1 < 10) {
        timeMinutes2 = "0"+minutes2.toString();
    }
    else {
        timeMinutes2 = minutes2;
    }

    document.getElementById("time2").innerHTML = timeMinutes2 + ":" + timeSeconds2;
}

function startStop2() {
    if(state2 === 0) {
        interval2 = window.setInterval(stopWatch2, 1000);
        document.getElementById("startStop2").innerHTML = "Stop";
        state2 = 1;
    }
    else {
        window.clearInterval(interval2);
        document.getElementById("startStop2").innerHTML = "Start";
        state2 = 0;
    }
}

function reset2() {
    window.clearInterval(interval2);
    state2 = 0;
    seconds2 = 0;
    minutes2 = 0;
    document.getElementById("time2").innerHTML = "00:00";
    document.getElementById("startStop2").innerHTML = "Start";
}


