function Rain() {
  this.x = random(0, width);
  this.y = random(0, -400);
  this.z = random(2, 5);
  this.r = random(30, 80);
  this.speedY = random(15, 20);
  this.H = random(17, 64);
  this.S = random(0, 10);
  this.L = random(90, 100);
  this.A = random(0.0001, 0.02);

  this.show = function () {
    noStroke();
    fill(this.H, this.S, this.L, this.A);
    rect(this.x, this.y, this.z, this.r);
  };

  this.update = function () {
    if (mouseX / width < 0.25) {
      this.y += random(2, 3);
    }
    if (mouseX / width > 9 / 12) {
        this.A = random(0.1, 0.2)
    }
    this.y += (this.speedY * mouseX) / width;

    if (this.y > height) {
      this.y = random(0, -400);
    }
  };
}
