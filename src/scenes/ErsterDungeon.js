

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
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};
// Create a new Phaser Game object
var game = new Phaser.Game(config);

function preload() {
    this.load.image({
        key: 'tiles',
        url: 'assets/tiles.png',
    });
    this.load.tilemapTiledJSON('dungeon', 'assets/tilemaps/ErsterDungeon.json');


}


function create() {
    this.add.image(100,100, 'assets/tileset/tiles');
    const map = this.make.tilemap({key: 'dungeon'});
    const tileset = map.addTilesetImage('assets/tilemaps/ErsterDungeon', 'tiles');
    map.createStaticLayer('wände', tileset);
}
function update() {
}
