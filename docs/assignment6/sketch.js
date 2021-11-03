let s13;
let iss;

function preload() {
    s13 = loadImage('s13.jpg');
    iss = loadImage('iss.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    loadJSON("http://api.open-notify.org/astros.json", dataReceived);
}

function dataReceived(data) {
    for (let i = 0; i < data['craft'].number; i++) {
        fill(random(255), random(255), random(255));
        ellipse(random(width),random(height),150,150, 50);
  }

    data['people'].forEach(function (d) {
        $('#craft').append('<li>' + d['craft']+ '</li>');
    });
}

function draw() {
}