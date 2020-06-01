class Deduction extends Phaser.Scene {
    constructor() {
        super("deductionScene");
    }

    preload(){
        this.load.image('XD', './assets/DeductBlank.png');

    }

    create(){
        // Continue text configs
        let resultConfig = {
            fontFamily: 'Courier',
            fontSize: '20px',
            
            color: '#000000',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 400
        }
        // Item display text configs
        let itemConfig = {
            fontFamily: 'Courier',
            fontSize: '16px',
            
            color: '#000000',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 400
        }

        // Load Background
        this.dayfield = this.add.tileSprite(0, 0, 640, 480, 'XD').setOrigin(0, 0);

        // Item Arrays used to fill data 
        var uselessData;
        this.uselessData = ["An Old Boot", "3D Scan of a Cuddle Fish", "Broken Rocks", "Angler Fish Eye", "Thermal Scan of Rocks", "Shark Leftovers", "Audio Recording of Cuddle Fish Mating"];
        var strangeData;
        this.strangeData = ["Blurred Image of a Hand", "Crackling Audio that Sounds like Singing", "A Faded Image of a Humanoid Shape", "A Cuddle Fish"];
        var usefulData;
        this.usefulData =  ["Sample of a Prime Micro Organism", "Fossilized Mirco Plankton", "A Stromatolite", "Location of a Deep Sea Trench"];
        
        // Define Keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        
        
        // Call getData() to get data for the drones
        this.getData();
        
        // Displays text of current item being looked at 
        this.itemText = this.add.text(120, 220, ''+this.game.data1, itemConfig);
        
        // Used to progress to next scene
        this.chatAdv = this.add.text(120, 350, 'Press -Space- to Continue!', resultConfig);

        // Variable keeps track of what item is being looked at
        var count;
        this.count = 1;
    }
        

    update(){

        // Load into conversation scene
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            console.log(this.game.relation);
            this.scene.start("dialogueScene");
        }
        // Go back one data page
        if(Phaser.Input.Keyboard.JustDown(keyLEFT)){
            if(this.count != 1){
                this.count = this.count - 1;
            }
        }
        // Go forward one data page
        else if(Phaser.Input.Keyboard.JustDown(keyRIGHT)){
            if(this.count != 5){
                this.count = this.count + 1;
            }
        }

        // Handles when data needs to be submitted.
        // When the keep button is pressed, the itemValue
        // is added to the relation score and then set to 
        // zero. The data variable is also set to submitted
        // to show that data has already been processed
        if(!(game.input.mousePointer.leftButtonReleased()) &&
            game.input.mousePointer.x < 288 && 
            game.input.mousePointer.x > 96 && 
            game.input.mousePointer.y < 128 &&
            game.input.mousePointer.y > 80){
            
            if(this.count == 1){
                if(this.game.data1 != 'Discarded!'){
                    this.game.data1 = 'Submitted!';
                    this.game.relation = this.game.relation + this.game.itemValue1;
                    this.game.itemValue1 = 0;
                }
            }
            else if(this.count == 2){
                if(this.game.data2 != 'Discarded!'){
                    this.game.data2 = 'Submitted!';
                    this.game.relation = this.game.relation + this.game.itemValue2;
                    this.game.itemValue2 = 0;
                }
            }
            else if(this.count == 3){
                if(this.game.data3 != 'Discarded!'){
                    this.game.data3 = 'Submitted!';
                    this.game.relation = this.game.relation + this.game.itemValue3;
                    this.game.itemValue3 = 0;
                }        
            }
            else if(this.count == 4){
                if(this.game.data4 != 'Discarded!'){
                    this.game.data4 = 'Submitted!';
                    this.game.relation = this.game.relation + this.game.itemValue4;
                    this.game.itemValue4 = 0;
                }     
            }
            else if(this.count == 5){
                if(this.game.data5 != 'Discarded!'){
                    this.game.data5 = 'Submitted!';
                    this.game.relation = this.game.relation + this.game.itemValue5;
                    this.game.itemValue5 = 0;
                }     
            }
        }

        // Handles when data needs to be discarded
        // When the discarded button is clicked, the
        // data is set to 'Discarded' and the relation
        // value is set to 0
        else if(!(game.input.mousePointer.leftButtonReleased()) &&
            game.input.mousePointer.x < 545 && 
            game.input.mousePointer.x > 350 && 
            game.input.mousePointer.y < 128 &&
            game.input.mousePointer.y > 80){
                if(this.count == 1){
                    if(this.game.data1 != 'Submitted!'){
                        this.game.data1 = 'Discarded!';
                        this.game.itemValue1 = 0;
                    }
                }
                else if(this.count == 2){
                    if(this.game.data2 != 'Submitted!'){
                        this.game.data2 = 'Discarded!';
                        this.game.itemValue2 = 0;
                    }
                }
                else if(this.count == 3){
                    if(this.game.data3 != 'Submitted!'){
                        this.game.data3 = 'Discarded!';
                        this.game.itemValue3 = 0;
                    }        
                }
                else if(this.count == 4){
                    if(this.game.data4 != 'Submitted!'){
                        this.game.data4 = 'Discarded!';
                        this.game.itemValue4 = 0;
                    }     
                }
                else if(this.count == 5){
                    if(this.game.data5 != 'Submitted!'){
                        this.game.data5 = 'Discarded!';
                        this.game.itemValue5 = 0;
                    }     
                }
        }

        // Change the text displayed based on what page is being viewed
        if(this.count == 1){
            this.itemText.setText(''+this.game.data1);
        }
        else if(this.count == 2){
            this.itemText.setText(''+this.game.data2);
        }
        else if(this.count == 3){
            this.itemText.setText(''+this.game.data3);
        }
        else if(this.count == 4){
            this.itemText.setText(''+this.game.data4);
        }
        else if(this.count == 5){
            this.itemText.setText(''+this.game.data5);
        }
     }


    /*
    The getData function is used to give random data elements to the global variables.
    This function uses the global variables that keep track of where drones are sent 
    along with what the current day in the cycle is to determine what kind of data the
    drones bring back. Based on what location the drone(s) are sent, they are given a 
    number from 1-100 that will be used to determine what kind of data is recieved from
    the location. The 1-100 range is used to replicate percentage usage, as each location
    has different rates of data production based on type. The data produced is saved in the global
    variable data(1-5) and the relation value, which is based on that type of data recieved, 
    which is saved in itemValue(1-5)

    */
    getData(){

        // Game Part 1
        if(this.game.day_count < 5 ){
            // Item for Bot 1
            if(this.game.bot1Loc == 1 || this.game.bot1Loc == 2 || this.game.bot1Loc == 3){
                this.game.bot1Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot1Loc <= 75){
                    this.game.data1 = this.usefulData[Math.floor(Math.random() * this.usefulData.length)];
                    this.game.itemValue1 = 1;
                }
                else if(this.game.bot1Loc > 75 && this.game.bot1Loc <= 95){
                    this.game.data1 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue1 = -1;
                }
                else if(this.game.bot1Loc > 95){
                    this.game.data1 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue1 = -2;
                }
            }
            else if(this.game.bot1Loc == 4){
                this.game.bot1Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot1Loc <= 10){
                    this.game.data1 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue1 = 1;
                }
                else if(this.game.bot1Loc > 10 && this.game.bot1Loc <= 95){
                    this.game.data1 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue1 = -1;
                }
                else if(this.game.bot1Loc > 95){
                    this.game.data1 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue1 = -2;
                }
            }
            else if(this.game.bot1Loc == 5){
                this.game.bot1Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot1Loc <= 90){
                    this.game.data1 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue1 = -1;
                }
                else if(this.game.bot1Loc > 90){
                    this.game.data1 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue1 = -2;
                }
            }

            // Item for Bot 2
            if(this.game.bot2Loc == 1 || this.game.bot2Loc == 2 || this.game.bot2Loc == 3){
                this.game.bot2Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot2Loc <= 75){
                    this.game.data2 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue2 = 1;
                }
                else if(this.game.bot2Loc > 75 && this.game.bot2Loc <= 95){
                    this.game.data2 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue2 = -1;
                }
                else if(this.game.bot2Loc > 95){
                    this.game.data2 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue2 = -2;
                }
            }
            else if(this.game.bot2Loc == 4){
                this.game.bot2Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot2Loc <= 10){
                    this.game.data2 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue2 = 1;
                }
                else if(this.game.bot2Loc > 10 && this.game.bot2Loc <= 95){
                    this.game.data2 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue2 = -1;
                }
                else if(this.game.bot2Loc > 95){
                    this.game.data2 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue2 = -2;
                }
            }
            else if(this.game.bot2Loc == 5){
                this.game.bot2Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot2Loc <= 90){
                    this.game.data2 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue2 = -1;
                }
                else if(this.game.bot2Loc > 90){
                    this.game.data2 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue2 = -2;
                }
            }
            // Item for Bot 3
            if(this.game.bot3Loc == 1 || this.game.bot3Loc == 2 || this.game.bot3Loc == 3){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot3Loc <= 75){
                    this.game.data3 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue3 = 1;
                }
                else if(this.game.bot3Loc > 75 && this.game.bot3Loc <= 95){
                    this.game.data3 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue3 = -1;
                }
                else if(this.game.bot3Loc > 95){
                    this.game.data3 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue3 = -2;
                }
            }
            else if(this.game.bot3Loc == 4){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot3Loc <= 10){
                    this.game.data3 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue3 = 1;
                }
                else if(this.game.bot3Loc > 10 && this.game.bot2Loc <= 95){
                    this.game.data3 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue3 = -1;
                }
                else if(this.game.bot3Loc > 95){
                    this.game.data3 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue3 = -2;
                }
            }
            else if(this.game.bot3Loc == 5){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot3Loc <= 90){
                    this.game.data3 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue3 = -1;
                }
                else if(this.game.bot3Loc > 90){
                    this.game.data3 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue3 = -2;
                }
            }
            // Item for Bot 4
            if(this.game.bot4Loc == 1 || this.game.bot4Loc == 2 || this.game.bot4Loc == 3){
                this.game.bot4Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot4Loc <= 75){
                    this.game.data4 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue4 = 1;
                }
                else if(this.game.bot4Loc > 75 && this.game.bot4Loc <= 95){
                    this.game.data4 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue4 = -1;
                }
                else if(this.game.bot4Loc > 95){
                    this.game.data4 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue4 = -2;
                }
            }
            else if(this.game.bot4Loc == 4){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot4Loc <= 10){
                    this.game.data4 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue4 = 1;
                }
                else if(this.game.bot4Loc > 10 && this.game.bot4Loc <= 95){
                    this.game.data4 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue4 = -1;
                }
                else if(this.game.bot4Loc > 95){
                    this.game.data4 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue4 = -2;
                }
            }
            else if(this.game.bot4Loc == 5){
                this.game.bot4Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot4Loc <= 90){
                    this.game.data4= this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue4 = -1;
                }
                else if(this.game.bot4Loc > 90){
                    this.game.data4 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue4 = -2;
                }
            }
            // Item for Bot 5
            if(this.game.bot5Loc == 1 || this.game.bot5Loc == 2 || this.game.bot5Loc == 3){
                this.game.bot5Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot5Loc <= 75){
                    this.game.data5 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue5 = 1;
                }
                else if(this.game.bot5Loc > 75 && this.game.bot5Loc <= 95){
                    this.game.data5 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue5 = -1;
                }
                else if(this.game.bot5Loc > 95){
                    this.game.data5 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue5 = -2;
                }
            }
            else if(this.game.bot5Loc == 4){
                this.game.bot5Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot5Loc <= 10){
                    this.game.data5 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue5 = 1;
                }
                else if(this.game.bot5Loc > 10 && this.game.bot5Loc <= 95){
                    this.game.data5 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue5 = -1;
                }
                else if(this.game.bot5Loc > 95){
                    this.game.data5 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue5 = -2;
                }
            }
            else if(this.game.bot5Loc == 5){
                this.game.bot5Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot5Loc <= 90){
                    this.game.data5 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue5 = -1;
                }
                else if(this.game.bot5Loc > 90){
                    this.game.data5 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue5 = -2;
                }
            }
        }
        // Game Part 2
        if(this.game.day_count < 9 &&  this.game.day_count > 4){
            // Item for Bot 1
            if(this.game.bot1Loc == 1 || this.game.bot1Loc == 2 || this.game.bot1Loc == 3){
                this.game.bot1Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot1Loc <= 75){
                    this.game.data1 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue1 = 1;
                }
                else if(this.game.bot1Loc > 75 && this.game.bot1Loc <= 95){
                    this.game.data1 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue1 = -1;
                }
                else if(this.game.bot1Loc > 95){
                    this.game.data1 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue1 = -2;
                }
            }
            else if(this.game.bot1Loc == 4){
                this.game.bot1Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot1Loc <= 10){
                    this.game.data1 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue1 = 1;
                }
                else if(this.game.bot1Loc > 10 && this.game.bot1Loc <= 95){
                    this.game.data1 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue1 = -1;
                }
                else if(this.game.bot1Loc > 95){
                    this.game.data1 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue1 = -2;
                }
            }
            else if(this.game.bot1Loc == 5){
                this.game.bot1Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot1Loc <= 90){
                    this.game.data1 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue1 = -1;
                }
                else if(this.game.bot1Loc > 90){
                    this.game.data1 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue1 = -2;
                }
            }

            // Item for Bot 2
            if(this.game.bot2Loc == 1 || this.game.bot2Loc == 2 || this.game.bot2Loc == 3){
                this.game.bot2Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot2Loc <= 75){
                    this.game.data2 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue2 = 1;
                }
                else if(this.game.bot2Loc > 75 && this.game.bot2Loc <= 95){
                    this.game.data2 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue2 = -1;
                }
                else if(this.game.bot2Loc > 95){
                    this.game.data2 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue2 = -2;
                }
            }
            else if(this.game.bot2Loc == 4){
                this.game.bot2Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot2Loc <= 10){
                    this.game.data2 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue2 = 1;
                }
                else if(this.game.bot2Loc > 10 && this.game.bot2Loc <= 95){
                    this.game.data2 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue2 = -1;
                }
                else if(this.game.bot2Loc > 95){
                    this.game.data2 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue2 = -2;
                }
            }
            else if(this.game.bot2Loc == 5){
                this.game.bot2Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot2Loc <= 90){
                    this.game.data2 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue2 = -1;
                }
                else if(this.game.bot2Loc > 90){
                    this.game.data2 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue2 = -2;
                }
            }
            // Item for Bot 3
            if(this.game.bot3Loc == 1 || this.game.bot3Loc == 2 || this.game.bot3Loc == 3){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot3Loc <= 75){
                    this.game.data3 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue3 = 1;
                }
                else if(this.game.bot3Loc > 75 && this.game.bot3Loc <= 95){
                    this.game.data3 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue3 = -1;
                }
                else if(this.game.bot3Loc > 95){
                    this.game.data3 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue3 = -2;
                }
            }
            else if(this.game.bot3Loc == 4){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot3Loc <= 10){
                    this.game.data3 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue3 = 1;
                }
                else if(this.game.bot3Loc > 10 && this.game.bot2Loc <= 95){
                    this.game.data3 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue3 = -1;
                }
                else if(this.game.bot3Loc > 95){
                    this.game.data3 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue3 = -2;
                }
            }
            else if(this.game.bot3Loc == 5){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot3Loc <= 90){
                    this.game.data3 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue3 = -1;
                }
                else if(this.game.bot3Loc > 90){
                    this.game.data3 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue3 = -2;
                }
            }
            // Item for Bot 4
            if(this.game.bot4Loc == 1 || this.game.bot4Loc == 2 || this.game.bot4Loc == 3){
                this.game.bot4Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot4Loc <= 75){
                    this.game.data4 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue4 = 1;
                }
                else if(this.game.bot4Loc > 75 && this.game.bot4Loc <= 95){
                    this.game.data4 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue4 = -1;
                }
                else if(this.game.bot4Loc > 95){
                    this.game.data4 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue4 = -2;
                }
            }
            else if(this.game.bot4Loc == 4){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot4Loc <= 10){
                    this.game.data4 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue4 = 1;
                }
                else if(this.game.bot4Loc > 10 && this.game.bot4Loc <= 95){
                    this.game.data4 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue4 = -1;
                }
                else if(this.game.bot4Loc > 95){
                    this.game.data4 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue4 = -2;
                }
            }
            else if(this.game.bot4Loc == 5){
                this.game.bot4Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot4Loc <= 90){
                    this.game.data4= this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue4 = -1;
                }
                else if(this.game.bot4Loc > 90){
                    this.game.data4 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue4 = -2;
                }
            }
            // Item for Bot 5
            if(this.game.bot5Loc == 1 || this.game.bot5Loc == 2 || this.game.bot5Loc == 3){
                this.game.bot5Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot5Loc <= 75){
                    this.game.data5 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue5 = 1;
                }
                else if(this.game.bot5Loc > 75 && this.game.bot5Loc <= 95){
                    this.game.data5 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue5 = -1;
                }
                else if(this.game.bot5Loc > 95){
                    this.game.data5 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue5 = -2;
                }
            }
            else if(this.game.bot5Loc == 4){
                this.game.bot5Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot5Loc <= 10){
                    this.game.data5 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue5 = 1;
                }
                else if(this.game.bot5Loc > 10 && this.game.bot5Loc <= 95){
                    this.game.data5 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue5 = -1;
                }
                else if(this.game.bot5Loc > 95){
                    this.game.data5 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue5 = -2;
                }
            }
            else if(this.game.bot5Loc == 5){
                this.game.bot5Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot5Loc <= 90){
                    this.game.data5 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue5 = -1;
                }
                else if(this.game.bot5Loc > 90){
                    this.game.data5 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue5 = -2;
                }
            }
        }
        // Game Part 3
        if(this.game.day_count < 13 &&  this.game.day_count > 8){
            // Item for Bot 1
            if(this.game.bot1Loc == 1 || this.game.bot1Loc == 2 || this.game.bot1Loc == 3){
                this.game.bot1Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot1Loc <= 75){
                    this.game.data1 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue1 = 1;
                }
                else if(this.game.bot1Loc > 75 && this.game.bot1Loc <= 95){
                    this.game.data1 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue1 = -1;
                }
                else if(this.game.bot1Loc > 95){
                    this.game.data1 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue1 = -2;
                }
            }
            else if(this.game.bot1Loc == 4){
                this.game.bot1Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot1Loc <= 10){
                    this.game.data1 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue1 = 1;
                }
                else if(this.game.bot1Loc > 10 && this.game.bot1Loc <= 95){
                    this.game.data1 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue1 = -1;
                }
                else if(this.game.bot1Loc > 95){
                    this.game.data1 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue1 = -2;
                }
            }
            else if(this.game.bot1Loc == 5){
                this.game.bot1Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot1Loc <= 90){
                    this.game.data1 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue1 = -1;
                }
                else if(this.game.bot1Loc > 90){
                    this.game.data1 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue1 = -2;
                }
            }

            // Item for Bot 2
            if(this.game.bot2Loc == 1 || this.game.bot2Loc == 2 || this.game.bot2Loc == 3){
                this.game.bot2Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot2Loc <= 75){
                    this.game.data2 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue2 = 1;
                }
                else if(this.game.bot2Loc > 75 && this.game.bot2Loc <= 95){
                    this.game.data2 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue2 = -1;
                }
                else if(this.game.bot2Loc > 95){
                    this.game.data2 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue2 = -2;
                }
            }
            else if(this.game.bot2Loc == 4){
                this.game.bot2Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot2Loc <= 10){
                    this.game.data2 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue2 = 1;
                }
                else if(this.game.bot2Loc > 10 && this.game.bot2Loc <= 95){
                    this.game.data2 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue2 = -1;
                }
                else if(this.game.bot2Loc > 95){
                    this.game.data2 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue2 = -2;
                }
            }
            else if(this.game.bot2Loc == 5){
                this.game.bot2Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot2Loc <= 90){
                    this.game.data2 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue2 = -1;
                }
                else if(this.game.bot2Loc > 90){
                    this.game.data2 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue2 = -2;
                }
            }
            // Item for Bot 3
            if(this.game.bot3Loc == 1 || this.game.bot3Loc == 2 || this.game.bot3Loc == 3){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot3Loc <= 75){
                    this.game.data3 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue3 = 1;
                }
                else if(this.game.bot3Loc > 75 && this.game.bot3Loc <= 95){
                    this.game.data3 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue3 = -1;
                }
                else if(this.game.bot3Loc > 95){
                    this.game.data3 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue3 = -2;
                }
            }
            else if(this.game.bot3Loc == 4){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot3Loc <= 10){
                    this.game.data3 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue3 = 1;
                }
                else if(this.game.bot3Loc > 10 && this.game.bot2Loc <= 95){
                    this.game.data3 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue3 = -1;
                }
                else if(this.game.bot3Loc > 95){
                    this.game.data3 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue3 = -2;
                }
            }
            else if(this.game.bot3Loc == 5){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot3Loc <= 90){
                    this.game.data3 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue3 = -1;
                }
                else if(this.game.bot3Loc > 90){
                    this.game.data3 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue3 = -2;
                }
            }
            // Item for Bot 4
            if(this.game.bot4Loc == 1 || this.game.bot4Loc == 2 || this.game.bot4Loc == 3){
                this.game.bot4Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot4Loc <= 75){
                    this.game.data4 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue4 = 1;
                }
                else if(this.game.bot4Loc > 75 && this.game.bot4Loc <= 95){
                    this.game.data4 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue4 = -1;
                }
                else if(this.game.bot4Loc > 95){
                    this.game.data4 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue4 = -2;
                }
            }
            else if(this.game.bot4Loc == 4){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot4Loc <= 10){
                    this.game.data4 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue4 = 1;
                }
                else if(this.game.bot4Loc > 10 && this.game.bot4Loc <= 95){
                    this.game.data4 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue4 = -1;
                }
                else if(this.game.bot4Loc > 95){
                    this.game.data4 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue4 = -2;
                }
            }
            else if(this.game.bot4Loc == 5){
                this.game.bot4Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot4Loc <= 90){
                    this.game.data4= this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue4 = -1;
                }
                else if(this.game.bot4Loc > 90){
                    this.game.data4 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue4 = -2;
                }
            }
            // Item for Bot 5
            if(this.game.bot5Loc == 1 || this.game.bot5Loc == 2 || this.game.bot5Loc == 3){
                this.game.bot5Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot5Loc <= 75){
                    this.game.data5 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue5 = 1;
                }
                else if(this.game.bot5Loc > 75 && this.game.bot5Loc <= 95){
                    this.game.data5 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue5 = -1;
                }
                else if(this.game.bot5Loc > 95){
                    this.game.data5 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue5 = -2;
                }
            }
            else if(this.game.bot5Loc == 4){
                this.game.bot5Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot5Loc <= 10){
                    this.game.data5 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue5 = 1;
                }
                else if(this.game.bot5Loc > 10 && this.game.bot5Loc <= 95){
                    this.game.data5 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue5 = -1;
                }
                else if(this.game.bot5Loc > 95){
                    this.game.data5 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue5 = -2;
                }
            }
            else if(this.game.bot5Loc == 5){
                this.game.bot5Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot5Loc <= 90){
                    this.game.data5 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue5 = -1;
                }
                else if(this.game.bot5Loc > 90){
                    this.game.data5 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue5 = -2;
                }
            }
        }
        // Game Part 4(Final Phase)
        if(this.game.day_count < 16 &&  this.game.day_count > 12){
            // Item for Bot 1
            if(this.game.bot1Loc == 1 || this.game.bot1Loc == 2 || this.game.bot1Loc == 3){
                this.game.bot1Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot1Loc <= 75){
                    this.game.data1 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue1 = 1;
                }
                else if(this.game.bot1Loc > 75 && this.game.bot1Loc <= 95){
                    this.game.data1 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue1 = -1;
                }
                else if(this.game.bot1Loc > 95){
                    this.game.data1 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue1 = -2;
                }
            }
            else if(this.game.bot1Loc == 4){
                this.game.bot1Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot1Loc <= 10){
                    this.game.data1 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue1 = 1;
                }
                else if(this.game.bot1Loc > 10 && this.game.bot1Loc <= 95){
                    this.game.data1 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue1 = -1;
                }
                else if(this.game.bot1Loc > 95){
                    this.game.data1 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue1 = -2;
                }
            }
            else if(this.game.bot1Loc == 5){
                this.game.bot1Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot1Loc <= 90){
                    this.game.data1 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue1 = -1;
                }
                else if(this.game.bot1Loc > 90){
                    this.game.data1 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue1 = -2;
                }
            }

            // Item for Bot 2
            if(this.game.bot2Loc == 1 || this.game.bot2Loc == 2 || this.game.bot2Loc == 3){
                this.game.bot2Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot2Loc <= 75){
                    this.game.data2 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue2 = 1;
                }
                else if(this.game.bot2Loc > 75 && this.game.bot2Loc <= 95){
                    this.game.data2 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue2 = -1;
                }
                else if(this.game.bot2Loc > 95){
                    this.game.data2 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue2 = -2;
                }
            }
            else if(this.game.bot2Loc == 4){
                this.game.bot2Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot2Loc <= 10){
                    this.game.data2 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue2 = 1;
                }
                else if(this.game.bot2Loc > 10 && this.game.bot2Loc <= 95){
                    this.game.data2 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue2 = -1;
                }
                else if(this.game.bot2Loc > 95){
                    this.game.data2 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue2 = -2;
                }
            }
            else if(this.game.bot2Loc == 5){
                this.game.bot2Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot2Loc <= 90){
                    this.game.data2 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue2 = -1;
                }
                else if(this.game.bot2Loc > 90){
                    this.game.data2 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue2 = -2;
                }
            }
            // Item for Bot 3
            if(this.game.bot3Loc == 1 || this.game.bot3Loc == 2 || this.game.bot3Loc == 3){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot3Loc <= 75){
                    this.game.data3 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue3 = 1;
                }
                else if(this.game.bot3Loc > 75 && this.game.bot3Loc <= 95){
                    this.game.data3 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue3 = -1;
                }
                else if(this.game.bot3Loc > 95){
                    this.game.data3 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue3 = -2;
                }
            }
            else if(this.game.bot3Loc == 4){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot3Loc <= 10){
                    this.game.data3 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue3 = 1;
                }
                else if(this.game.bot3Loc > 10 && this.game.bot2Loc <= 95){
                    this.game.data3 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue3 = -1;
                }
                else if(this.game.bot3Loc > 95){
                    this.game.data3 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue3 = -2;
                }
            }
            else if(this.game.bot3Loc == 5){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot3Loc <= 90){
                    this.game.data3 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue3 = -1;
                }
                else if(this.game.bot3Loc > 90){
                    this.game.data3 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue3 = -2;
                }
            }
            // Item for Bot 4
            if(this.game.bot4Loc == 1 || this.game.bot4Loc == 2 || this.game.bot4Loc == 3){
                this.game.bot4Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot4Loc <= 75){
                    this.game.data4 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue4 = 1;
                }
                else if(this.game.bot4Loc > 75 && this.game.bot4Loc <= 95){
                    this.game.data4 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue4 = -1;
                }
                else if(this.game.bot4Loc > 95){
                    this.game.data4 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue4 = -2;
                }
            }
            else if(this.game.bot4Loc == 4){
                this.game.bot3Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot4Loc <= 10){
                    this.game.data4 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue4 = 1;
                }
                else if(this.game.bot4Loc > 10 && this.game.bot4Loc <= 95){
                    this.game.data4 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue4 = -1;
                }
                else if(this.game.bot4Loc > 95){
                    this.game.data4 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue4 = -2;
                }
            }
            else if(this.game.bot4Loc == 5){
                this.game.bot4Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot4Loc <= 90){
                    this.game.data4= this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue4 = -1;
                }
                else if(this.game.bot4Loc > 90){
                    this.game.data4 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue4 = -2;
                }
            }
            // Item for Bot 5
            if(this.game.bot5Loc == 1 || this.game.bot5Loc == 2 || this.game.bot5Loc == 3){
                this.game.bot5Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot5Loc <= 75){
                    this.game.data5 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue5 = 1;
                }
                else if(this.game.bot5Loc > 75 && this.game.bot5Loc <= 95){
                    this.game.data5 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue5 = -1;
                }
                else if(this.game.bot5Loc > 95){
                    this.game.data5 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue5 = -2;
                }
            }
            else if(this.game.bot5Loc == 4){
                this.game.bot5Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot5Loc <= 10){
                    this.game.data5 = this.usefulData[Math.floor(Math.random() *this.usefulData.length)];
                    this.game.itemValue5 = 1;
                }
                else if(this.game.bot5Loc > 10 && this.game.bot5Loc <= 95){
                    this.game.data5 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue5 = -1;
                }
                else if(this.game.bot5Loc > 95){
                    this.game.data5 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue5 = -2;
                }
            }
            else if(this.game.bot5Loc == 5){
                this.game.bot5Loc = Math.floor(Math.random() * 100) + 1;
                if(this.game.bot5Loc <= 90){
                    this.game.data5 = this.uselessData[Math.floor(Math.random() *this.uselessData.length)];
                    this.game.itemValue5 = -1;
                }
                else if(this.game.bot5Loc > 90){
                    this.game.data5 = this.strangeData[Math.floor(Math.random() *this.strangeData.length)];
                    this.game.itemValue5 = -2;
                }
            }
        }


     }

     
}