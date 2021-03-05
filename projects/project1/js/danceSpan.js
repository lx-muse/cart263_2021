class DanceSpan {
  constructor(element, x, y) {
    element.position(x, y);
    this.element = element;
    this.x = x;
    this.y = y;
    this.angle = 0;
  }

  brownian() {
    this.x += random(-6, 10);
    this.y += random(-6, 20);
    this.element.position(this.x, this.y);
    this.angle += 0.5;
  }

  move() {
    // this.x += sin(this.angle) * 6;
    this.x += sin(this.angle);
    this.y += sin(this.angle);
    this.element.position(this.x, this.y);
    this.angle += 0.5;

  }
}
