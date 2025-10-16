import * as Phaser from 'phaser';

export const enum AssetTypes {
    IMAGE
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
    private static readonly toLoad: Asset[] = [];

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
        this.scene.start("Example")
    }

    public static queneRegestry(regestry: AssetRegestry) {
        for (let asset of regestry.assets) {
            Loading.toLoad.push(asset);
        }
    }

    public preload() {
        while (Loading.toLoad.length > 0) {
            let asset = Loading.toLoad[Loading.toLoad.length - 1];
            switch (asset.type) {
                case AssetTypes.IMAGE: this.load.image(asset.key, asset.url);
            }
            Loading.toLoad.pop();
        }
    }
}