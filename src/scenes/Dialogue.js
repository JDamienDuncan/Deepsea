class Dialogue extends Phaser.Scene {
    constructor() {
        super("dialogueScene");
    }

    preload(){
       
        this.load.image('UI', './assets/BlankUI.png');

    }

    create(){

        let resultConfig = {
            fontFamily: 'Courier',
            fontSize: '16px',
            backgroundColor: '#000000',
            color: '#ffffff',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 400
        }

        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        this.dayfield = this.add.tileSprite(0, 0, 640, 480, 'UI').setOrigin(0, 0);
        this.chatAdv = this.add.text(120, 350, 'Conversation for Day: '+this.game.day_count, resultConfig);
        this.chatAdv = this.add.text(120, 320, 'Press -Space- to Continue!', resultConfig);

    }

    update(){
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            //this.test_music.stop();
            this.game.day_count = this.game.day_count + 1;
            
            this.scene.start("dayScene");
        }
    }
}