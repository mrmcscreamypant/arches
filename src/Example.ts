import * as Phaser from 'phaser';
import Loading from './Loading';
import ExampleAssets from './assets/regestries/ExampleAssets';
import GameMap, { Tileset } from './map/GameMap';
import debugMap from './assets/maps/debug.json?url';
import tileset from '../map_data/tilesets/debug.png?url';
import Player from './entities/Player';
import playerAesprite from './assets/spritesheets/demo.aesprite?url';

type Frame = {
    frame: {
        x: number;
        y: number;
        w: number;
        h: number;
    };
};

type Texture = {
    name: string;
    url: string;
    frames: Array<Frame>;
};

export type TextureAtlas = {
    textures: Array<Texture>;
};

export default class Example extends Phaser.Scene {
    public readonly map: GameMap;
    public player: Player;
    public cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;

    constructor() {
        super('Example');
        this.map = new GameMap(this, 'debug_map', debugMap, new Tileset('debug_map_tileset', tileset));
        Loading.queneRegestry(ExampleAssets);
    }

    public preload() {
        this.load.aseprite('player', playerAesprite);
    }

    public create() {
        this.cursors = this.input.keyboard?.createCursorKeys();
        this.map.create();
        this.player = new Player(this);
    }
}
