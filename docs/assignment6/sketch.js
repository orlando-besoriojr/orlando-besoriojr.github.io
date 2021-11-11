
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    background('#040c18');
    noStroke();
    rectMode(CENTER);
    loadJSON("http://api.open-notify.org/astros.json", dataReceived);
}

function dataReceived(data) {
    // Get number of astronauts.
    var number = data['number'];
    translate(width/2, height/2);
    // Set circle representing each person.
    for(var i = 0; i < number; i++) {
        rotate(TWO_PI / number);
        fill(random(255), random(255), random(255));
        ellipse(400, 0, 175, 175);
    }
    // Get and set name.
    data['people'].forEach(function (d) {
        rotate(TWO_PI / number);
        fill('white');
        text(d['name'], 450, 50, 175, 175, 100, 100);
    });
    // Get and set craft
    data['people'].forEach(function (d) {
        rotate(TWO_PI / number);
        fill('white');
        text(d['craft'], 450, 100, 175, 175);
    });
}

function draw() {
    // Start rotating canvas
    canvas.style(`transform: rotate(${frameCount}deg)`);
    rotate(radians(frameCount/100));
    // Stop rotating
    if(keyIsPressed === true) {
        if(keycode == LEFT_ARROW) {
            rotate(0);
        }
    }
}
