// Saving all the images,animations and sounds in the computer memory
var backgroundIMG;
var buttonIMG;
var downFacingSpikeIMG;
var endingPortalIMG;
var groundIMG;
var groundStripIMG;
var headingIMG;
var lavaFireballIMG;
var lavaIMG;
var leftFacingSpikeIMG;
var levelButton1IMG;
var levelButton2IMG; 
var levelButton3IMG;
var levelButton4IMG;
var levelButton5IMG;
var lockLevelIMG;
var returnButtonIMG;
var rightFacingSpikeIMG;
var startingPortalIMG;
var upFacingSpikeIMG;
var witchFireballIMG;
var witchIMG;
var knightIMG;

var knightWalkingANM;

var themeSound;
var levelsBackgroundSound;

// Saving all the sprites and groups in the computer memory
var Background;
var creditButton;
var returnButton;
var introButton;
var playButton;
var lavaFireball;
var witchFireball;
var level1, level2, level3, level4, level5;
var returnForLevel;
var ElevatorHelper1InLevel5, ElevatorHelper2InLevel5;
var spike1;
var spike2;
var spike3;
var knight;
var witch;
var ground1,ground2,ground3,ground4,ground5,ground6,ground7,ground8,ground9,ground10,ground11,ground12,ground13,ground14,ground15,ground16,ground17,ground18,ground19,ground20,ground21,ground22,ground23,ground24,ground25,ground26;
var collider1,collider2,collider3,collider4,collider5,collider6,collider7,collider8,collider9,collider10,collider11,collider12,collider13,collider14,collider15,collider16,collider17,collider18,collider19,collider20,collider21,collider22,collider23,collider24,collider25,collider26,collider27,collider28,collider29,collider30,collider31,collider32,collider3;3

var spikeGroup; 
var lavaFireballGroup;
var witchFireballGroup;

// Creating gamestate
var gamestate = 'home';

// Creating the lock variable to make locked levels inaccessible
var lockingVariableForLevels = 1;




function preload() {
  
  // Loading all the images
  backgroundIMG = loadImage('images/backgroundImage.jpg');
  buttonIMG = loadImage('images/buttonImage.png');
  downFacingSpikeIMG = loadImage('images/spikes/downFacingSpikeImage.png');
  endingPortalIMG = loadImage('images/endingPortalImage.png');
  groundIMG = loadImage('images/groundImage.png');
  groundStripIMG = loadImage('images/groundStripsImage.png');
  headingIMG = loadImage('images/headingImage.png');
  lavaFireballIMG = loadImage('images/lavaFireballImage.png');
  lavaIMG = loadImage('images/lavaImage.png');
  leftFacingSpikeIMG = loadImage('images/spikes/leftFacingSpikeImage.png');
  levelButton1IMG = loadImage('images/levels/level1ButtonImage.png');
  levelButton2IMG = loadImage('images/levels/level2ButtonImage.png');
  levelButton3IMG = loadImage('images/levels/level3ButtonImage.png');
  levelButton4IMG = loadImage('images/levels/level4ButtonImage.png');
  levelButton5IMG = loadImage('images/levels/level5ButtonImage.png');
  lockLevelIMG = loadImage('images/levels/lockImage.png');
  returnButtonIMG = loadImage('images/returnButtonImage.png');
  rightFacingSpikeIMG = loadImage('images/spikes/rightFacingSpikeImage.png');
  startingPortalIMG = loadImage('images/startingPortalImage.png');
  upFacingSpikeIMG = loadImage('images/spikes/upFacingSpikeImage.png');
  witchFireballIMG = loadImage('images/witchFireballImage.png');
  witchIMG = loadImage('images/witchImage.png');
  knightIMG = loadAnimation('images/standingKnightImage.png');
  
  // Loading the animation
  knightWalkingANM = loadAnimation(
    'knightWalking/1.png',
    'knightWalking/2.png',
    'knightWalking/3.png',
    'knightWalking/4.png',
    'knightWalking/5.png'
  );

  // Loading all the sounds
  themeSound = loadSound('sounds/themeSound.mp3');
  levelsBackgroundSound = loadSound('sounds/levelsBackgroundSound.ogg');
}




