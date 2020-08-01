import Phaser from 'phaser';
import RideScene from "./scene/RideScene";
export const GAME_WIDTH = 1380;
export const GAME_HEIGHT = 780;

export var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: 'gameContainer',
        width: GAME_WIDTH,
        height: GAME_HEIGHT
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: RideScene
};