import * as Phaser from 'phaser';
import Loading from './Loading';
import ExampleAssets from './assets/regestries/ExampleAssets';
import GameMap, { Tileset } from './map/GameMap';
import debugMap from './assets/maps/debug.json?url';
import tileset from '../map_data/tilesets/debug.png?url'

export default class Example extends Phaser.Scene {
    public readonly map: GameMap;

    constructor() {
        super("Example");
        console.log(debugMap)
        this.map = new GameMap(this, "debug_map", debugMap, new Tileset("debug_map_tileset", tileset));
        Loading.queneRegestry(ExampleAssets);
    }

    public create() {
        this.map.create();

        const logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);
    }
}