let song = [];
let state = 0;

function preload() {
  soundFormats('wav');
  for(let i = 1; i<4; i++){
    song[i-1] = loadSound('assets/CR2 a'+i);
  }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
    fill(0);
    text ('click to play', width/2, height/2);
  }
  
function draw() {
    song[0].setVolume(max(1-(mouseX/(width/2)),0))
    song[1].setVolume(1-abs((width/2-mouseX)/(width/2)))
    song[2].setVolume((max(0,(mouseX)/width-1/2)))
    if(state > 0){
      fill(255);
    }
}

function mousePressed(){
  state++;
  song.forEach(e=>{
    e.loop();
  })
}

