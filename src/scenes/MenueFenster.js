var config = {
    type: Phaser.AUTO,
    width: 1485,
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

    this.load.spritesheet('backgroundanim', 'assets/Menuesprite.png', {
        frameHeight: 1290,
        frameWidth: 2410,
        spacing: 10
    });
    this.load.image('play', 'assets/Play.png');
    this.load.image('options', 'assets/Options.png');
}

var men;

function create() {
    this.anims.create({
        key: "anim",
        frames: this.anims.generateFrameNumbers("backgroundanim", {
            start: 0,
            end: 4
        }),
        frameRate: 2,
        repeat: -1
    });
    men = this.add.sprite(740, 355, "menueanimation");
    men.setScale(0.57);
    men.play("anim");
    play = this.add.image(740, 360, 'play');
    play.setScale(0.56);
    options = this.add.image(740, 420, 'options');
    options.setScale(0.4);
}

function update() {

}