// Rocket Patrol Mod---Archer Simulater  
// Created by Abudula Aisikaer

// Redesign the game's artwork, UI, and sound to change its theme/aesthetic (to something other than sci-fi) (50)
// Create a new spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (25)
// Create a new title screen (15)
// Display the time remaining (in seconds) on the screen (15)
// Allow the player to control the Rocket after it's fired (10)
// Add your own (copyright-free) background music to the Play scene (10)
// Create a new scrolling tile sprite for the background (10)

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

//define game settings
game.settings = {
    spaceshipSpeed: 3,
    gameTimer: 60000
}

//reserve some keyboard variables 
let keyF, keyLEFT, keyRIGHT;

