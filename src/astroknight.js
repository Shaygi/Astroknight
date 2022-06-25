
var config = {
    type: Phaser.AUTO,
    width: 1485,
    height: 700,
    scene: [LadeFenster, MenueFenster, ErsterDungeon],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0},
            debug: false
        }
    }
};

var game = new Phaser.Game(config);
