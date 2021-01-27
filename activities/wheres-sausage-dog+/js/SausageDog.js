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
    //somehow tracks the end of the game too? Theres something to explore here
    if (this.found) {
      this.angle += this.rotationSpeed;
    }
  }

//if the sausage dog isn<t found and we detect the overlap from Animal
  mousePressed(){
    if(!this.found && this.overlap(mouseX, mouseY)) {
    this.found = true;
    }
  }
}
