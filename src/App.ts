import * as Phaser from 'phaser';

import Example from './Example';

export default class App extends Phaser.Game {
    constructor() {
        super({
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
        });
    }
}