function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Calling the functions
  grounds();
  invisibleCollidersForLevel3();
  invisibleCollidersForLevel4();

  // Creating the sprites
  Background = createSprite(width/2, height/2);
  Background.addImage(backgroundIMG);
  Background.scale = 1.8;

  returnButton = createSprite(70, 70);
  returnButton.addImage(returnButtonIMG);
  returnButton.scale = 0.3;

  introButton = createSprite(width/2+75, height/2+250);
  introButton.addImage(buttonIMG);
  introButton.scale = 1.3;
  introButton.setCollider('rectangle', -75, -15, 230, 110);

  playButton = createSprite(width/2+75, height/2+50);
  playButton.addImage(buttonIMG);
  playButton.scale = 1.3;
  playButton.setCollider('rectangle', -75, -15, 230, 110);

  creditButton = createSprite(width-70, height-55);
  creditButton.addImage(buttonIMG);
  creditButton.scale = 0.7;
  creditButton.setCollider('rectangle', -75, -15, 230, 110);

  level1 = createSprite(width/4-150, height/2-height/8);
  level1.addImage(levelButton1IMG);
  level1.setCollider('rectangle', -5, -5, 125, 125);

  level2 = createSprite(width/3, height/2+height/8-10);
  level2.addImage(lockLevelIMG);
  level2.scale = 0.7;

  level3 = createSprite(width/2, height/2 - height/8);
  level3.addImage(lockLevelIMG);
  level3.scale = 0.7;

  level4 = createSprite(width/3+width/3, height/2+height/8-10);
  level4.addImage(lockLevelIMG);
  level4.scale = 0.7;

  level5 = createSprite(width/4+width/2+150, height/2-height/8);
  level5.addImage(lockLevelIMG);
  level5.scale = 0.7;

  returnForLevel = createSprite(width - 70, 70);
  returnForLevel.addImage(returnButtonIMG);
  returnForLevel.scale = 0.3;

  ElevatorHelper1InLevel5 = createSprite(3600, 300, 100, 50);
  ElevatorHelper2InLevel5 = createSprite(3600, 800, 100, 50);

  spike1 = createSprite(500, 710);
  spike1.addImage(upFacingSpikeIMG);
  spike1.scale = 0.23;

  spike2 = createSprite(1300, 710);
  spike2.addImage(upFacingSpikeIMG);
  spike2.scale = 0.23;

  spike3 = createSprite(900, 435);
  spike3.addImage(downFacingSpikeIMG);
  spike3.scale = 0.6;

  knight = createSprite(100, 300);
  knight.addAnimation('standing', knightIMG);
  knight.setCollider('rectangle', -50, 0, 100, 140);

  witch = createSprite(3600, 300);
  witch.addImage(witchIMG);

  // Creating the groups
  spikeGroup = createGroup();
  lavaFireballGroup = createGroup();
  witchFireballGroup = createGroup();

  // Adding spikes to their group
  spikeGroup.add(spike1);
  spikeGroup.add(spike2);
  spikeGroup.add(spike3);

  // Playing the background sound
  themeSound.loop();
}



function draw() {
  background(0);
  drawSprites();

  // Making all the sprites and groups invisible
  Background.visible = 0;
  introButton.visible = 0;
  playButton.visible = 0;
  returnForLevel.visible = 0;
  returnButton.visible = 0;
  creditButton.visible = 0;
  ElevatorHelper1InLevel5.visible = 0;
  ElevatorHelper2InLevel5.visible = 0;
  level1.visible = 0;
  level2.visible = 0;
  level3.visible = 0;
  level4.visible = 0;
  level5.visible = 0;
  knight.visible = 0;

  groundGroupLevel1.setVisibleEach(0);
  groundGroupLevel2.setVisibleEach(0);
  groundGroupLevel3.setVisibleEach(0);
  groundGroupLevel4.setVisibleEach(0);
  groundGroupLevel5.setVisibleEach(0);
  spikeGroup.setVisibleEach(0);
  invisibleCollidersForLevel3Group.setVisibleEach(0);
  invisibleCollidersForLevel4Group.setVisibleEach(0);

  // Making the ground for witch in level 5 move
  ground26.bounceOff(ElevatorHelper1InLevel5);
  ground26.bounceOff(ElevatorHelper2InLevel5);

  // Calling the gamestates
  gamestates();
}

