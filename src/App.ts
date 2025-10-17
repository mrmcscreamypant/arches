import * as Phaser from 'phaser';

import Example from './Example';
import Boot from './Boot';
import Loading from './Loading';
import AwaitLoaderPlugin from 'phaser3-rex-plugins/plugins/awaitloader-plugin.js';

export default class App extends Phaser.Game {
    constructor() {
        super({
            type: Phaser.AUTO,
            mode: Phaser.Scale.RESIZE,
            scene: [
                Boot,
                Example,
                Loading,
            ],
            plugins: {
                global: [{
                    key: 'rexAwaitLoader',
                    plugin: AwaitLoaderPlugin,
                    start: true,
                }],
            },
            parent: 'game-container',
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { x: 0, y: 200 },
                },
            },
        });
    }
}
