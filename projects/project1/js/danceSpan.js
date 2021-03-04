class DanceSpan {
  constructor(element, x, y) {
    element.position(x, y);
    this.element = element;
    this.x = x;
    this.y = y;
    this.angle = 0;
  }

  brownian() {
    this.x += random(-6, 6);
    this.y += random(-6, 6);
    this.element.position(this.x, this.y);
  }

  sine(){
    this.angle += 0.05;
    this.x += sine(this.angle) * 6;
    this.y += sine(this.angle) * 6;
    this.element.position(this.x, this.y);
  }
}
