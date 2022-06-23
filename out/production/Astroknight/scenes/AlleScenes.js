class LadeFensterZwei extends Phaser.Scene {

    constructor(){
        super('LadeFensterZwei');
    }
// Create a new Phaser Game object


    preload() {

        var progressBar = this.add.graphics();
        var progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(570, 270, 320, 50);

        var width = this.cameras.main.width;
        var height = this.cameras.main.height;
        var loadingText = this.make.text({
            x: width / 2,
            y: height / 2 - 50,
            text: 'Loading...',
            style: {
                font: '20px monospace',
                fill: '#ffffff'
            }
        });
        loadingText.setOrigin(0.5, -3);

        var percentText = this.make.text({
            x: width / 2,
            y: height / 2 - 5,
            text: '0%',
            style: {
                font: '18px monospace',
                fill: '#ffffff'
            }
        });
        percentText.setOrigin(0.5, -3);

        this.load.on('progress', function (value) {
            percentText.setText(parseInt(value * 100) + '%');
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(580, 280, 300 * value, 30);
        });

        this.load.on('complete', function () {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
        });


        for (var i = 0; i < 3000; i++) {
            this.load.image('logo' + i, 'assets/logo.png');
        }
        this.load.image('logo', 'assets/logo.png');

    }

    create() {
        this.add.image(740, 360, 'logo');
        this.input.on('pointerdown', () => this.scene.start('anim'))

    }

    update() {
        this.scene.start('MenueFensterZwei');
    }
}

class MenueFensterZwei extends Phaser.Scene {

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