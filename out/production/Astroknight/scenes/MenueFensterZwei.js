import {Scene}  from 'Phaser'
class MenueFensterZwei extends Scene {

    constructor ()
    {
        super('MenueFensterZwei');
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
        frameRate: 2,
        repeat: -1
    });
    men = this.add.sprite(740, 355, "menueanimation");
    men.setScale(0.57);
    men.play("anim");
    this.add.image(740, 360, 'play').setScale(0.56);
    this.add.image(740, 420, 'options').setScale(0.4);


}

}