/* Deepsea
// John D. Duncan
// CMPM 120
*/ 
let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    day_count : 1,
   
    scene: [ Menu, Play, Drone, Days, Day0, Day1, Deduction, Dialogue]
}

// main game object
let game = new Phaser.Game(config);

game.global = {
    //day_count : 1,
    //weaver_count : 10,
    //roy_count : 10
}

// define game settings
game.settings = {
    day_count : 1,
    roy_relation : 10,
    weaver_relation : 10, 
    data1 : 0,
    data2 : 0,
    data3 : 0,
    data4 : 0,
    data5 : 0,
    loc1 : 0,
    loc2 : 0,
    loc3 : 0,
    loc4 : 0,
    loc5 : 0,
    bot1Loc : 0,
    bot2Loc : 0,
    bot3Loc : 0,
    bot4Loc : 0,
    bot5Loc : 0

}


// reserve keyboard vars
let keyF, keyX, keyLEFT, keyRIGHT, keyDOWN, keyUP, keySPACE;

