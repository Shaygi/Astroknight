var cursors;
var player;
var fireLayer;
var wandLayer;
var bodenLayer;
class ZweiterDungeon extends Phaser.Scene{

    constructor() {
        super('ZweiterDungeon');

    }

    preload() {
        this.load.image("cave", "assets/tilemaps/cave.png"); //Tileset
        this.load.tilemapTiledJSON('dungeon2', 'assets/tilemaps/ZweiterDungeon.json');
        this.load.spritesheet('astro', 'assets/Astro.png', { frameWidth: 20, frameHeight: 29 });
    }

    create(){
        const dungeon2 = this.make.tilemap({ key: "dungeon2" });
        let cave = dungeon2.addTilesetImage("cave", "cave");
        // layers
        fireLayer = dungeon2.createStaticLayer("fire", cave, 60, 0).setScale(0.54).setDepth(-1);
        wandLayer = dungeon2.createStaticLayer("wand", cave, 60, 0).setScale(0.54).setDepth(-1);
        bodenLayer = dungeon2.createStaticLayer("Kachelebene 4", cave, 60, 0).setScale(0.54).setDepth(-1);
        let dekorLayer = dungeon2.createStaticLayer("dekor", cave, 60, 0).setScale(0.54).setDepth(-1);
        player = this.physics.add.sprite(200, 450, 'astro').setScale(1.35);
        player.body.setSize(22, 25, true);
        player.setBounce(0.2);
        player.setCollideWorldBounds(true);

                 this.anims.create({
                    key: 'left',
                    frames: this.anims.generateFrameNumbers('astro', { start: 17, end: 23 }),
                    frameRate: 10,
                    repeat: -1
                });

                this.anims.create({
                    key: 'up',
                    frames: this.anims.generateFrameNumbers('astro', { start: 30, end: 33 }),
                    frameRate: 10,
                    repeat: -1
                });

                this.anims.create({
                    key: 'down',
                    frames: this.anims.generateFrameNumbers('astro', { start: 17, end: 23 }),
                    frameRate: 10,
                    repeat: -1
                });

                this.anims.create({
                    key: 'turnright',
                    frames:  this.anims.generateFrameNumbers('astro', { start: 0, end: 4 }),
                    frameRate: 10,
                    repeat: -1
                });
                this.anims.create({
                    key: 'turnleft',
                    frames:  this.anims.generateFrameNumbers('astro', { start: 5, end: 9 }),
                    frameRate: 10,
                    repeat: -1
                });

                this.anims.create({
                    key: 'right',
                    frames: this.anims.generateFrameNumbers('astro', { start: 10, end: 16 }),
                    frameRate: 10,
                    repeat: -1
                });

                this.anims.create({
                    key: 'shootright',
                    frames: this.anims.generateFrameNumbers('astro', { start: 34, end: 38 }),
                    frameRate: 10,
                    repeat: -1
                });
                this.anims.create({
                    key: 'shootleft',
                    frames: this.anims.generateFrameNumbers('astro', { start: 39, end: 43 }),
                    frameRate: 10,
                    repeat: -1
                });

                //  Input Events
                /*cursors = this.input.keyboard.createCursorKeys();
                this.physics.add.collider(player, fireLayer);
                wandLayer.setCollisionBetween(265,352);
                this.physics.add.collider(player, wandLayer);*/


    }


    update(){

        if (cursors.left.isDown)
        {
            player.setVelocityX(-160);
            player.anims.play('left', true);
            if(cursors.left.isUp)
            {
                player.setVelocityX(0);
                player.setVelocityY(0);
                player.anims.play('turnleft', true);
            }
        }
        /*else if(cursors.left.isUp)
        {
            player.setVelocityX(0);
            player.setVelocityY(0);
            player.anims.play('turnleft', true);
        }*/
        else if (cursors.right.isDown)
        {
            player.setVelocityX(160);

            player.anims.play('right', true);
        }
        /*else if(cursors.right.isUp)
        {
            player.setVelocityX(0);
            player.setVelocityY(0);
            player.anims.play('turnright', true);
        }*/
        else if (cursors.up.isDown)
        {
            player.setVelocityY(-160);

            player.anims.play('up', true);
        }
        else if (cursors.down.isDown)
        {
            player.setVelocityY(160);

            player.anims.play('down', true);
        }
        else
        {
            player.setVelocityX(0);
            player.setVelocityY(0);
            player.anims.play('turnright', true);
        }

        /*
        if(cursors.left.isDown){
            player.setVelocityX(-160);
        }else if (cursors.right.isDown){
            player.setVelocityX(160);
        }
        if (cursors.up.isDown){
            player.setVelocityY(-160);
        }else if (cursors.down.isDown){
            player.setVelocityY(160);
        }

        player.setVelocity(player.velocityX, player.velocityY);
        if(Math.abs(player.velocityX) > 0.1 || Math.abs(player.velocityY) > 0.1){
            player.anims.play('right', true);
        }else{
            player.anims.play('turnright', true);
        }*/
    }
}