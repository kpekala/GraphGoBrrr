import Phaser from 'phaser';
import {loadImages} from "../utils/MediaLoader";

const GRAPH_START_X = 0;
const GRAPH_START_Y = 200;
const LINE_LENGTH = 3;
const GRAPH_SCALE_Y = 30;
const GRAPH_SCALE_X = 30;
export default class RideScene extends Phaser.Scene{
    preload(){
        loadImages(this);
    }
    create(){
        //this.add.image(300,300,'TestImage');
        //this.add.line(100,100,300,300,500,500,0x03fcfc);

        for(let i=0; i<100; i++){
            let pointX1 = GRAPH_START_X + i * LINE_LENGTH;
            let pointX2 = pointX1 + LINE_LENGTH;

            let pointY1 = GRAPH_START_Y + Math.sin(pointX1/GRAPH_SCALE_X) * GRAPH_SCALE_Y;
            let pointY2 = GRAPH_START_Y + Math.sin(pointX2/GRAPH_SCALE_X) * GRAPH_SCALE_Y;
            this.add.line(0,0,pointX1,pointY1,pointX2,pointY2,0x03fcfc);
        }
    }
    update(time: number, delta: number) {

    }
}