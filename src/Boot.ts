import * as Phaser from 'phaser';
import loadingImage from './assets/loading.svg?no-inline';

export default class Boot extends Phaser.Scene {
    constructor() {
        super('Boot');
    }

    public preload() {
        this.load.path = '.';
        this.load.svg('loadingBG', loadingImage);
    }

    public create() {
        this.scene.start('Loading');
    }
}
