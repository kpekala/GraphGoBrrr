import RideScene from "../scene/RideScene";
import config from './graph_config';
import {GAME_HEIGHT} from "../../config";
import {Scene} from "phaser";
export default class AxesManager{

    scene: Scene;

    constructor(scene: RideScene) {
        this.scene = scene;
    }

    addAxes(){
        this.addHorizontalAxis();
        this.addVerticalAxis();
        this.addNumbers();
    }

    private addHorizontalAxis(){
        this.scene.add.line(0,0,0,config.axisPosition.y, config.weirdEnd, config.axisPosition.y, config.axisColor);
    }

    private addVerticalAxis(){
        this.scene.add.line(0,0,config.axisPosition.x ,0,config.axisPosition.x, config.weirdEnd, config.axisColor);
    }

    private addNumbers(){
        this.addVerticalNumbers();
        this.addHorizontalNumbers();
    }

    private addHorizontalNumbers() {
        let yPos = config.axisPosition.y;
        for(let i=1; i<100; i++){
            let text = this.scene.add.text(i * config.adjustX + config.axisPosition.x, yPos,i.toString());
            text.setColor('#000000');
        }
    }

    private addVerticalNumbers() {
        let xPos = config.axisPosition.x;
        for(let i=0; i<20; i++){
            let text = this.scene.add.text(xPos + 5, (10-i)* config.adjustY + config.axisPosition.y ,(i-10).toString());
            text.setColor('#000000');
        }
    }
}