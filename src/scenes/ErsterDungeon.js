var cursors;
var player;
var wandLayer;
var dekoLayer;
var wasserLayer;
class ErsterDungeon extends Phaser.Scene {

    constructor() {
        super('ErsterDungeon');

    }

    preload() {
        this.load.image("terrain", "assets/tilemaps/tiles.png"); //Tileset
        this.load.tilemapTiledJSON('dungeon', 'assets/tilemaps/Dungeon.json');
        this.load.spritesheet('astro', 'assets/Astro.png', { frameWidth: 20, frameHeight: 29 });
    }



    create() {
        const dungeon = this.make.tilemap({ key: "dungeon" });
        let terrain = dungeon.addTilesetImage("DungeonTiles", "terrain");
        // layers
        let schattenLayer = dungeon.createStaticLayer("schatten", terrain, 60, 0).setScale(0.54).setDepth(-1);
        let bodenLayer = dungeon.createStaticLayer("boden", terrain, 60, 0).setScale(0.54).setDepth(-1);
        wandLayer = dungeon.createStaticLayer("wand", terrain, 60, 0).setScale(0.54).setDepth(-1);
        let eingangLayer = dungeon.createStaticLayer("Eingang", terrain, 60, 0).setScale(0.54).setDepth(-1);
        let ausgangLayer = dungeon.createStaticLayer("Ausgang", terrain, 60, 0).setScale(0.54).setDepth(-1);
        dekoLayer = dungeon.createStaticLayer("deko", terrain, 60, 0).setScale(0.54).setDepth(-1);
        wasserLayer = dungeon.createStaticLayer("wasser", terrain, 60, 0).setScale(0.54).setDepth(-1);
        player = this.physics.add.sprite(200, 450, 'astro').setScale(1.35);
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
            key: 'turn',
            frames: [ { key: 'astro', frame: 0 } ],
            frameRate: 20
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
        cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(player, wandLayer);
        wandLayer.setCollisionBetween(265,351);
        this.physics.add.collider(player, dekoLayer);
        dekoLayer.setCollisionBetween(297,355);
        this.physics.add.collider(player, wasserLayer);
        //wasserLayer.setCollisionBetween(181,214);
        wasserLayer.setCollision(186);
        wasserLayer.setCollision(214);
        wasserLayer.setCollision(242);
    }

    update() {

        if (cursors.left.isDown)
        {
            player.setVelocityX(-160);

            player.anims.play('left', true);
        }
        else if (cursors.right.isDown)
        {
            player.setVelocityX(160);

            player.anims.play('right', true);
        }
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

            player.anims.play('turn');
        }

    }
}
