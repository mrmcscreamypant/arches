import * as Phaser from 'phaser'

export default abstract class Entity extends Phaser.GameObjects.Sprite {
    public abstract init(): void;
}