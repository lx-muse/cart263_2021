class Boat {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;

  }
  move() {

  }

  display() {
    push();
    // noStroke();
    fill(204, 100);
    triangle(288, 200, 200, 360, 288, 360);
    triangle(288,200,288, 360, 360, 360 );
    //top right /top left/bottom left/ bottom right
    quad(400, 300, 172, 300, 200, 360, 360, 360);



    pop();

  }
}
