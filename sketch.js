var spaceShip, spaceShipImg;
var meteor, meteorImg;
var meteor2, meteor2Img;
var earth, earthImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload() {
  bg = loadImage("space.jpg")
  spaceShipImg = loadImage("spaceShip.png")
  meteorImg = loadImage("meteor.png")
  meteor2Img = loadImage("meteor2.png")
  earthImg = loadImage("earth.png");
  
}

function setup() {
  createCanvas(800, 400);
  spaceShip = createSprite(700, 100, 50, 50);
  spaceShip.addImage("spaceShip", spaceShipImg);
  spaceShip.scale = 0.7;
  //spaceShip.debug = true;
  spaceShip.setCollider("rectangle", 0, 0, 130, 100);


  earth = createSprite(180, 270, 50, 50);
  earth.addImage("spaceShip", earthImg);
  earth.scale = 0.4;
  earth.debug = false;


}


function draw() {
  background(bg);
   
    if (gameState === PLAY) {
      if (keyDown(RIGHT_ARROW)) {
        spaceShip.x += 2;
    }

    if (keyDown(LEFT_ARROW)) {
      spaceShip.x -= 2;
    }

    if (keyDown(UP_ARROW)) {
      spaceShip.y -= 2;
    }

    if (keyDown(DOWN_ARROW)) {
      spaceShip.y += 2;
    }

    spawnMeteor();



  }

 



  drawSprites();
}



