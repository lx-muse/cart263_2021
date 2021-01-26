class Animal{
  constructor(x, y, image){
    this.x = x;
    this.y = y;
    this.image = image;

    this.angle = 0;
  }

  update() {
    this.display();
  }

  display() {
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.image, 0, 0);
    pop();
  }

  //from Pippin's github
    // overlap(x,y)
    // Checks whether the position x,y is inside this animal's image
    // Returns: true if the click was inside the image and false otherwise
    overlap(x, y) {
      // Check if the x is greater than the left side and less that the right side
      // and greater than the top and less than the bottom of the image
      // Uses the width and height properties of the image to track its size
      if (x > this.x - this.image.width / 2 &&
        x < this.x + this.image.width / 2 &&
        y > this.y - this.image.height / 2 &&
        y < this.y + this.image.height) {
        return true;
      }
      else {
        return false;
      }
    }

}
