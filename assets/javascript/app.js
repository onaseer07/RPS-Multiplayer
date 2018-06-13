// Initialize Firebase
var config = {
    apiKey: "AIzaSyAVpHDQIRyJ6YlzMJ5VmAAtSco8zLQfI-o",
    authDomain: "rps-game-5d20b.firebaseapp.com",
    databaseURL: "https://rps-game-5d20b.firebaseio.com",
    projectId: "rps-game-5d20b",
    storageBucket: "rps-game-5d20b.appspot.com",
    messagingSenderId: "707962601542"
    };

firebase.initializeApp(config);




    // On click of the start button the input value gets stored into the DB
    //If (the Players child doesn't exist) {
        //DB id 1 created as a players child
            //P1 name gets stored into DB
                //local input field and start button disappear
                //display Player One: P1.name to Both Screens' pOneContainer DOM
                //display "Waiting for Player Two to Join!" to Both Screens' pTwoContainer DOM

            //} else if (Players child is 1) {

                //DB id 2 created as a players child
                //P2 name gets stored into DB
                //local input field and start button disappear
                //Set DB turn value to 1

                    //if(turn value = 1 && Player # = 1) {

                        //display "It's your Turn!" to P1 screen
                        //display "Waiting for name to choose!" to P2 Screen
                        //display P1.name to Both Screens' pOneContainer DOM
                        //display P2.name to Both Screens' pTwoContainer DOM
                        //display only Tallies to both screens and both containers DOM
                        //Highlight pOneContainer brown on both screens
                        //display Player One's RPS choices to ONLY P1 screen pOneContainer DOM (Hint: Create a function showChoices)
                        
                    //} else if ( turn value == 2 && Player == 2) {

                        //display Player One: P1.name to Both Screens' pOneContainer DOM
                        //display Player Two: P2.name to Both Screens' pTwoContainer DOM
                        //display only Tallies to both screens and both containers DOM
                        //Highlight pTwoContainer brown on both screens
                        //display Player Two's RPS choices to ONLY P2 screen pOneContainer DOM (Hint: Create a function showChoices)
                        

                    //}

            
                //} else {

                //}
