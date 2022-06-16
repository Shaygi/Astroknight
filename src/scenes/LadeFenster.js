import {CST} from "CST.js"
import {MenueFenster} from "./MenueFenster";
export class LadeFenster extends Phaser.Scene{
    constructor(){
        super({
            key:CST.SCENES.LOAD
        })
    }
    init(){

    }
    preload(){
        this.load.spritesheet("Menue", "./assets/Menue.png", {
            frameHeight: 300,
            frameWidth: 500
        });
        this.load.spritesheet("Astro", "./assets/Astro.png", {
            frameHeight: 29,
            frameWidth: 20
        });
        this.load.image("Play", "./assets/Play.png");
        this.load.image("Options", "./assets/Options.png");

        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xffffff
            }
        })
        /*
        for(let i = 0; i < 100; i++){
            this.laod.spritesheet("Astro" + i, "./assets/Astro.png", {
                frameHeight: 29,
                frameWidth: 20
            });
        }*/

        this.load.on("progress", (percent)=>{
            loadingBar.fillRect(0, this.game.renderer.height/2, this.game.renderer.width * percent, 50);
        })

        this.load.on("complete", ()=>{

        })
    }
    create(){
        //this.scene.start(CST.SCENES.MENU, MenueFenster, false);
        //this.scene.start(CST.SCENES.MENU, "Daten werden geladen")
    }
}