import * as Phaser from 'phaser';
import GameEntity from './GameEntity';

export default class Player extends GameEntity {
    public constructor(scene: Phaser.Scene) {
        super(scene, new Phaser.Math.Vector2(400,300), "player_atlas");
    }

    public preUpdate(...args: any[]): void {
        this.setTexture("player_atlas")
    }
}