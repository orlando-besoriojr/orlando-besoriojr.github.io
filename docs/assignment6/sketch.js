
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    noStroke();
    rectMode(CENTER);
    loadJSON("http://api.open-notify.org/astros.json", dataReceived);
}

function dataReceived(data) {
    var number = data['number'];
    translate(width/2, height/2);
    for(var i = 0; i < number; i++) {
        rotate(TWO_PI / 10);
        fill(random(255), random(255), random(255));
        ellipse(400, 0, 175, 175);
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
    canvas.style(`transform: rotate(${frameCount}deg)`);
    rotate(radians(frameCount/100));
    if(keyIsPressed) {
        if(keyCode == LEFT_ARROW) {
            rotate()
        }
        if(keyCode == RIGHT_ARROW) {
            canvas.style(`transform: rotate(${frameCount}deg)`);
            rotate(radians(frameCount/100));
        }
    }
}