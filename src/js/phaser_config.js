import Phaser from 'phaser';

import RideScene from "./game/scene/RideScene";
import {GAME_HEIGHT, GAME_WIDTH} from "./config";

export var phaser_config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: 'gameContainer',
        width: GAME_WIDTH,
        height: GAME_HEIGHT
    },
    physics: {
        default: 'matter',
        matter: {
            gravity: { y: 1 },
            debug: true
        }
    },
    scene: RideScene
};