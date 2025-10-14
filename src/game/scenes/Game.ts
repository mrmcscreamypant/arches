import * as Phaser from 'phaser';
import Player from '../entities/Player';
import Entity from '../entities/Entity';

export class Game extends Phaser.Scene {
    camera: Phaser.Cameras.Scene2D.Camera;
    background: Phaser.GameObjects.Image;
    msg_text: Phaser.GameObjects.Text;

    public constructor() {
        super('Game');
    }

    public create(){
        this.camera = this.cameras.main;
        this.camera.setBackgroundColor(0x00ff00);

        this.background = this.add.image(512, 384, 'background');
        this.background.setAlpha(0.5);

        this.add.existing(new Player(this,0,0,""));
    }

    public addEntity<E extends Entity>(entity: E): E {
        this.add.existing(entity);
        entity.init();
        return entity;
    }
}
