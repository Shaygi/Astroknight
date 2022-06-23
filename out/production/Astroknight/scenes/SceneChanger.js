import { Scene } from 'lib/phaser3'

class SceneChanger extends Scene{
    constructor() {
        super('preload');
    }
    preload(){
        this.load.image('logo', 'assets/logo.png');
    }

    create(){
        this.add.image(740, 360, 'logo');
        this.input.on('pointerdown', ()=> this.scene.start('lade'));
    }

}

export default SceneChanger;

