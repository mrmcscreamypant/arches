import * as Phaser from 'phaser';
import Loading, { AssetTypes } from '../Loading';

export class Tileset {
    public readonly key: string;

    constructor(key: string, url: string) {
        this.key = key;
        Loading.queneRegestry({
            assets: [{
                key: key,
                url: url,
                type: AssetTypes.IMAGE
            }]
        })
    }
}

export default class GameMap {
    public readonly scene: Phaser.Scene;
    private readonly key: string;
    private readonly tileset: Tileset;

    constructor(scene: Phaser.Scene, key: string, url: string, tileset: Tileset) {
        this.key = key;
        this.scene = scene;
        this.tileset = tileset;
        Loading.queneRegestry({
            assets: [{
                key: this.key,
                url: url,
                type: AssetTypes.TILEMAP
            }]
        });
    }

    public create() {
        const map = this.scene.add.tilemap(this.key);
        const tiles = map.addTilesetImage("debug", this.tileset.key);
        if (!tiles) { return; };
        map.createLayer(0, tiles, 0, 0);
    }
}
