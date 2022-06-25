var playknopf;
var optionsknopf;
var menue;
class MenueFenster extends Phaser.Scene {

    constructor ()
    {
        super('MenueFenster');
    }

    preload() {

        this.load.spritesheet('backanim', 'assets/Menuesprite.png', {
            frameHeight: 1290,
            frameWidth: 2410,
            spacing: 10
        });
        this.load.image('playbutton', 'assets/Play.png');
        this.load.image('optionsbutton', 'assets/Options.png');

    }

    create() {
        this.anims.create({
            key: 'menueanimation',
            frames: this.anims.generateFrameNumbers('backanim', {start: 0, end: 4}),
            frameRate: 0.25,
            repeat: -1
        });
        menue = this.physics.add.sprite(740, 355, 'backanim').setScale(0.57).play('menueanimation',true);
        playknopf = this.add.image(740, 360, 'playbutton').setScale(0.56);
        optionsknopf = this.add.image(740, 420, 'optionsbutton').setScale(0.4);


    }
    update(){
    }

}