function gamestates() {


  if (gamestate === 'home') {
  
    // Making all the necessary things for this gamestate visible
    Background.visible = 1;
    introButton.visible = 1;
    creditButton.visible = 1;
    playButton.visible = 1;

    // Making pressing the buttons functional
    if (mousePressedOver(playButton)) {
      gamestate = 'level';
    }
    if (mousePressedOver(introButton)) {
      gamestate = 'storyAndControls';
    }
    if (mousePressedOver(creditButton)) {
      gamestate = 'credits';
    }

    // Creating the heading image
    imageMode(CENTER);
    image(headingIMG, width/2, height/2-250, 500, 230);

    // Adding text in this gamestate
    textFont('Ariel');
    fill('black');
    textSize(100);

    text('Play', playButton.x - 185, playButton.y + 10);
    textSize(50);
    text('Story and', introButton.x - 190, introButton.y - 30);
    text('Controls', introButton.x - 180, introButton.y + 30);
    text('Credits', 1725, 855);
  }





  if (gamestate === 'storyAndControls') {
    
    // Making all the necessary things for this gamestate visible
    Background.visible = 1;
    Background.visible = 1;
    returnButton.visible = 1;

    // Making pressing the button functional
    if (mousePressedOver(returnButton)) {
      gamestate = 'home';
    }

    // Making the background box for text in this gamestate
    fill('white');
    rectMode(CENTER);
    rect(width/2, height/2, width-300, height-100);

    // Adding text in this gamestate
    textFont('Ariel');
    fill('black');
    textSize(35);
    text('You are a knight who was gifted the ability to make big jumps by your god because of the good works you had',180,120);
    text('done throughout your life. One day,you were going through the forest to go back home after completing your',190,170);
    text('quest. But suddenly, a witch appears in front of you, captures you in a magic bubble, and takes you to her tower',175,220);
    text('and locks you on the top floor to trap you while she was preparing the magic to extract your special ability. She',170,270);
    text('told you that after she takes your ability, she will kill you because the quest which your were coming from was to',165,320);
    text('kill her SISTER(she was a bad person btw). You have to exit the tower as soon as possible so that you can stop',180,370);
    text('the witch from taking your special ability and also to stop her from executing her plan to kill you after taking',200,420);
    text('your ability.', 870, 470);
    
    textSize(40);
    text("Jump with 'Up Arrow' or 'SpaceBar'", 700, 575);
    text("Move left with 'Left Arrow'                            Move right with 'Right Arrow'",380,675);

    textSize(70);
    text('All The Best!!', width / 2 - 200, 800);
  }





  if (gamestate === 'credits') {
    
    // Making all the necessary things for this gamestate visible
    returnButton.visible = 1;
    Background.visible = 1;

    // Making the background box for text in this gamestate
    fill('white');
    rectMode(CENTER);
    rect(width/2, height/2, 900, 600);

    // Making pressing the button functional
    if (mousePressedOver(returnButton)) {
      gamestate = 'home';
    }

    // Adding text in this gamestate
    textFont('Ariel');
    fill('black');
    textSize(50);
    text('Coding                        Kushagra Agarwal', 550, 250);
    text('Game idea                   Kushagra Agarwal', 550, 325);
    text('Teaching the coder      Garima Aggarwal', 550, 400);
    text('from Whitehat jr.', 1000, 475);
    text('Guidance                     Garima Aggarwal', 550, 550);
    text('Special Thanks            My Cousins(Yash', 550, 625);
    text('and Yug)', 1005, 700);
  }





  if (gamestate === 'level') {

    // Making all the necessary things for this gamestate visible
    Background.visible = 1;
    returnButton.visible = 1;
    level1.visible = 1;
    level2.visible = 1;
    level3.visible = 1;
    level4.visible = 1;
    level5.visible = 1;

    // Making pressing the buttons functional
    if (mousePressedOver(returnButton)) {
      gamestate = 'home';
    }

    if (mousePressedOver(level1)) {
      gamestate = 'level1';
      knight.x = 100;
      knight.y = 500;
      levelsBackgroundSound.play();
      themeSound.stop();
    }

    if (mousePressedOver(level2) && lockingVariableForLevels > 1) {
      gamestate = 'level2';
      knight.x = 100;
      knight.y = 125;
      levelsBackgroundSound.play();
      themeSound.stop();
    }

    if (mousePressedOver(level3) && lockingVariableForLevels > 2) {
      gamestate = 'level3';
      knight.x = 100;
      knight.y = 200;
      levelsBackgroundSound.play();
      themeSound.stop();
    }

    if (mousePressedOver(level4) && lockingVariableForLevels > 3) {
      gamestate = 'level4';
      knight.x = 100;
      knight.y = 200;
      levelsBackgroundSound.play();
      themeSound.stop();
    }

    if (mousePressedOver(level5) && lockingVariableForLevels > 4) {
      gamestate = 'instructionsForLevel5';
      levelsBackgroundSound.play();
      themeSound.stop();
    }
  }





  if (gamestate === 'level1') {
    
    // Making all the necessary things for this gamestate visible
    groundGroupLevel1.setVisibleEach(1);
    spikeGroup.setVisibleEach(1);
    knight.visible = 1;
    returnForLevel.visible = 1;

    // Calling the function of movements so that knight can move
    knightMovement();

    // Adding the image of a portal at the end of the level
    imageMode(CENTER);
    image(endingPortalIMG, 1850, 600, 150, 300);

    // Making knight collide to the ground
    knight.collide(groundGroupLevel1);

    // Making the level completable
    if (knight.x > windowWidth - 100) {
      gamestate = 'level';
      level2.addImage(levelButton2IMG);
      level2.scale = 1;
      levelsBackgroundSound.stop();
      themeSound.play();
      lockingVariableForLevels = lockingVariableForLevels + 1;
    }

    // Making the knight DIE
    if (knight.y < 510 || knight.isTouching(spikeGroup)) {
      knight.x = 100;
      knight.y = 675;
    }

    // Making pressing the buttons functional
    if (mousePressedOver(returnForLevel)) {
      gamestate = 'level';
      levelsBackgroundSound.stop();
      themeSound.play();
    }

    // Making the spikes at the roof
    for (var i=0; i<width; i=i+100) {
      imageMode(CENTER);
      image(downFacingSpikeIMG, i, 385, 100, 100);
    }

    // Adding text in this gamestate
    fill('white');
    strokeWeight(5);
    stroke(0);
    textSize(50);
    text('Quick and easy', width/2-175, 200);
  }





  if (gamestate === 'level2') {
    
    // Making all the necessary things for this gamestate visible
    knight.visible = 1;
    groundGroupLevel2.setVisibleEach(1);
    returnForLevel.visible = 1;

    // Calling the function of movements so that knight can move
    knightMovement();

    // Making the fireballs in this gamestate
    lavaFireballspawn(random(450, 1450), 1000, Math.round(random(10, 20)));

    // Making knight collide to the ground
    knight.collide(groundGroupLevel2);

    // Adding the image of portals and lava at the end of the level
    imageMode(CENTER);
    image(startingPortalIMG, 50, 300, 150, 300);
    image(endingPortalIMG, 1850, 300, 150, 300);
    image(lavaIMG, 537, 850, 275, 100);
    image(lavaIMG, 813, 850, 280, 100);
    image(lavaIMG, 1088, 850, 275, 100);
    image(lavaIMG, 1363, 850, 275, 100);

    // Making the spikes at the roof
    for (var i=0; i<width; i=i+100) {
      imageMode(CENTER);
      image(downFacingSpikeIMG, i, 100, 100, 100);
    }

    // Making pressing the button functional
    if (mousePressedOver(returnForLevel)) {
      gamestate = 'level';
      level2.addImage(levelButton2IMG);
      level2.scale = 1;
      lavaFireballGroup.destroyEach();
      levelsBackgroundSound.stop();
      themeSound.play();
    }

    // Making the level completable
    if (knight.x > windowWidth-100) {
      gamestate = 'level';
      level2.addImage(levelButton2IMG);
      level2.scale = 1;
      level3.addImage(levelButton3IMG);
      level3.scale = 1;
      lavaFireballGroup.destroyEach();
      levelsBackgroundSound.stop();
      themeSound.play();
      lockingVariableForLevels = lockingVariableForLevels + 1;
    }

    // Making the knight DIE
    if (knight.y < 225 || knight.isTouching(lavaFireballGroup)) {
      knight.x = 200;
      knight.y = 350;
    }

    // Adding text in this gamestate
    fill('white');
    strokeWeight(5);
    stroke(0);
    textSize(50);
    text('Feeling the burn??', 750, 650);
  }





  if (gamestate === 'level3') {

    // Making all the necessary things for this gamestate visible
    returnForLevel.visible = 1;
    groundGroupLevel3.setVisibleEach(1);
    knight.visible = 1;

    // Adding the image of portals at the end of the level
    imageMode(CENTER);
    image(startingPortalIMG, 50, 250, 150, 300);
    image(endingPortalIMG, 1850, 250, 150, 300);

    // Calling the function of movements so that knight can move
    knightMovement();

    // Making knight collide to the ground
    knight.collide(groundGroupLevel3);

    // Making all the spikes in this gamestate 
    for (var i = 0; i < 900; i = i + 100) {
      imageMode(CENTER);
      image(downFacingSpikeIMG, i, 100, 100, 100);
    }
    for (var i = 1110; i < width; i = i + 100) {
      imageMode(CENTER);
      image(downFacingSpikeIMG, i, 100, 100, 100);
    }
    for (var i = 425; i < 1600; i = i + 100) {
      imageMode(CENTER);
      image(upFacingSpikeIMG, i, 800, 100, 100);
    }
    for (var i = 910; i < 1110; i = i + 100) {
      imageMode(CENTER);
      image(downFacingSpikeIMG, i, 470, 100, 100);
    }
    for (var i = 450; i < 800; i = i + 100) {
      imageMode(CENTER);
      image(rightFacingSpikeIMG, 400, i, 100, 100);
    }
    for (var i = 450; i < 800; i = i + 100) {
      imageMode(CENTER);
      image(leftFacingSpikeIMG, 1550, i, 100, 100);
    }
    for (var i = 150; i < 400; i = i + 100) {
      imageMode(CENTER);
      image(leftFacingSpikeIMG, 810, i, 100, 100);
    }
    for (var i = 150; i < 400; i = i + 100) {
      imageMode(CENTER);
      image(rightFacingSpikeIMG, 1110, i, 100, 100);
    }

    // Making pressing the button functional
    if (mousePressedOver(returnForLevel)) {
      gamestate = 'level';
      level2.addImage(levelButton2IMG);
      level2.scale = 1;
      level3.addImage(levelButton3IMG);
      level3.scale = 1;
      levelsBackgroundSound.stop();
      themeSound.play();
    }
    
    // Making the knight DIE
    if (knight.isTouching(invisibleCollidersForLevel3Group)) {
      knight.x = 100;
      knight.y = 300;
    }

    // Making the level completable
    if (knight.x > windowWidth-100) {
      gamestate = 'level';
      level2.addImage(levelButton2IMG);
      level2.scale = 1;
      level3.addImage(levelButton3IMG);
      level3.scale = 1;
      level4.addImage(levelButton4IMG);
      level4.scale = 1;
      levelsBackgroundSound.stop();
      themeSound.play();
      lockingVariableForLevels = lockingVariableForLevels + 1;
    }

    // Adding text in this gamestate
    fill('white');
    strokeWeight(5);
    stroke(0);
    textSize(50);
    text('I can bet you died atleast once!!', 600, 40);
  }





  if (gamestate === 'level4') {

    // Making all the necessary things for this gamestate visible
    knight.visible = 1;
    returnForLevel.visible = 1;
    groundGroupLevel4.setVisibleEach(1);

    // Calling the function of movements so that knight can move
    knightMovement();
    
    // Making knight collide to the ground
    knight.collide(groundGroupLevel4);

    // Adding the image of portals and lava at the end of the level
    imageMode(CENTER);
    image(startingPortalIMG, 50, 250, 150, 300);
    image(endingPortalIMG, 1850, 700, 150, 300);
    image(lavaIMG, 465, 900, 460, 100);
    image(lavaIMG, 1075, 900, 450, 100);
    image(lavaIMG, 1525, 900, 150, 100);

    // Making the fireballs in this gamestate
    lavaFireballspawn(random(400, 550), 1000, 150);
    lavaFireballspawn(random(1000, 1150), 1000, 100);
    lavaFireballspawn(1525, 1000, Math.round(random(50, 75)));

    // Making all the spikes in this gamestate 
    for (var i = 450; i < height; i = i + 100) {
      imageMode(CENTER);
      image(rightFacingSpikeIMG, 285, i, 100, 100);
    }
    for (var i = 850; i < height; i = i + 100) {
      imageMode(CENTER);
      image(leftFacingSpikeIMG, 650, i, 100, 100);
    }
    for (var i = 850; i < height; i = i + 100) {
      imageMode(CENTER);
      image(rightFacingSpikeIMG, 900, i, 100, 100);
    }
    for (var i = 525; i < height; i = i + 100) {
      imageMode(CENTER);
      image(leftFacingSpikeIMG, 1250, i, 100, 100);
    }
    for (var i = 775; i < 800; i = i + 100) {
      imageMode(CENTER);
      image(downFacingSpikeIMG, i, 525, 100, 100);
    }
    for (var i = 1375; i < 1400; i = i + 100) {
      imageMode(CENTER);
      image(downFacingSpikeIMG, i, 200, 100, 100);
    }
    for (var i = 50; i < 700; i = i + 100) {
      imageMode(CENTER);
      image(downFacingSpikeIMG, i, 100, 100, 100);
    }
    for (var i = 925; i < 1300; i = i + 100) {
      imageMode(CENTER);
      image(downFacingSpikeIMG, i, 100, 100, 100);
    }
    for (var i = 1500; i < width; i = i + 100) {
      imageMode(CENTER);
      image(downFacingSpikeIMG, i, 100, 100, 100);
    }
    for (var i = 125; i < 500; i = i + 100) {
      imageMode(CENTER);
      image(leftFacingSpikeIMG, 650, i, 100, 100);
    }
    for (var i = 125; i < 500; i = i + 100) {
      imageMode(CENTER);
      image(rightFacingSpikeIMG, 900, i, 100, 100);
    }

    // Adding text in this gamestate
    fill('white');
    strokeWeight(5);
    stroke(0);
    textSize(50);
    text("It's HARD!!", 1600, 400);

    // Making pressing the button functional
    if (mousePressedOver(returnForLevel)) {
      gamestate = 'level';
      lavaFireballGroup.destroyEach();
      levelsBackgroundSound.stop();
      themeSound.play();
      level2.addImage(levelButton2IMG);
      level2.scale = 1;
      level3.addImage(levelButton3IMG);
      level3.scale = 1;
      level4.addImage(levelButton4IMG);
      level4.scale = 1;
    }
    // Making the knight DIE
    if (knight.isTouching(invisibleCollidersForLevel4Group) || knight.isTouching(lavaFireballGroup)) {
      knight.x = 200;
      knight.y = 300;
    }

    // Making the level completable
    if (knight.x > windowWidth-100) {
      gamestate = 'level';
      level2.addImage(levelButton2IMG);
      level2.scale = 1;
      level3.addImage(levelButton3IMG);
      level3.scale = 1;
      level4.addImage(levelButton4IMG);
      level4.scale = 1;
      level5.addImage(levelButton5IMG);
      level5.scale = 1;
      levelsBackgroundSound.stop();
      themeSound.play();
      lavaFireballGroup.destroyEach();
      lockingVariableForLevels = lockingVariableForLevels + 1;
    }
  }





  if (gamestate === 'instructionsForLevel5') {
    background('white');

    // Adding text in this gamestate
    textFont('Ariel');
    fill('black');
    textSize(40);
    text("Wow! you made it this far. I realy appreciate your efforts. Now, it's the time to end it all.",275,250);
    text('The witch can attack you with fireballs but it cannot attack you if you come too close to it.',260,300);
    text('So you just need to reach the end of the level and touch the witch and you will be able to defeat her',200,350);
    text('with your spear', 835, 400);
    text("Press 'p' to start the level", 750, 550);
 
    // Letting the player to play the final level
    if (keyDown('p')) {
      gamestate = 'level5';
      knight.x = 275;
      knight.y = 260;
    }
  }





  if (gamestate === 'level5') {

    // Making all the necessary things for this gamestate visible
    returnForLevel.visible = 1;
    knight.visible = 1;
    groundGroupLevel5.setVisibleEach(1);


    // Making the wwitch move with the ground
    witch.y = ground26.y-100

    // Making the returnForLevel move with the camera
    returnForLevel.x = camera.x+900;
    returnForLevel.y = camera.y-390;

    // Calling the function of movements so that knight can move
    knightMovement();

    // Making knight collide to the ground
    knight.collide(groundGroupLevel5);

    // Making the fireballs in this gamestate
    lavaFireballspawn(knight.x, 1000, 80);
    lavaFireballspawn(random(200, 3800), 1000, 75);

    // Adding the image of spikes and lava at the end of the level
    for (var i = 81; i < 3700; i = i + 100) {
      imageMode(CENTER);
      image(downFacingSpikeIMG, i, 75, 100, 100);
    }
    for (var i = 81; i < 3700; i = i + 100) {
      imageMode(CENTER);
      image(lavaIMG, i, 900, 100, 100);
    }

    // Making the knight DIE
    if (knight.y < 200 || knight.y > 750 || knight.isTouching(lavaFireballGroup) || knight.isTouching(witchFireballGroup)) {
      knight.x = 275;
      knight.y = 230;
    }

    // Making the camera move with the knight
    if (gamestate === 'level5' && knight.x < width/2) {
      camera.x = 960;
      camera.y = 451.5;
    } 
    else {
      camera.x = knight.x;
    }

    // Making pressing the button functional
    if (mousePressedOver(returnForLevel)) {
      gamestate = 'level';
      witchFireballGroup.destroyEach();
      lavaFireballGroup.destroyEach();
      level2.addImage(levelButton2IMG);
      level2.scale = 1;
      level3.addImage(levelButton3IMG);
      level3.scale = 1;
      level4.addImage(levelButton4IMG);
      level4.scale = 1;
      level5.addImage(levelButton5IMG);
      level5.scale = 1;
      levelsBackgroundSound.stop();
      themeSound.play();
    }

    // Making the level completable
    if (knight.isTouching(witch)) {
      gamestate = 'credits';
      witchFireballGroup.destroyEach();
      lavaFireballGroup.destroyEach();
      level2.addImage(levelButton2IMG);
      level2.scale = 1;
      level3.addImage(levelButton3IMG);
      level3.scale = 1;
      level4.addImage(levelButton4IMG);
      level4.scale = 1;
      level5.addImage(levelButton5IMG);
      level5.scale = 1;
      levelsBackgroundSound.stop();
      themeSound.play();
      lockingVariableForLevels = lockingVariableForLevels + 1;
    }

    // Spawning the fireballs of the witch
    if (frameCount % Math.round(random(90, 150)) === 0) {
      witchFireball = createSprite(3600, witch.y, 1, 1);
      witchFireball.addImage(witchFireballIMG);
      witchFireball.velocityX = -6;
      witchFireball.lifetime = 4000;
      witchFireballGroup.add(witchFireball);

      var numberOfCases = Math.round(random(1, 6));
      switch (numberOfCases) {
        
        case 1:witchFireball.scale = 1;
               witchFireball.setCollider("rectangle", 0, 5, 250, 100)
        break;
        case 2:witchFireball.scale = 0.9;
               witchFireball.setCollider("rectangle", 0, 5, 250, 100)
        break;
        case 3:witchFireball.scale = 0.8;
               witchFireball.setCollider("rectangle", 0, 5, 250, 100)
        break;
        case 4:witchFireball.scale = 0.6;
               witchFireball.setCollider("rectangle", 0, 5, 250, 100)
        break;
        case 5:witchFireball.scale = 0.5;
               witchFireball.setCollider("rectangle", 0, 5, 250, 100)
        break;
        case 6:witchFireball.scale = 0.3; 
               witchFireball.setCollider("rectangle", 0, 5, 250, 100)
        break;
        default: break;
      }
    }
  } 
  else {
    camera.x = 960;
    camera.y = 451.5;

    returnForLevel.x = width-70;
    returnForLevel.y = 70;
  }
}





