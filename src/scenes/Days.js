class Days extends Phaser.Scene {
    constructor() {
        super("dayScene");
    }

    preload() {
        this.load.image('dayfield', './assets/Day_Field.jpg');

    }



    create() {
        
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

        this.dayfield = this.add.tileSprite(0, 0, 640, 480, 'dayfield').setOrigin(0, 0);
        
    }


    update() {
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            //this.test_music.stop();
            
            this.scene.start("menuScene"); 
        }

    }






























}