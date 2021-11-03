let s13;
let iss;

var angle = 0;
var scalar = windowHeight/2;
varStartX = windowWidth;
varStartY = windowHeight;

function preload() {
    s13 = loadImage('s13.jpg');
    iss = loadImage('iss.jpg');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    angleMode(DEGREES);
    loadJSON("http://api.open-notify.org/astros.json", dataReceived);
}

function dataReceived(data) {
    data['people'].forEach(function (d) {
        $('#craft').append('<li>' + d['craft']+ '</li>');
    });
}

function draw() {
    var x = startX + scalar * cos(angle);
    var y = startY + scalar * sin(angle);
    image(s13, x, y, 100);
    angle++;
    image(iss, 500, 500)
}