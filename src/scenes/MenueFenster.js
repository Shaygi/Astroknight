export default class MenueFenster extends Phaser.Scene {
    constructor() {
        super("MenueFenster");
    }


preload(){
    this.load.image('Menuebild', 'assets/Menuebild.png')
    this.load.image('Play', 'assets/Play.png')
    this.load.image('Options', 'assets/Options.png')


}
create(){
    this.add.image(400, 300, 'Menuebild');
    this.add.image(400,300, 'Play');
    this.add.image(400,300, 'Options');
}
update(){



}

}