// Making the knight movements
function knightMovement() {
 
  knight.velocityX = 0;
  knight.velocityY = knight.velocityY + 1;
 
  // 38 = up arrow
  // 32 = spacebar
  if (keyDown(38) || keyDown(32)) {
    knight.velocityY = -10;
  }

  if (keyDown(RIGHT_ARROW)) {
    knight.velocityX = 8;
    knight.addAnimation('standing', knightWalkingANM);
  } 
  else {
    knight.addAnimation('standing', knightIMG);
  }

  if (keyDown(LEFT_ARROW)) {
    knight.velocityX = -8;
  }
}





// Making the fireballs coming out of lava
function lavaFireballspawn(x, y, f) {
  if (frameCount % f === 0) {
    lavaFireball = createSprite(x, y);
    lavaFireball.addImage(lavaFireballIMG);
    lavaFireball.scale = 0.8;
    lavaFireball.velocityY = -10;
    lavaFireball.lifetime = 120;
    lavaFireball.setCollider("rectangle", -10, 0, 100, 250)
    lavaFireballGroup.add(lavaFireball);
  }
}





function grounds() {
  
  // Creating the groups for all grounds based on level
  groundGroupLevel1 = createGroup();
  groundGroupLevel2 = createGroup();
  groundGroupLevel3 = createGroup();
  groundGroupLevel4 = createGroup();
  groundGroupLevel5 = createGroup();

  // Creating all the grounds

  // In level 1
  for (var i = 275; i < width + 100; i = i + 560) {
    ground1 = createSprite(i, 928);
    ground1.addImage(groundIMG);
    groundGroupLevel1.add(ground1);
  }
  for (var i = 275; i < width + 100; i = i + 560) {
    ground2 = createSprite(i, 155);
    ground2.addImage(groundIMG);
    groundGroupLevel1.add(ground2);
  }


  // In level 2
  for (var i = 630; i < height + 400; i = i + 365) {
    ground3 = createSprite(118, i);
    ground3.addImage(groundIMG);
    groundGroupLevel2.add(ground3);
  }
  for (var i = 630; i < height + 400; i = i + 365) {
    ground4 = createSprite(1780, i);
    ground4.addImage(groundIMG);
    groundGroupLevel2.add(ground4);
  }
  for (var i = 200; i < width; i = i + 562) {
    ground5 = createSprite(i, -130);
    ground5.addImage(groundIMG);
    groundGroupLevel2.add(ground5);
  }
  for (var i = 445; i < width - 400; i = i + 112) {
    ground6 = createSprite(i, 486);
    ground6.addImage(groundIMG);
    ground6.scale = 0.2;
    groundGroupLevel2.add(ground6);
  }


  // In level 3
  for (var i = 580; i < height + 300; i = i + 365) {
    ground7 = createSprite(70, i);
    ground7.addImage(groundIMG);
    groundGroupLevel3.add(ground7);
  }
  for (var i = 250; i < width + 100; i = i + 562) {
    ground8 = createSprite(i, -127);
    ground8.addImage(groundIMG);
    groundGroupLevel3.add(ground8);
  }
  for (var i = 580; i < height + 300; i = i + 365) {
    ground9 = createSprite(1880, i);
    ground9.addImage(groundIMG);
    groundGroupLevel3.add(ground9);
  }
  for (var i = 548; i < width - 100; i = i + 394) {
    ground10 = createSprite(i, 975);
    ground10.scale = 0.7;
    ground10.addImage(groundIMG);
    groundGroupLevel3.add(ground10);
  }
  for (var i = 90; i < height - 520; i = i + 132) {
    ground11 = createSprite(width/2, i);
    ground11.addImage(groundIMG);
    ground11.scale = 0.36;
    groundGroupLevel3.add(ground11);
  }


  // In level 4
  for (var i = 580; i < height + 100; i = i + 365) {
    ground12 = createSprite(-45, i);
    ground12.addImage(groundIMG);
    groundGroupLevel4.add(ground12);
  }
  for (var i = 1025; i < height + 300; i = i + 365) {
    ground13 = createSprite(1880, i);
    ground13.addImage(groundIMG);
    groundGroupLevel4.add(ground13);
  }
  for (var i = 100; i < width + 100; i = i + 560) {
    ground14 = createSprite(i, -127);
    ground14.addImage(groundIMG);
    groundGroupLevel4.add(ground14);
  }
  for (var i = 850; i < height + 1000; i = i + 560) {
    ground15 = createSprite(775, i);
    ground15.addImage(groundIMG);
    ground15.scale = 0.27;
    groundGroupLevel4.add(ground15);
  }
  for (var i = 27; i < 500; i = i + 100) {
    ground16 = createSprite(775, i);
    ground16.addImage(groundIMG);
    ground16.scale = 0.27;
    groundGroupLevel4.add(ground16);
  }
  for (var i = 100; i < 200; i = i + 500) {
    ground17 = createSprite(1375, i);
    ground17.addImage(groundIMG);
    ground17.scale = 0.27;
    groundGroupLevel4.add(ground17);
  }
  for (var i = 520; i < height + 100; i = i + 99) {
    ground18 = createSprite(1375, i);
    ground18.addImage(groundIMG);
    ground18.scale = 0.27;
    groundGroupLevel4.add(ground18);
  }


  // level5
  for (var i = 100; i < 4000; i = i + 560) {
    ground19 = createSprite(i, -150);
    ground19.addImage(groundIMG);
    groundGroupLevel5.add(ground19);
  }
  for (var i = 4012; i < 5000; i = i + 560) {
    ground20 = createSprite(i, 150);
    ground20.addImage(groundIMG);
    groundGroupLevel5.add(ground20);
  }
  for (var i = 4012; i < 5000; i = i + 560) {
    ground21 = createSprite(i, 515);
    ground21.addImage(groundIMG);
    groundGroupLevel5.add(ground21);
  }
  for (var i = 4012; i < 5000; i = i + 560) {
    ground22 = createSprite(i, 880);
    ground22.addImage(groundIMG);
    groundGroupLevel5.add(ground22);
  }
  for (var i = -150; i < height + 200; i = i + 365) {
    ground23 = createSprite(-250, i);
    ground23.addImage(groundIMG);
    groundGroupLevel5.add(ground23);
  }
  for (var i = 250; i < 3700; i = i + 600) {
    ground24 = createSprite(i, 400);
    ground24.addImage(groundStripIMG);
    ground24.scale = 0.3;
    groundGroupLevel5.add(ground24);
  }
  for (var i = 550; i < 3500; i = i + 600) {
    ground25 = createSprite(i, 600);
    ground25.addImage(groundStripIMG);
    ground25.scale = 0.35;
    groundGroupLevel5.add(ground25);
  }

  ground26 = createSprite(3600, 500);
  ground26.addImage(groundStripIMG);
  ground26.scale = 0.35;
  ground26.velocityY = 3;
  groundGroupLevel5.add(ground26);
}





