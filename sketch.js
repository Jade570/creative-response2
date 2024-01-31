let song = [];
let state = 0;
let bgcolor = 0;


function preload() {
  soundFormats("wav");
  for (let i = 1; i < 4; i++) {
    song[i - 1] = loadSound("assets/CR2 a" + i);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL);
  textAlign(CENTER, CENTER);
  fill(0);
  text("click to play", width / 2, height / 2);
}

function draw() {
  if (state > 0) {
    bgcolor+=map(mouseX,0,width,0.1,2);
    background(bgcolor%360, map(mouseX,0,width,6,70), map(mouseX,0,width,30,60));
    if (mouseX < (width * 3) / 12) {
      song[0].setVolume(1);
      song[1].setVolume(0);
      song[2].setVolume(0);

    } else if (mouseX < (width * 5) / 12) {
      song[0].setVolume(map(mouseX, (width * 3) / 12, (width * 5) / 12, 1, 0));
      song[1].setVolume(map(mouseX, (width * 3) / 12, (width * 5) / 12, 0, 1));
      song[2].setVolume(0);
    } else if (mouseX < (width * 7) / 12) {
      song[0].setVolume(0);
      song[1].setVolume(1);
      song[2].setVolume(0);
    } else if (mouseX < (width * 9) / 12) {
      song[0].setVolume(0);
      song[1].setVolume(map(mouseX, (width * 7) / 12, (width * 9) / 12, 1, 0));
      song[2].setVolume(map(mouseX, (width * 7) / 12, (width * 9) / 12, 0, 1));
    } else {
      song[0].setVolume(0);
      song[1].setVolume(0);
      song[2].setVolume(1);

    }
  }
}

function mousePressed() {
  if (state == 0) {
    song.forEach((e) => {
      e.loop();
    });
  }

  state++;
}
