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
            this.text.text = `${progress * 100}%`;
        });
    }

    public create() {
        this.scene.start("Example");
    }

    public static queneRegestry(regestry: AssetRegestry) {
        for (let asset of regestry.assets) {
            Loading.toLoad.push(asset);
        }
    }

    public async preload() {
        while (Loading.toLoad.length > 0) {
            let asset = Loading.toLoad[0];
            switch (asset.type) {
                default: throw TypeError("Bad asset type");
                case AssetTypes.IMAGE:
                    this.load.image(asset.key, asset.url);
                    break;
                case AssetTypes.TILEMAP:
                    const mapfile: { tilesets: { image: string, name: string }[] } = await (await fetch(asset.url)).json();
                    this.load.tilemapTiledJSON(asset.key, asset.url);
                    mapfile.tilesets.forEach((tileset) => {
                        Loading.toLoad.push({
                            key: tileset.name,
                            url: tileset.image,
                            type: AssetTypes.IMAGE
                        });
                    });
                    break;
            }
            Loading.toLoad = Loading.toLoad.slice(1);
        }
    }
}