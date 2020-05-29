class Deduction extends Phaser.Scene {
    constructor() {
        super("deductionScene");
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

        this.dayfield = this.add.tileSprite(0, 0, 640, 480, 'UI').setOrigin(0, 0);

        // Item Arrays
        var uselessData = ["An Old Boot", "3D Scan of a Cuddle Fish", "Broken Rocks", "Angler Fish Eye", "Thermal Scan of Rocks", "Shark Leftovers", "Audio Recording of Cuddle Fish Mating"];
        var strangeData = ["Blurred Image of a Hand", "Crackling Audio that Sounds like Singing", "A Faded Image of a Humanoid Shape", "A Cuddle Fish"];
        var usefulData =  ["Sample of a Prime Micro Organism", "Fossilized Mirco Plankton", "A Stromatolite", "Location of a Deep Sea Trench"];
        
        
        // Display test room messages
        /*
        this.loc1 = this.add.text(180, 100, 'Drone1 was to Location '+this.game.bot1Loc, resultConfig);
        this.loc2 = this.add.text(180, 150, 'Drone2 was to Location '+this.game.bot2Loc, resultConfig);
        this.loc3 = this.add.text(180, 200, 'Drone3 was to Location '+this.game.bot3Loc, resultConfig);
        this.loc4 = this.add.text(180, 250, 'Drone4 was to Location '+this.game.bot4Loc, resultConfig);
        this.loc5 = this.add.text(180, 300, 'Drone5 was to Location '+this.game.bot5Loc, resultConfig);
        */

        // Game Part 1
        if(this.game.day_count < 5 ){
            // Item for Bot 1
            if(this.game.bot1Loc == 1 || this.game.bot1Loc == 2 || this.game.bot1Loc == 3){
                this.game.bot1Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot1Loc <= 75){
                    this.game.data1 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot1Loc > 75 && this.game.bot1Loc <= 95){
                    this.game.data1 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot1Loc > 95){
                    this.game.data1 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot1Loc == 4){
                this.game.bot1Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot1Loc <= 10){
                    this.game.data1 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot1Loc > 10 && this.game.bot1Loc <= 95){
                    this.game.data1 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot1Loc > 95){
                    this.game.data1 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot1Loc == 5){
                this.game.bot1Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot1Loc <= 90){
                    this.game.data1 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot1Loc > 90){
                    this.game.data1 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }

            // Item for Bot 2
            if(this.game.bot2Loc == 1 || this.game.bot2Loc == 2 || this.game.bot2Loc == 3){
                this.game.bot2Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot2Loc <= 75){
                    this.game.data2 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot2Loc > 75 && this.game.bot2Loc <= 95){
                    this.game.data2 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot2Loc > 95){
                    this.game.data2 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot2Loc == 4){
                this.game.bot2Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot2Loc <= 10){
                    this.game.data2 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot2Loc > 10 && this.game.bot2Loc <= 95){
                    this.game.data2 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot2Loc > 95){
                    this.game.data2 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot2Loc == 5){
                this.game.bot2Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot2Loc <= 90){
                    this.game.data2 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot2Loc > 90){
                    this.game.data2 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            // Item for Bot 3
            if(this.game.bot3Loc == 1 || this.game.bot3Loc == 2 || this.game.bot3Loc == 3){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot3Loc <= 75){
                    this.game.data3 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot3Loc > 75 && this.game.bot3Loc <= 95){
                    this.game.data3 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot3Loc > 95){
                    this.game.data3 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot3Loc == 4){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot3Loc <= 10){
                    this.game.data3 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot3Loc > 10 && this.game.bot2Loc <= 95){
                    this.game.data3 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot3Loc > 95){
                    this.game.data3 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot3Loc == 5){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot3Loc <= 90){
                    this.game.data3 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot3Loc > 90){
                    this.game.data3 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            // Item for Bot 4
            if(this.game.bot4Loc == 1 || this.game.bot4Loc == 2 || this.game.bot4Loc == 3){
                this.game.bot4Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot4Loc <= 75){
                    this.game.data4 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot4Loc > 75 && this.game.bot4Loc <= 95){
                    this.game.data4 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot4Loc > 95){
                    this.game.data4 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot4Loc == 4){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot4Loc <= 10){
                    this.game.data4 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot4Loc > 10 && this.game.bot4Loc <= 95){
                    this.game.data4 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot4Loc > 95){
                    this.game.data4 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot4Loc == 5){
                this.game.bot4Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot4Loc <= 90){
                    this.game.data4= uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot4Loc > 90){
                    this.game.data4 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            // Item for Bot 5
            if(this.game.bot5Loc == 1 || this.game.bot5Loc == 2 || this.game.bot5Loc == 3){
                this.game.bot5Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot5Loc <= 75){
                    this.game.data5 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot5Loc > 75 && this.game.bot5Loc <= 95){
                    this.game.data5 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot5Loc > 95){
                    this.game.data5 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot5Loc == 4){
                this.game.bot5Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot5Loc <= 10){
                    this.game.data5 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot5Loc > 10 && this.game.bot5Loc <= 95){
                    this.game.data5 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot5Loc > 95){
                    this.game.data5 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot5Loc == 5){
                this.game.bot5Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot5Loc <= 90){
                    this.game.data5 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot5Loc > 90){
                    this.game.data5 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
        }
        // Game Part 2
        if(this.game.day_count < 9 &&  this.game.day_count > 4){
            // Item for Bot 1
            if(this.game.bot1Loc == 1 || this.game.bot1Loc == 2 || this.game.bot1Loc == 3){
                this.game.bot1Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot1Loc <= 75){
                    this.game.data1 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot1Loc > 75 && this.game.bot1Loc <= 95){
                    this.game.data1 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot1Loc > 95){
                    this.game.data1 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot1Loc == 4){
                this.game.bot1Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot1Loc <= 10){
                    this.game.data1 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot1Loc > 10 && this.game.bot1Loc <= 95){
                    this.game.data1 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot1Loc > 95){
                    this.game.data1 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot1Loc == 5){
                this.game.bot1Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot1Loc <= 90){
                    this.game.data1 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot1Loc > 90){
                    this.game.data1 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }

            // Item for Bot 2
            if(this.game.bot2Loc == 1 || this.game.bot2Loc == 2 || this.game.bot2Loc == 3){
                this.game.bot2Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot2Loc <= 75){
                    this.game.data2 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot2Loc > 75 && this.game.bot2Loc <= 95){
                    this.game.data2 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot2Loc > 95){
                    this.game.data2 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot2Loc == 4){
                this.game.bot2Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot2Loc <= 10){
                    this.game.data2 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot2Loc > 10 && this.game.bot2Loc <= 95){
                    this.game.data2 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot2Loc > 95){
                    this.game.data2 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot2Loc == 5){
                this.game.bot2Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot2Loc <= 90){
                    this.game.data2 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot2Loc > 90){
                    this.game.data2 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            // Item for Bot 3
            if(this.game.bot3Loc == 1 || this.game.bot3Loc == 2 || this.game.bot3Loc == 3){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot3Loc <= 75){
                    this.game.data3 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot3Loc > 75 && this.game.bot3Loc <= 95){
                    this.game.data3 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot3Loc > 95){
                    this.game.data3 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot3Loc == 4){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot3Loc <= 10){
                    this.game.data3 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot3Loc > 10 && this.game.bot2Loc <= 95){
                    this.game.data3 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot3Loc > 95){
                    this.game.data3 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot3Loc == 5){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot3Loc <= 90){
                    this.game.data3 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot3Loc > 90){
                    this.game.data3 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            // Item for Bot 4
            if(this.game.bot4Loc == 1 || this.game.bot4Loc == 2 || this.game.bot4Loc == 3){
                this.game.bot4Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot4Loc <= 75){
                    this.game.data4 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot4Loc > 75 && this.game.bot4Loc <= 95){
                    this.game.data4 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot4Loc > 95){
                    this.game.data4 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot4Loc == 4){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot4Loc <= 10){
                    this.game.data4 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot4Loc > 10 && this.game.bot4Loc <= 95){
                    this.game.data4 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot4Loc > 95){
                    this.game.data4 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot4Loc == 5){
                this.game.bot4Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot4Loc <= 90){
                    this.game.data4= uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot4Loc > 90){
                    this.game.data4 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            // Item for Bot 5
            if(this.game.bot5Loc == 1 || this.game.bot5Loc == 2 || this.game.bot5Loc == 3){
                this.game.bot5Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot5Loc <= 75){
                    this.game.data5 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot5Loc > 75 && this.game.bot5Loc <= 95){
                    this.game.data5 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot5Loc > 95){
                    this.game.data5 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot5Loc == 4){
                this.game.bot5Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot5Loc <= 10){
                    this.game.data5 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot5Loc > 10 && this.game.bot5Loc <= 95){
                    this.game.data5 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot5Loc > 95){
                    this.game.data5 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot5Loc == 5){
                this.game.bot5Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot5Loc <= 90){
                    this.game.data5 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot5Loc > 90){
                    this.game.data5 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
        }
        // Game Part 3
        if(this.game.day_count < 13 &&  this.game.day_count > 8){
            // Item for Bot 1
            if(this.game.bot1Loc == 1 || this.game.bot1Loc == 2 || this.game.bot1Loc == 3){
                this.game.bot1Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot1Loc <= 75){
                    this.game.data1 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot1Loc > 75 && this.game.bot1Loc <= 95){
                    this.game.data1 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot1Loc > 95){
                    this.game.data1 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot1Loc == 4){
                this.game.bot1Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot1Loc <= 10){
                    this.game.data1 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot1Loc > 10 && this.game.bot1Loc <= 95){
                    this.game.data1 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot1Loc > 95){
                    this.game.data1 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot1Loc == 5){
                this.game.bot1Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot1Loc <= 90){
                    this.game.data1 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot1Loc > 90){
                    this.game.data1 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }

            // Item for Bot 2
            if(this.game.bot2Loc == 1 || this.game.bot2Loc == 2 || this.game.bot2Loc == 3){
                this.game.bot2Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot2Loc <= 75){
                    this.game.data2 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot2Loc > 75 && this.game.bot2Loc <= 95){
                    this.game.data2 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot2Loc > 95){
                    this.game.data2 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot2Loc == 4){
                this.game.bot2Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot2Loc <= 10){
                    this.game.data2 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot2Loc > 10 && this.game.bot2Loc <= 95){
                    this.game.data2 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot2Loc > 95){
                    this.game.data2 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot2Loc == 5){
                this.game.bot2Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot2Loc <= 90){
                    this.game.data2 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot2Loc > 90){
                    this.game.data2 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            // Item for Bot 3
            if(this.game.bot3Loc == 1 || this.game.bot3Loc == 2 || this.game.bot3Loc == 3){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot3Loc <= 75){
                    this.game.data3 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot3Loc > 75 && this.game.bot3Loc <= 95){
                    this.game.data3 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot3Loc > 95){
                    this.game.data3 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot3Loc == 4){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot3Loc <= 10){
                    this.game.data3 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot3Loc > 10 && this.game.bot2Loc <= 95){
                    this.game.data3 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot3Loc > 95){
                    this.game.data3 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot3Loc == 5){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot3Loc <= 90){
                    this.game.data3 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot3Loc > 90){
                    this.game.data3 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            // Item for Bot 4
            if(this.game.bot4Loc == 1 || this.game.bot4Loc == 2 || this.game.bot4Loc == 3){
                this.game.bot4Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot4Loc <= 75){
                    this.game.data4 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot4Loc > 75 && this.game.bot4Loc <= 95){
                    this.game.data4 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot4Loc > 95){
                    this.game.data4 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot4Loc == 4){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot4Loc <= 10){
                    this.game.data4 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot4Loc > 10 && this.game.bot4Loc <= 95){
                    this.game.data4 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot4Loc > 95){
                    this.game.data4 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot4Loc == 5){
                this.game.bot4Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot4Loc <= 90){
                    this.game.data4= uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot4Loc > 90){
                    this.game.data4 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            // Item for Bot 5
            if(this.game.bot5Loc == 1 || this.game.bot5Loc == 2 || this.game.bot5Loc == 3){
                this.game.bot5Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot5Loc <= 75){
                    this.game.data5 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot5Loc > 75 && this.game.bot5Loc <= 95){
                    this.game.data5 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot5Loc > 95){
                    this.game.data5 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot5Loc == 4){
                this.game.bot5Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot5Loc <= 10){
                    this.game.data5 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot5Loc > 10 && this.game.bot5Loc <= 95){
                    this.game.data5 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot5Loc > 95){
                    this.game.data5 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot5Loc == 5){
                this.game.bot5Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot5Loc <= 90){
                    this.game.data5 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot5Loc > 90){
                    this.game.data5 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
        }
        // Game Part 4(Final Phase)
        if(this.game.day_count < 16 &&  this.game.day_count > 12){
            // Item for Bot 1
            if(this.game.bot1Loc == 1 || this.game.bot1Loc == 2 || this.game.bot1Loc == 3){
                this.game.bot1Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot1Loc <= 75){
                    this.game.data1 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot1Loc > 75 && this.game.bot1Loc <= 95){
                    this.game.data1 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot1Loc > 95){
                    this.game.data1 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot1Loc == 4){
                this.game.bot1Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot1Loc <= 10){
                    this.game.data1 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot1Loc > 10 && this.game.bot1Loc <= 95){
                    this.game.data1 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot1Loc > 95){
                    this.game.data1 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot1Loc == 5){
                this.game.bot1Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot1Loc <= 90){
                    this.game.data1 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot1Loc > 90){
                    this.game.data1 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }

            // Item for Bot 2
            if(this.game.bot2Loc == 1 || this.game.bot2Loc == 2 || this.game.bot2Loc == 3){
                this.game.bot2Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot2Loc <= 75){
                    this.game.data2 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot2Loc > 75 && this.game.bot2Loc <= 95){
                    this.game.data2 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot2Loc > 95){
                    this.game.data2 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot2Loc == 4){
                this.game.bot2Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot2Loc <= 10){
                    this.game.data2 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot2Loc > 10 && this.game.bot2Loc <= 95){
                    this.game.data2 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot2Loc > 95){
                    this.game.data2 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot2Loc == 5){
                this.game.bot2Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot2Loc <= 90){
                    this.game.data2 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot2Loc > 90){
                    this.game.data2 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            // Item for Bot 3
            if(this.game.bot3Loc == 1 || this.game.bot3Loc == 2 || this.game.bot3Loc == 3){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot3Loc <= 75){
                    this.game.data3 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot3Loc > 75 && this.game.bot3Loc <= 95){
                    this.game.data3 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot3Loc > 95){
                    this.game.data3 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot3Loc == 4){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot3Loc <= 10){
                    this.game.data3 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot3Loc > 10 && this.game.bot2Loc <= 95){
                    this.game.data3 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot3Loc > 95){
                    this.game.data3 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot3Loc == 5){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot3Loc <= 90){
                    this.game.data3 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot3Loc > 90){
                    this.game.data3 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            // Item for Bot 4
            if(this.game.bot4Loc == 1 || this.game.bot4Loc == 2 || this.game.bot4Loc == 3){
                this.game.bot4Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot4Loc <= 75){
                    this.game.data4 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot4Loc > 75 && this.game.bot4Loc <= 95){
                    this.game.data4 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot4Loc > 95){
                    this.game.data4 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot4Loc == 4){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot4Loc <= 10){
                    this.game.data4 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot4Loc > 10 && this.game.bot4Loc <= 95){
                    this.game.data4 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot4Loc > 95){
                    this.game.data4 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot4Loc == 5){
                this.game.bot4Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot4Loc <= 90){
                    this.game.data4= uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot4Loc > 90){
                    this.game.data4 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            // Item for Bot 5
            if(this.game.bot5Loc == 1 || this.game.bot5Loc == 2 || this.game.bot5Loc == 3){
                this.game.bot5Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot5Loc <= 75){
                    this.game.data5 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot5Loc > 75 && this.game.bot5Loc <= 95){
                    this.game.data5 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot5Loc > 95){
                    this.game.data5 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot5Loc == 4){
                this.game.bot5Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot5Loc <= 10){
                    this.game.data5 = usefulData[Math.floor(Math.random() *usefulData.length)];
                }
                else if(this.game.bot5Loc > 10 && this.game.bot5Loc <= 95){
                    this.game.data5 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot5Loc > 95){
                    this.game.data5 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
            else if(this.game.bot5Loc == 5){
                this.game.bot5Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot5Loc <= 90){
                    this.game.data5 = uselessData[Math.floor(Math.random() *uselessData.length)];
                }
                else if(this.game.bot5Loc > 90){
                    this.game.data5 = strangeData[Math.floor(Math.random() *strangeData.length)];
                }
            }
        }
        this.loc1 = this.add.text(120, 100, 'Drone1 has a '+this.game.data1, resultConfig);
        this.loc2 = this.add.text(120, 150, 'Drone2 has a '+this.game.data2, resultConfig);
        this.loc3 = this.add.text(120, 200, 'Drone3 has a '+this.game.data3, resultConfig);
        this.loc4 = this.add.text(120, 250, 'Drone4 has a '+this.game.data4, resultConfig);
        this.loc5 = this.add.text(120, 300, 'Drone5 has a '+this.game.data5, resultConfig);
    }
        

    update(){
     }

     
}