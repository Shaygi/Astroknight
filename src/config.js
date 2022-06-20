import Phaser from 'lib/phaser3';
import LadeFenster from "scenes/LadeFenster";
import MenueFenster from "scenes/MenueFenster";
import SceneChanger from "scenes/SceneChanger";
var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 1485,
    height: 700,
    scene: [SceneChanger, LadeFenster, MenueFenster],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 300},
            debug: false
        }
    }
}
export {config}