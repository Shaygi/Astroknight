import Phaser from 'lib/phaser3'

export class GameScene extends Phaser.Scene{
    constructor() {
        super({
            key: 'dungeon'
        });

        this.cursors = null;
        this.player = null;

        this.spawnPoint = {
            x:450,
            y:1200
        };

        //this.animsManager = new Anims(this);
    }
    init(data){}
    preload(){
        this.animsManager.preload();
    }
    create(settings){
        this.cursors = this.input.keyboard.createCursorKeys();

        window.player = this.player = this.add.rpgcharacter({
            x:this.spawnPoint.x,
            y:this.spawnPoint.y,
            name: 'astro',
            image: 'astro',
            speed: 225
        });

        const camera = this.cameras.main;
        camera.startFollow(this.player);

        this.animsManager.create;

    }

    update(time, delta){
        if(this.cursors.left.isDown)
            this.player.SetIntruction({action: 'walk', option:'left'});
        else if(this.cursors.right.isDown)
            this.player.SetIntruction({action: 'walk', option:'right'});

        if(this.cursors.up.isDown)
            this.player.SetIntruction({action: 'walk', option:'back'});
        else if(this.cursors.down.isDown)
            this.player.SetIntruction({action: 'walk', option:'front'});

        this.player.update();

    }
}