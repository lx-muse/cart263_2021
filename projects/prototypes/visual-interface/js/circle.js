  // from Dana

class Circle {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.speed = 3;
    this.vx = random(-this.speed, this.speed);
    this.vy = random(-this.speed, this.speed);
    this.size = 0;
  }

  move() {
    if (this.x >= width || this.x <= 0) {
      this.vx = -this.vx
    }
    if (this.y >= height || this.y <= 0) {
      this.vy = -this.vy
    }

    this.x += this.vx;
    this.y += this.vy;
  }

  display() {
    push();
    fill(255, 0, 0);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}
