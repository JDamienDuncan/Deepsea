class Drone extends Phaser.Scene {
    constructor() {
        super("droneScene");
    }

    preload() {
        this.load.image('dronefield', './assets/Drone_Field.jpg');

    }



    create() {

        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        
        this.dronefield = this.add.tileSprite(0, 0, 640, 480, 'dronefield').setOrigin(0, 0);
        
    }


    update() {
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            //this.test_music.stop();
            
            this.scene.start("menuScene"); 
        }

    }






























}