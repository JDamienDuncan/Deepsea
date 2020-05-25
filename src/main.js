/* Deepsea
// John D. Duncan
// CMPM 120
*/ 
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    day_count : 1,
   
    scene: [ Menu, Play, Drone, Days, Summary, Day1, Day2, Day3, Day4, Day5, Day6, Day7, Day8, Day9, Day10, Day11, Day12, Day13, Day14, Day15, Day16]
}

// main game object
let game = new Phaser.Game(config);

game.global = {
    //day_count : 1,
    weaver_count : 10,
    roy_count : 10
}

// define game settings
game.settings = {
    day_count : 1

}


// reserve keyboard vars
let keyF, keyX, keyLEFT, keyRIGHT, keyDOWN, keyUP, keySPACE;

