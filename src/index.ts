import * as Phaser from 'phaser';
import './index.css';

class Example extends Phaser.Scene {
    preload() {
        this.load.setBaseURL('https://cdn.phaserfiles.com/v385');

        this.load.image('sky', 'assets/skies/space3.png');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/red.png');
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

const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    scene: Example,
    parent: "game-container",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { x: 0, y: 200 }
        }
    }
} satisfies Phaser.Types.Core.GameConfig;

new Phaser.Game(config);