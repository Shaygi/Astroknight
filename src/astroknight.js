/** @type {import("../typings/phaser")} */

import {LadeFenster} from "./scenes/LadeFenster";
import {MenueFenster} from "./scenes/MenueFenster";
let game = new Phaser.Game({
    width: 800,
    height: 600,
    scene:[
        LadeFenster, MenueFenster
    ]
})