import Phaser from 'phaser';
import {loadImages} from "../utils/MediaLoader";

export default class RideScene extends Phaser.Scene{
    preload(){
        loadImages(this);
    }
    create(){
        let testImage = new Phaser.GameObjects.Image(this, 100,100,'TestImage');
    }
    update(time: number, delta: number) {

    }
}