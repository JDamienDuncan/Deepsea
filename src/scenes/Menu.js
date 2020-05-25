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
        this.game.day_count = 1;
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
        
        var start = this.add.image(320,240,'title');
        
        this.add.text(centerX, centerY- 120, 'DEEP SEAS', menuConfig).setOrigin(0.5);
       
        // Show buttons
        
        this.add.text(centerX, centerY + 140, 'START', buttonConfig).setOrigin(0.5);
   
       
        menuConfig.backgroundColor = '#00FF00';
        menuConfig.color = '#000';
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        
        var title_music;
        
        this.title_music = game.sound.add('sfx_title')
        // Start Title Music
        
        this.title_music.play();
       
        
    }

    update() {
        

        // Change 'Start' button bgColor if mouse hovers over it
       if(game.input.mousePointer.x < 405
        && game.input.mousePointer.x > 225
        && game.input.mousePointer.y > 345
        && game.input.mousePointer.y < 400
        ){
           // this.buttonConfig.backgroundColor = '#ffffff';
           // this.add.text(this.centerX, this.centerY + 140, 'START', this.buttonConfig).setOrigin(0.5);  

        }else{
            //this.buttonConfig.backgroundColor = this.white;
            //this.add.text(this.centerX+280, this.centerY + 280, 'START', this.buttonConfig).setOrigin(0.5);  
        }
       
       // Check if mouse is clicking button

       if (game.input.mousePointer.isDown 
            && game.input.mousePointer.x < 405
            && game.input.mousePointer.x > 225
            && game.input.mousePointer.y > 345
            && game.input.mousePointer.y < 400
            ) {
            // easy mode
            game.settings = {
                gameTimer: 60000,
                seconds: 60    
            }
            
            this.title_music.stop();
            this.sound.play('sfx_select');
            this.scene.start("playScene");    
        }
        
    }
}