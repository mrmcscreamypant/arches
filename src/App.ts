import * as Phaser from 'phaser';

import Example from './Example';
import Boot from './Boot';
import Loading from './Loading';

export default class App extends Phaser.Game {
    constructor() {
        super({
            type: Phaser.AUTO,
            width: 1024,
            height: 768,
            scene: [
                Boot,
                Example,
                Loading
            ],
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