// Making the invisible colliders for the spikes in level 3 as they all are images 
function invisibleCollidersForLevel3() {
 
  // Making the group for all the invisible colliders in level 3
  invisibleCollidersForLevel3Group = createGroup();

  // Creating all the colliders  
  collider1 = createSprite(400, 150, 800, 10);
  collider2 = createSprite(1550, 150, 800, 10);
  collider3 = createSprite(width/2, 750, 1100, 10);
  collider4 = createSprite(400, 420, 100, 10);
  collider5 = createSprite(1550, 420, 100, 10);
  collider6 = createSprite(810, 400, 100, 10);
  collider7 = createSprite(1110, 400, 100, 10);
  collider8 = createSprite(width/2, 510, 100, 10);
  collider9 = createSprite(765, 280, 10, 200);
  collider10 = createSprite(1155, 280, 10, 200);
  collider11 = createSprite(440, 600, 10, 300);
  collider12 = createSprite(1510, 600, 10, 300);
  collider13 = createSprite(880, 450, 10, 100);
  collider14 = createSprite(1040, 450, 10, 100);

  // Adding all the colliders in the group
  invisibleCollidersForLevel3Group.add(collider1);
  invisibleCollidersForLevel3Group.add(collider2);
  invisibleCollidersForLevel3Group.add(collider3);
  invisibleCollidersForLevel3Group.add(collider4);
  invisibleCollidersForLevel3Group.add(collider5);
  invisibleCollidersForLevel3Group.add(collider6);
  invisibleCollidersForLevel3Group.add(collider7);
  invisibleCollidersForLevel3Group.add(collider8);
  invisibleCollidersForLevel3Group.add(collider9);
  invisibleCollidersForLevel3Group.add(collider10);
  invisibleCollidersForLevel3Group.add(collider11);
  invisibleCollidersForLevel3Group.add(collider12);
  invisibleCollidersForLevel3Group.add(collider13);
  invisibleCollidersForLevel3Group.add(collider14);
}





