let img;
function preload() {
  img = loadImage('earth.png');
}


function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    noStroke();
    rectMode(CENTER);
    loadJSON("http://api.open-notify.org/astros.json", dataReceived);
}

function dataReceived(data) {
    var number = data['number'];
    var x = 400;
    var y = 0;

    image(img, 0, 0);
    image(img, 50, 0, 40, 20, 50, 50, 50, 50);


    translate(width/2, height/2);
    for(var i = 0; i < number; i++) {
        rotate(TWO_PI / 10);
        fill(random(255), random(255), random(255));
        ellipse(x, y, 175, 175);
    }
    data['people'].forEach(function (d) {
        rotate(TWO_PI / 10);
        fill('black');
        text(d['name'], 450, 50, 175, 175);
    });
    data['people'].forEach(function (d) {
        rotate(TWO_PI / 10);
        fill('black');
        text(d['craft'], 450, 100, 175, 175);
    });
}

function mouseClicked() {
}

function draw() {
    canvas.style(`transform: rotate(${frameCount}deg)`)
    rotate(-radians(frameCount/200))
    if(!mousePressed) {
        frameCount = 0;
    }
    return false;
}