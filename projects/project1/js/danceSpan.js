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
    this.y += random(-2, 10);
    this.element.position(this.x, this.y);
    this.angle += 0.5;
  }

  move() {
    // this.x += sin(this.angle) * 6;
    this.x += sin(this.angle) * 6;
    this.y += sin(this.angle) * 6;
    this.element.position(this.x, this.y);
    this.angle += 5;

  }
}
