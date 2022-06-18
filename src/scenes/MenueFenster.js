var config = {
    type: Phaser.AUTO,
    width: 1500,
    height: 700,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 500},
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload() {
    this.load.image('background', 'assets/Menuebild.png');
    this.load.image('play', 'assets/Play.png');
    this.load.image('options', 'assets/Options.png');
}


function create() {

    menue = this.add.image(750, 360, 'background');
    menue.setScale(0.28);
    play = this.add.image(750, 490, 'play');
    play.setScale(0.56);
    options = this.add.image(750, 600, 'options');
    options.setScale(0.4);
}

function update() {

}