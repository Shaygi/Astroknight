class ErsterDungeon extends Phaser.Scene {

    constructor() {
        super('ErsterDungeon');
    }

    preload() {
        this.load.image("terrain", "assets/tilemaps/tiles.png"); //Tileset
        this.load.tilemapTiledJSON('dungeon', 'assets/tilemaps/Dungeon.json');
    }



    create() {
        const dungeon = this.make.tilemap({ key: "dungeon" });
        let terrain = dungeon.addTilesetImage("DungeonTiles", "terrain");
        // layers
        let schattenLayer = dungeon.createStaticLayer("schatten", terrain, 60, 0).setScale(0.54).setDepth(-1);
        let bodenLayer = dungeon.createStaticLayer("boden", terrain, 60, 0).setScale(0.54).setDepth(-1);
        let wandLayer = dungeon.createStaticLayer("wand", terrain, 60, 0).setScale(0.54).setDepth(-1);
        let eingangLayer = dungeon.createStaticLayer("Eingang", terrain, 60, 0).setScale(0.54).setDepth(-1);
        let ausgangLayer = dungeon.createStaticLayer("Ausgang", terrain, 60, 0).setScale(0.54).setDepth(-1);
        let dekoLayer = dungeon.createStaticLayer("deko", terrain, 60, 0).setScale(0.54).setDepth(-1);
        let wasserLayer = dungeon.createStaticLayer("wasser", terrain, 60, 0).setScale(0.54).setDepth(-1);


    }


    update() {
    }
}