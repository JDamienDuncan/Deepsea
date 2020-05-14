/* Deepsea
// John D. Duncan
// CMPM 120
*/ 
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
   
    scene: [ Menu, Play, Drone, Days ]
}

// main game object
let game = new Phaser.Game(config);

// define game settings
game.settings = {
    spaceshipSpeed: 3,
    podSpeed: 6,
    gameTimer: 60000   
}


// reserve keyboard vars
let keyF, keyLEFT, keyRIGHT, keyDOWN, keyUP, keySPACE;

