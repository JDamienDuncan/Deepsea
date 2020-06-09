class End extends Phaser.Scene {
    constructor() {
        super("endScene");
    }


    create() {
        // place background image
        this.end = this.add.image(0, 0,'end_screen').setOrigin(0, 0);

        // text config
        let endConfig = {
            fontFamily: 'Courier',
            fontSize: '16px',
            strokeThickness: 1,
            color: '#FFFFFF',
            align: 'center',
            fixedWidth: 0
        }

        let textSpacer = 32;

        // crediting us!
        this.add.text(328, 150, 'John D. Duncan: Lead Code Designer', endConfig).setOrigin(0.5);
        this.add.text(328, 150 + textSpacer, 'Carson Hull: Narrative Design, Code Designer', endConfig).setOrigin(0.5);
        this.add.text(328, 150 + textSpacer*2, 'Mikayla Roberts: Visual Art, Sound Design, and Code Cleanup', endConfig).setOrigin(0.5);

        endConfig.fontSize = '10px';
        textSpacer = 25;

        // music/sfx
        this.add.text(173, 315, '"Aquaria" by cynicmusic\n(License: CC0)', endConfig).setOrigin(0.5);
        this.add.text(173, 315 + textSpacer, '"Quinn\'s Song: First Night" by Kevin MacLeod\n(License: CC BY 3.0)', endConfig).setOrigin(0.5);
        this.add.text(173, 315 +textSpacer*2, 'GUI Sound Effects #8 by jalastram\n(License: CC BY 3.0)', endConfig).setOrigin(0.5);
        this.add.text(173, 315 +textSpacer*3, 'Tune Radio Sound from SoundBible\n(License: CC BY 3.0)', endConfig).setOrigin(0.5);
        this.add.text(173, 315 +textSpacer*4, 'Page Turn Sound from The-Sound-FX\n(License: CC BY 3.0)', endConfig).setOrigin(0.5);
        this.add.text(173, 315 +textSpacer*5, 'Drone Sound from NoiseForFun\n(License: CC BY 3.0)', endConfig).setOrigin(0.5);

        // fonts
        this.add.text(487, 315, 'Atari ST 8x16 System by divVerent', endConfig).setOrigin(0.5);
        this.add.text(487, 315 + textSpacer, 'Manolete by Woodcutter', endConfig).setOrigin(0.5);
        
        // place bubble tilesprites
        this.smallBubbles = this.add.tileSprite(0, 0, 640, 960, 'small_bubbles').setOrigin(0, 0);
        this.medBubbles = this.add.tileSprite(0, 0, 640, 960, 'med_bubbles').setOrigin(0, 0);
        this.largeBubbles = this.add.tileSprite(0, 0, 640, 960, 'large_bubbles').setOrigin(0, 0);
        
    }

    update() {
        // scroll bubbles
        this.smallBubbles.tilePositionY += 2;
        this.medBubbles.tilePositionY += 1.5;
        this.largeBubbles.tilePositionY += 1;
    }
}