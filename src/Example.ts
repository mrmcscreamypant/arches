import * as Phaser from 'phaser';
import Loading from './Loading';
import ExampleAssets from './assets/regestries/ExampleAssets';

export default class Example extends Phaser.Scene {
    constructor() {
        super("Example");

        Loading.queneRegestry(ExampleAssets);
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