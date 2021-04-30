  // from Dana

  class Circle {
    constructor() {
      this.x = random(0, width);
      this.y = random(0, height);
      this.speed = 1;
      this.vx = random(-this.speed, this.speed);
      this.vy = random(-this.speed, this.speed);
      this.size = 0;
      this.fill = {
        r: random(200, 255),
        g: random(200, 255),
        b: random(200, 255)
      };

      //Oscillator
      this.oscillator = new p5.Oscillator();
      this.nearFreq = 120;
      this.farFreq = 220;
      this.oscillator.amp(0.1);
      this.oscillator.start();

      // Synth with error
      // this.note = note;
      // this.synth = new p5.PolySynth();

    }

    move() {
      this.x += this.vx;
      this.y += this.vy;

      //update frequency
      let d = dist(this.x, this.y, width / 2, height / 2);
      let maxDist = dist(0, 0, width / 2, height / 2);
      let newFreq = map(d, 0, maxDist, this.nearFreq, this.farFreq);
      this.oscillator.freq(newFreq);

    }

    bounce() {
      if (this.x >= width || this.x <= 0) {
        this.vx = -this.vx;
        // this.playNote();
      }
      if (this.y >= height || this.y <= 0) {
        this.vy = -this.vy;
        // this.playNote();
      }
    }

    playNote() {
      //note, volume, delay, stain
      this.synth.play(this.note, 0.2, 0, 0.1);
    }


    display() {
      push();
      noStroke();
      fill(this.fill.r, this.fill.g, this.fill.b);
      ellipse(this.x, this.y, this.size);
      pop();
    }
  }
