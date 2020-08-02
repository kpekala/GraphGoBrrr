import RideScene from "../../scene/RideScene";
import config from './graph_config';
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

    addHorizontalAxis(){
        this.scene.add.line(0,0,0,config.axisPosition.y, config.weirdEnd, config.axisPosition.y, config.axisColor);
    }

    addVerticalAxis(){
        let trueXPos = config.axisPosition.x * config.adjustX;
        this.scene.add.line(0,0,trueXPos ,0,trueXPos, config.weirdEnd, config.axisColor);
    }

    addNumbers(){
        this.addVerticalNumbers();
        this.addHorizontalNumbers();
    }

    private addHorizontalNumbers() {
        let yPos = config.axisPosition.y;
        for(let i=0; i<100; i++){
            let text = this.scene.add.text((i + config.axisPosition.x) * config.adjustX, yPos,i.toString());
            text.setColor('#000000');
            text.setBackgroundColor('#f9f7f7');
        }
    }

    private addVerticalNumbers() {

    }
}