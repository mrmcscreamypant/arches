import { AssetRegestry, AssetTypes } from "../../Loading";
import phaserLogo from './../phaser-logo.png?url';
import debugMap from '../maps/debug.json?url';

export default {
    assets: [
        {
            key: "logo",
            url: phaserLogo,
            type: AssetTypes.IMAGE
        },
        {
            key:"debug_map",
            url:debugMap,
            type: AssetTypes.TILEMAP
        }
    ]
} satisfies AssetRegestry;