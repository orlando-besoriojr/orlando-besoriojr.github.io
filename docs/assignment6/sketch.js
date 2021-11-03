function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
    loadJSON("http://api.open-notify.org/astros.json", dataReceived);
}

function dataReceived(data) {
    background(240);
    translate(width/2, height/2);
    for(var i = 0; i < data.number; i++) {
        push();
        rotate(TWO_PI* i / 8);
        fill(random(255), random(255), random(255));
        ellipse(300, 0, 100, 100);
        push();
    }
}

function draw() {

}