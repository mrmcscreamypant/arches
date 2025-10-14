import * as Phaser from 'phaser';

export default class Loading extends Phaser.Scene {
    constructor() {
        super("Loading");
    }

    public create() {
        this.add.image(512, 384, "loadingBG");
    }
}