class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select12.wav');
        
        this.load.audio('sfx_test', './assets/Test_Track.mp3');
        this.load.audio('sfx_title', './assets/Title_Track.mp3');
        this.load.image('title', './assets/Title.png');
    }

    
    create() {
        // Menu Display
        this.game.day_count = 0;
        this.game.relation = 0;
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '56px',
            //backgroundColor: '#606061',
            color: '#240278',
            align: 'right',
            bold: true,
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // Button Display
        let buttonConfig = {
            fontFamily: 'Courier',
            fontSize: '56px',
            backgroundColor: '#606061',
            color: '#240278',
            align: 'right',
            bold: true,
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // Show the menu text
        let centerX = game.config.width/2;
        let centerY = game.config.height/2;
        let textSpacer = 64;
        
        // Load background image
        var start = this.add.image(320,240,'title');
        
        // Center Title Text
        this.add.text(centerX, centerY- 120, 'DEEP SEAS', menuConfig).setOrigin(0.5);
       
        // Show buttons
        this.add.text(centerX, centerY + 140, 'START', buttonConfig).setOrigin(0.5);
   
       // Change text color configs
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        
        // Define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        
        // Define title music variable
        var title_music;
        this.title_music = game.sound.add('sfx_title')
        
        // Start Title Music
        this.title_music.play();
       
        
    }

    update() {
        
        // Check if mouse is clicking button

       if (game.input.mousePointer.isDown 
            && game.input.mousePointer.x < 405
            && game.input.mousePointer.x > 225
            && game.input.mousePointer.y > 345
            && game.input.mousePointer.y < 400
            ) {
            
            this.title_music.stop();
            this.sound.play('sfx_select');
            this.scene.start("playScene");    
        }
        
    }
}