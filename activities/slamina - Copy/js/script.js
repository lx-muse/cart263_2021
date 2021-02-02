/*****************

Can you repeat that headline?
MC Lariviere

This is an activity in cart 263 presented to Pippin Barr & Dana\
headlines
github.com/dariusk/corpora/blob/master/data/words/crash_blossoms.json
******************/


const animals = [
  "12 ON THEIR WAY TO CRUISE AMONG DEAD IN PLANE CRASH",
  "2 SISTERS REUNITED AFTER 18 YEARS AT CHECKOUT COUNTER",
  "3 MISSING AFTER WAVES HIT MAINE LOCATED",
  "AMERICAN SHIPS HEAD TO GULF",
  "ASTRONAUTS EMERGE GAILY FROM CAPSULE",
  "ASTRONAUT TAKES BLAME FOR GAS IN SPACECRAFT",
  "BISCUIT LANDS HEAD FOR LOGGING",
  "BODY FIND IS MISSING MAN",
  "CHEVY UNVEILS THE RESTORED 1 MILLIONTH CORVETTE PULLED FROM A KENTUCKY SINKHOLE",
  "COMPLAINTS ABOUT NBA REFEREES GROWING UGLY",
  "DEALERS WILL HEAR CAR TALK AT NOON",
  "DRUNK GETS NINE MONTHS IN VIOLIN CASE",
  "ENRAGED COW INJURES FARMER WITH AX",
  "EYE DROPS OFF SHELF",
  "FRENCH PUSH BOTTLES UP GERMAN REAR",
  "GRANDMOTHER OF EIGHT MAKES HOLE IN ONE",
  "HEADLESS BODY FOUND IN TOPLESS BAR",
  "HERSHEY BARS PROTEST",
  "HOSPITALS ARE SUED BY 7 FOOT DOCTORS",
  "IKE TURNER BEATS TINA TO DEATH",
  "INCLUDE YOUR CHILDREN WHEN BAKING COOKIES",
  "IRAQI HEAD SEEKS ARMS",
  "JUVENILE COURT TO TRY SHOOTING DEFENDANT",
  "KIDS MAKE NUTRITIOUS SNACKS",
  "KILLER SENTENCED TO DIE FOR SECOND TIME IN 10 YEARS",
  "LACK OF BRAINS HINDERS RESEARCH",
  "LAWMEN FROM MEXICO BARBECUE GUESTS",
  "LETTER BOMBS ACCUSED IN COURT",
  "LIKE PUTTING ON BROCCOLI, OR CAULIFLOWER, AND RESULTS ARE PUMPY",
  "LUNG CANCER IN WOMEN MUSHROOMS",
  "MAN EATING PIRANHA MISTAKENLY SOLD AS PET FISH",
  "MAN HELD FOR ATTEMPTED MURDER OF POLICEMAN AFTER DETENTION FOR CONFINING GIRL EXPIRES",
  "MAN RATTLED BY PYTHON FOUND COILED UP AND HIDING IN HIS BOX OF CORN FLAKES",
  "MARINES BEAT OFF 500 VIET CONG",
  "MEXICO MINE MISSING DECLARED DEAD",
  "MILK DRINKERS ARE TURNING TO POWDER",
  "MINERS REFUSE TO WORK AFTER DEATH",
  "MONTY FLIES BACK TO FRONT",
  "OBAMA'S AD BUYS DWARF TV PRESENCE OF MCCAIN",
  "OLD SCHOOL PILLARS ARE REPLACED BY ALUMNI",
  "PANDA MATING FAILS; VETERINARIAN TAKES OVER",
  "PETITTE SCRATCHED WITH INFLAMED ELBOW",
  "POLICE BEGIN CAMPAIGN TO RUN DOWN JAYWALKERS",
  "PROSTITUTES APPEAL TO POPE",
  "QUARTER OF A MILLION CHINESE LIVE ON WATER",
  "QUEEN MARY HAVING BOTTOM SCRAPED",
  "REAGAN NOSE PIMPLE SKIN CANCER",
  "REAGAN WINS ON BUDGET, BUT MORE LIES AHEAD",
  "RED TAPE HOLDS UP NEW BRIDGE",
  "SAFETY EXPERTS SAY SCHOOL BUS PASSENGERS SHOULD BE BELTED",
  "SECRET DRACULA STAR TOOK TO GRAVE",
  "SHARK ATTACKS PUZZLE EXPERTS",
  "SMOKING RISKIER THAN THOUGHT",
  "SQUAD HELPS DOG BITE VICTIM",
  "STOLEN PAINTING FOUND BY TREE",
  "STUD TIRES OUT",
  "THOMPSON'S PEN IS A SWORD",
  "TWO SOVIET SHIPS COLLIDE, ONE DIES",
  "VIOLINIST LINKED TO JAL CRASH BLOSSOMS",
  "VOODOO DOGS FLYING DOCTOR'S PLANES",
  "WHY SOME WOMEN RISK HAVING CHILDREN WITH BIRTH DEFECTS",
  "WOMAN BURNED AS BABY TRACKS DOWN NURSE WHO CARED FOR HER"
];


// why backticks for empty strings?
let currentAnimal = ``;
let currentAnswer = ``;

let img;

//to keep track of match
let fakeNews = 0;
let fakeNewsText = "passed:";

let news = 0;
let newsText = "caught:";


// Description of preload
function preload() {

}

// Description of setup

function setup() {
  createCanvas(750, 520);
  img = loadImage("assets/images/newspaper.png");
}


// Description of draw()

function draw() {
  //display background
  background(255);
  tint(255, 25);
  image(img, 0, 0, img.width / 2, img.height / 2);

  // display instruction on mouse
  fill(0);
  textSize(12);
  text("click on page", mouseX, mouseY);
  //displays fake headlines
  push();
  fill(255, 0, 0);
  stroke(50);
  textSize(20);
  text(currentAnimal, 15, height / 2 - 50, 200, 200);
  pop();

  if (annyang) {
    let commands = {
      '*animal': guessAnimal
    };
    annyang.addCommands(commands);
    annyang.start();
    console.log('annyang');

    //display what is understood by annyang
    push();
    text(currentAnswer, width / 3, height / 2 - 20, 200, 200);
    fill(0, 0, 255);
    textSize(32);
    textStyle(BOLD);
    pop();
  }
    //filter counter
    text(newsText + "\n" + news, width / 3, height - 100);
    text(fakeNewsText + "\n" + fakeNews, width / 2, height - 100);


}


function mousePressed() {
  currentAnimal = random(animals);

  //  let reverseAnimal = reverseString(currentAnimal);
  responsiveVoice.speak(currentAnimal, "US English Male", {
    volume: 1,
    onend: checkMatch
  });


}

function guessAnimal(animal) {
  currentAnswer = animal.toUpperCase();
  console.log(currentAnswer);
}

function checkMatch(){

    if (currentAnswer === currentAnimal) {
      console.log("match");
      fakeNews = fakeNews += 1 ;
      fill(0, 255, 0);
    }
    else {
      news = news += 1 ;
      fill(255, 0, 0);
    }

}


//
// /**
// Reverses the provided string
// */
// function reverseString(string) {
//   // Split the string into an array of characters
//   let characters = string.split('');
//   // Reverse the array of characters
//   let reverseCharacters = characters.reverse();
//   // Join the array of characters back into a string
//   let result = reverseCharacters.join('');
//   // Return the result
//   return result;
// }
