import * as Phaser from 'phaser';
import Loading, { Asset, LoadingTypes } from './Loading';

import phaserLogo from './assets/phaser-logo.png?url';

export default class Example extends Phaser.Scene {
    constructor() {
        super("Example");
        Loading.toLoad.push(Asset.create({
            key:"logo",
            url:phaserLogo,
            type:LoadingTypes.IMAGE
        }));
    }

    preload() {
    }

    create() {
        this.add.image(400, 300, 'sky');

        const particles = this.add.particles(0, 0, 'red', {
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        const logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        particles.startFollow(logo);
    }
}