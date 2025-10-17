import { AssetRegestry, AssetTypes } from "../../Loading";
import phaserLogo from '../phaser-logo.png?url';

export default {
    assets: [
        {
            key: "logo",
            url: phaserLogo,
            type: AssetTypes.IMAGE
        }
    ]
} satisfies AssetRegestry;