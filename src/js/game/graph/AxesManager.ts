import RideScene from "../scene/RideScene";
import config from './graph_config';
import {color, GAME_HEIGHT, GAME_WIDTH} from "../../config";
import {Scene} from "phaser";
import {getScreenX} from "./PositionConverter";
export default class AxesManager{
    scene: Scene;
    lastXPoint: number = 0;
    updateSize: integer = 50;

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
        this.updateHorizontalNumbers();
    }

    updateHorizontalNumbers() {
        let yPos = config.axisPosition.y;
        for(let i=1; i<=this.updateSize; i++){
            let text = this.scene.add.text(getScreenX(i + this.lastXPoint), yPos,(i+ this.lastXPoint).toString());
            text.setColor(`#${config.textColor.toString(16)}`);
        }
        this.lastXPoint += this.updateSize - 1;
    }

    private addVerticalNumbers() {
        let xPos = config.axisPosition.x;
        for(let i=0; i<20; i++){
            let text = this.scene.add.text(xPos + 5, (10-i)* config.adjustY + config.axisPosition.y ,(i-10).toString());
            text.setColor(`#${config.textColor.toString(16)}`);
        }
    }

    isUpdateNeeded(playerX: number){
        return playerX + GAME_WIDTH > getScreenX(this.lastXPoint)
    }
}