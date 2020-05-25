class Days extends Phaser.Scene {
    constructor() {
        super("dayScene");
    }

    preload() {
        this.load.image('day1', './assets/Day1.png');
        this.load.image('day2', './assets/Day2.png');
        this.load.image('day3', './assets/Day3.png');
        this.load.image('day4', './assets/Day4.png');
        this.load.image('day5', './assets/Day5.png');
        this.load.image('day6', './assets/Day6.png');
        this.load.image('day7', './assets/Day7.png');
        this.load.image('day8', './assets/Day8.png');
        this.load.image('day9', './assets/Day9.png');
        this.load.image('day10', './assets/Day10.png');
        this.load.image('day11', './assets/Day11.png');
        this.load.image('day12', './assets/Day12.png');
        this.load.image('day13', './assets/Day13.png');
        this.load.image('day14', './assets/Day14.png');
        this.load.image('day15', './assets/Day15.png');
        this.load.image('day16', './assets/Day16.png');


        this.load.audio('tran', './assets/Transition.mp3');

    }



    create() {
        
        
        
        
        
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);

        if(this.game.day_count == 1){
            this.dayfield = this.add.tileSprite(0, 0, 640, 480, 'day1').setOrigin(0, 0);
        }
        else if(this.game.day_count == 2){
            this.dayfield = this.add.tileSprite(0, 0, 640, 480, 'day2').setOrigin(0, 0);
        }
        else if(this.game.day_count == 3){
            this.dayfield = this.add.tileSprite(0, 0, 640, 480, 'day3').setOrigin(0, 0);
        }
        else if(this.game.day_count == 4){
            this.dayfield = this.add.tileSprite(0, 0, 640, 480, 'day4').setOrigin(0, 0);
        }
        else if(this.game.day_count == 5){
            this.dayfield = this.add.tileSprite(0, 0, 640, 480, 'day5').setOrigin(0, 0);
        }
        else if(this.game.day_count == 6){
            this.dayfield = this.add.tileSprite(0, 0, 640, 480, 'day6').setOrigin(0, 0);
        }
        else if(this.game.day_count == 7){
            this.dayfield = this.add.tileSprite(0, 0, 640, 480, 'day7').setOrigin(0, 0);
        }
        else if(this.game.day_count == 8){
            this.dayfield = this.add.tileSprite(0, 0, 640, 480, 'day8').setOrigin(0, 0);
        }
        else if(this.game.day_count == 9){
            this.dayfield = this.add.tileSprite(0, 0, 640, 480, 'day9').setOrigin(0, 0);
        }
        else if(this.game.day_count == 10){
            this.dayfield = this.add.tileSprite(0, 0, 640, 480, 'day10').setOrigin(0, 0);
        }
        else if(this.game.day_count == 11){
            this.dayfield = this.add.tileSprite(0, 0, 640, 480, 'day11').setOrigin(0, 0);
        }
        else if(this.game.day_count == 12){
            this.dayfield = this.add.tileSprite(0, 0, 640, 480, 'day12').setOrigin(0, 0);
        }
        else if(this.game.day_count == 13){
            this.dayfield = this.add.tileSprite(0, 0, 640, 480, 'day13').setOrigin(0, 0);
        }
        else if(this.game.day_count == 14){
            this.dayfield = this.add.tileSprite(0, 0, 640, 480, 'day14').setOrigin(0, 0);
        }
        else if(this.game.day_count == 15){
            this.dayfield = this.add.tileSprite(0, 0, 640, 480, 'day15').setOrigin(0, 0);
        }
        else if(this.game.day_count == 16){
            this.dayfield = this.add.tileSprite(0, 0, 640, 480, 'day16').setOrigin(0, 0);
        }
        
        
        //this.dayfield = this.add.tileSprite(0, 0, 640, 480, 'day1').setOrigin(0, 0);

        var transition;
        
        this.transition = game.sound.add('tran')
        // Start Title Music
        
        this.transition.play();

        this.cameras.main.once('camerafadeincomplete', function (camera) {

            camera.fadeOut(2000);
        });

        this.cameras.main.fadeIn(2000);

        var timeCheck;
        this.timeCheck = 1;
        
    }


    update() {
        this.timeCheck += 1;
        //console.log(this.timeCheck);
        if(this.timeCheck >= 250){
            
            if(this.game.day_count == 1){
                //console.log('Day 1 start!')
                this.scene.start("day1"); 
            }
            else if(this.game.day_count == 2){
                this.scene.start("day1");
            }
            else if(this.game.day_count == 3){
                this.scene.start("day1");
            }
            else if(this.game.day_count == 4){
                this.scene.start("day1");
            }
            else if(this.game.day_count == 5){
                this.scene.start("day1");
            }
            else if(this.game.day_count == 6){
                this.scene.start("day1");
            }
            else if(this.game.day_count == 7){
                this.scene.start("day1");
            }
            else if(this.game.day_count == 8){
                this.scene.start("day1");
            }
            else if(this.game.day_count == 9){
                this.scene.start("day1");
            }
            else if(this.game.day_count == 10){
                this.scene.start("day1");
            }
            else if(this.game.day_count == 11){
                this.scene.start("day1");
            }
            else if(this.game.day_count == 12){
                this.scene.start("day1");
            }
            else if(this.game.day_count == 13){
                this.scene.start("day1");
            }
            else if(this.game.day_count == 14){
                this.scene.start("day1");
            }
            else if(this.game.day_count == 15){
                this.scene.start("day1");
            }
            else if(this.game.day_count == 16){
                this.scene.start("day1");
            }

        }
        

    }






























}