class Boat {
  constructor(x, y, angle) {
    // this.element= element;
    this.x = x;
    this.y = y;
    //   this.size = size;
    this.angle = 1;
  }

  move() {
    this.x = this.x;
    this.y = this.y;
    // this.y += random(-2, 10);
    // this.element.position(this.x, this.y);
    this.angle += random(-2, 2);
  }

  display() {
    push();
    // noStroke();
    fill(204, 100);
    triangle(288, 200, 200, 360, 288, 360);
    triangle(288, 200, 288, 360, 360, 360);
    //top right /top left/bottom left/ bottom right
    quad(400, 300, 172, 300, 200, 360, 360, 360);
    pop();

  }
}
