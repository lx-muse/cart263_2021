  // from Dana

class Circle {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.speed = 3;
    this.vx = random(-this.speed, this.speed);
    this.vy = random(-this.speed, this.speed);
    this.size = 0;
    this.fill = {
      r: random (200, 255),
      g: random (200, 255),
      b: random (200, 255)
    };
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  bounce(){
    if (this.x >= width || this.x <= 0) {
      this.vx = -this.vx
    }
    if (this.y >= height || this.y <= 0) {
      this.vy = -this.vy
    }
  }

  display() {
    push();
    noStroke();
    fill(this.fill.r, this.fill.g, this.fill.b);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
