class Day6 extends Phaser.Scene {
    constructor() {
        super("day6");
    }

    preload() {
        this.load.image('day6', './assets/Day6.png');

    }



    create() {
        
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

        this.dayfield = this.add.tileSprite(0, 0, 640, 480, 'day6').setOrigin(0, 0);
        
        var timeCheck;
        this.timeCheck = 1;
        
    }


    update() {
        this.timeCheck += 1;
        //console.log(this.timeCheck);
        if(this.timeCheck >= 250){
            this.game.day_count += 1;
            this.scene.start("dayScene");
        }
        if (Phaser.Input.Keyboard.JustDown(keyF)) {
            //this.test_music.stop();
            
            this.scene.start("menuScene"); 
        }

    }
}