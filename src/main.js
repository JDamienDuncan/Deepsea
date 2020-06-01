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

// Main game object
let game = new Phaser.Game(config);



// Define game variables
game.settings = {
    day_count : 0, // Keeps track of the current day  
    data1 : 0,     // Data retrieved from Drone 1
    data2 : 0,     // Data retrieved from Drone 2
    data3 : 0,     // Data retrieved from Drone 3
    data4 : 0,     // Data retrieved from Drone 4
    data5 : 0,     // Data retrieved from Drone 5
    itemValue1 : 0,  // Relation value of element in data1
    itemValue2 : 0,  // Relation value of element in data2
    itemValue3 : 0,  // Relation value of element in data3
    itemValue4 : 0,  // Relation value of element in data4
    itemValue5 : 0,  // Relation value of element in data5
    bot1Loc : 0,     // Keeps track of Drone 1's Location
    bot2Loc : 0,     // Keeps track of Drone 2's Location
    bot3Loc : 0,     // Keeps track of Drone 3's Location
    bot4Loc : 0,     // Keeps track of Drone 4's Location
    bot5Loc : 0,     // Keeps track of Drone 5's Location
    relation : 0     // Main game value, affects how the story develops

}


// Enable keyboard vars
let keyF, keyX, keyLEFT, keyRIGHT, keyDOWN, keyUP, keySPACE;