// Making the invisible colliders for the spikes in level 4 as they all are images 
function invisibleCollidersForLevel4() {
  
  // Making the group for all the invisible colliders in level 3
  invisibleCollidersForLevel4Group = createGroup();

  
  // Creating all the colliders  
  collider15 = createSprite(width/2, 140, width, 10);
  collider16 = createSprite(780, 810, 300, 10);
  collider17 = createSprite(275, 420, 100, 10);
  collider18 = createSprite(1375, 240, 100, 10);
  collider19 = createSprite(670, 460, 100, 10);
  collider20 = createSprite(890, 460, 100, 10);
  collider21 = createSprite(775, 560, 100, 10);
  collider22 = createSprite(1275, 490, 100, 10);
  collider23 = createSprite(width/2-50, height-50, 1400, 10);
  collider24 = createSprite(620, 300, 10, 300);
  collider25 = createSprite(930, 300, 10, 300);
  collider26 = createSprite(320, 640, 10, 400);
  collider27 = createSprite(1220, 680, 10, 400);
  collider28 = createSprite(720, 500, 10, 100);
  collider29 = createSprite(825, 500, 10, 100);
  collider30 = createSprite(630, 830, 10, 50);
  collider31 = createSprite(930, 830, 10, 50);
  collider32 = createSprite(1330, 200, 10, 80);
  collider33 = createSprite(1430, 200, 10, 80);

  // Adding all the colliders in the group
  invisibleCollidersForLevel4Group.add(collider15);
  invisibleCollidersForLevel4Group.add(collider16);
  invisibleCollidersForLevel4Group.add(collider17);
  invisibleCollidersForLevel4Group.add(collider18);
  invisibleCollidersForLevel4Group.add(collider19);
  invisibleCollidersForLevel4Group.add(collider20);
  invisibleCollidersForLevel4Group.add(collider21);
  invisibleCollidersForLevel4Group.add(collider22);
  invisibleCollidersForLevel4Group.add(collider23);
  invisibleCollidersForLevel4Group.add(collider24);
  invisibleCollidersForLevel4Group.add(collider25);
  invisibleCollidersForLevel4Group.add(collider26);
  invisibleCollidersForLevel4Group.add(collider27);
  invisibleCollidersForLevel4Group.add(collider28);
  invisibleCollidersForLevel4Group.add(collider29);
  invisibleCollidersForLevel4Group.add(collider30);
  invisibleCollidersForLevel4Group.add(collider31);
  invisibleCollidersForLevel4Group.add(collider32);
  invisibleCollidersForLevel4Group.add(collider33);
}