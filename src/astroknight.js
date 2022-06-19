import MenueFenster from "./scenes/MenueFenster";
import LadeFenster from "./scenes/LadeFenster";
const astroknight = {
    width: 512,
    height: 512,
    backgroundColor: '#3333333',
    type: Phaser.AUTO,
    parent: 'astroknight',
    scene:[LadeFenster, MenueFenster]
    //scale: {
    //zoom: 2,
   // },
    /*physics: {
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
    }*/
}
new Phaser.Game(astroknight);