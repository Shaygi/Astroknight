
var config = {
    type: Phaser.AUTO,
    width: 1485,
    height: 700,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0},
            debug: false
        }
    },
    scene: [LadeFensterZwei, MenueFensterZwei]
};

var game = new Phaser.Game(config);
