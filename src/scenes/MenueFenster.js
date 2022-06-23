class MenueFenster extends Phaser.Scene {

    constructor ()
    {
        super('MenueFenster');
    }

    preload() {

        this.load.spritesheet('backgroundanim', 'assets/Menuesprite.png', {
            frameHeight: 1290,
            frameWidth: 2410,
            spacing: 10
        });
        this.load.image('play', 'assets/Play.png');
        this.load.image('options', 'assets/Options.png');

    }

    create() {
        this.anims.create({
            key: "anim",
            frames: this.anims.generateFrameNumbers("backgroundanim", {
                start: 0,
                end: 4
            }),
            frameRate: 0.25,
            repeat: -1
        });
        this.add.sprite(740, 355, "menueanimation").setScale(0.57).play("anim");
        this.add.image(740, 360, 'play').setScale(0.56);
        this.add.image(740, 420, 'options').setScale(0.4);


    }

}
