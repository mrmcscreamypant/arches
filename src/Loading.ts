import * as Phaser from 'phaser';

import { Data } from 'dataclass';

export const enum LoadingTypes {
    IMAGE
}

export class Asset extends Data {
    key: string;
    url: string;
    type: LoadingTypes;
}

export default class Loading extends Phaser.Scene {
    private text: Phaser.GameObjects.Text;
    public static readonly toLoad: Asset[] = [];

    constructor() {
        super("Loading");
    }

    public init() {
        this.add.image(512, 384, "loadingBG");

        this.text = this.add.text(512, 384, "", { color: "white" });

        this.load.on("progress", (progress: number) => {
            this.text.text = `${progress*100}%`;
        });
    }

    public create() {
        this.scene.start("Example")
    }

    public preload() {
        while (Loading.toLoad.length > 0) {
            let asset = Loading.toLoad[Loading.toLoad.length-1];
            switch(asset.type) {
                case LoadingTypes.IMAGE:
                    this.load.image(asset.key, asset.url);
            }
            Loading.toLoad.pop();
        }
    }
}