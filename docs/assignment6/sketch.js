var img;
function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    img = loadImage('s13.jpg');
    loadJSON("http://api.open-notify.org/astros.json", dataReceived);
}

function dataReceived(data) {
    data['people'].forEach(function (d) {
        $('#craft').append('<li>' + d['craft']+ '</li>');
    });
}

function draw() {
    image(img, 400, 400);
}