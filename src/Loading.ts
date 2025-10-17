import * as Phaser from 'phaser';

export const enum AssetTypes {
    IMAGE,
    TILEMAP
}

type Asset = {
    key: string;
    url: string;
    type: AssetTypes
}

export type AssetRegestry = {
    assets: Asset[];
}

export default class Loading extends Phaser.Scene {
    private text: Phaser.GameObjects.Text;
    private static toLoad: Asset[] = [];

    constructor() {
        super("Loading");
    }

    public init() {
        this.add.image(512, 384, "loadingBG");

        this.text = this.add.text(512, 384, "", { color: "white" });

        this.load.on("progress", (progress: number) => {
            this.text.text = `${Math.round(progress * 100)}%`;
        });
    }

    public create() {
        this.scene.start("Example");
    }

    public static queneRegestry(regestry: AssetRegestry) {
        Loading.toLoad = Loading.toLoad.concat(regestry.assets);
    }

    public async preload() {
        while (Loading.toLoad.length > 0) {
            let asset = Loading.toLoad[0];
            console.log(asset);
            switch (asset.type) {
                default: throw TypeError("Bad asset type");
                case AssetTypes.IMAGE:
                    this.load.image(asset.key, asset.url);
                    break;
                case AssetTypes.TILEMAP:
                    this.load.tilemapTiledJSON(asset.key, asset.url);
                    break;
            }
            Loading.toLoad = Loading.toLoad.slice(1);
        }
    }
}