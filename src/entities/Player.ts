import * as Phaser from 'phaser';
import GameEntity from './GameEntity';
import Example from '../Example';

export default class Player extends GameEntity {
    declare public scene: Example;

    public constructor(scene: Example) {
        super(scene, new Phaser.Math.Vector2(400, 300), 'player_atlas');
    }

    public preUpdate(time: number, delta: number): void {
        if (this.scene.cursors?.down.isDown) {
            this.y += delta;
        }
    }
}
