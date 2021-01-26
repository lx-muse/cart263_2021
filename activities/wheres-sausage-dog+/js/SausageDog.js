//INHERITANCE
class SausageDog extends Animal {
  constructor(x, y, image){
    //super() pass parameters from parent class
    super(x, y, image);
    //adding new parameters
    this.found = false;
    this.rotationSpeed = 0.25;
  }

  update(){
    //still does the update from animals
    super.update();

    if (this.found) {
      this.angle += this.rotationSpeed;
    }
  }

  mousePressed(){
    if(mouseX > this.x - this.image.width / 2 &&
    mouseX < this.x + this.image.width / 2 &&
    mouseY > this.y - this.image.height / 2 &&
    mouseY > this.y + this.image.height / 2) {
    this.found = true;
    }
  }
}
