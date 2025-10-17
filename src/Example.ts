import * as Phaser from 'phaser';
import Loading from './Loading';
import ExampleAssets from './assets/regestries/ExampleAssets';
import GameMap, { Tileset } from './map/GameMap';
import debugMap from './assets/maps/debug.json?url';
import tileset from '../map_data/tilesets/debug.png?url'
import Player from './entities/Player';
import spritesheet from '../map_data/tilesets/debug.png?url';
import playerAtlas from './assets/atlases/player.json?url';

export default class Example extends Phaser.Scene {
    public readonly map: GameMap;
    public player: Player;

    constructor() {
        super("Example");
        console.log(debugMap)
        this.map = new GameMap(this, "debug_map", debugMap, new Tileset("debug_map_tileset", tileset));
        Loading.queneRegestry(ExampleAssets);
    }

    public preload() {
        console.log(this.load.atlas("player_atlas", spritesheet, playerAtlas));
    }

    public create() {
        this.map.create();
        this.player = new Player(this);
    }
}