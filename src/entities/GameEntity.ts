import * as Phaser from 'phaser';

export default abstract class GameEntity extends Phaser.GameObjects.Sprite {
    public constructor(scene: Phaser.Scene, pos: Phaser.Math.Vector2, textureKey: string) {
        super(scene, pos.x, pos.y, textureKey);
        this.scene.add.existing(this);
    }
}
