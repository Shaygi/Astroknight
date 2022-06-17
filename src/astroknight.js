import MenueFenster from "./scenes/MenueFenster";

const astroknight = {
    width: 512,
    height: 512,
    backgroundImage: 'assets/Menuebild.png',
    type: Phaser.AUTO,
    parent: 'astroknight',
    scene:[MenueFenster],
    scale: {
    zoom: 2,
    },
    physics: {
        default: 'matter',
        matter: {
            debug:true,
            gravity:{y:0},
        }
    },
    plugins: {
        scene:[
            {
                plugin: Phaser.Plugins.PhaserMatterCollisionPlugin,
                key: 'matterCollision',
                mapping: 'matterCollision'
            }
        ]
    }
}

new Phaser.Game(astroknight);