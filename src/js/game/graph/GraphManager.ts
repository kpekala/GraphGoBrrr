import Phaser, {Scene} from 'phaser';
import Graph from "../Graph";
import {getScreenX, getScreenY} from "./PositionConverter";
import {lineAngle} from "../../utils/geometry";
import {color, GAME_WIDTH} from "../../config";

//GraphObject serves as a container for drawn parts of graph

export default class GraphManager{

    graph: Graph;
    scene: Scene;
    lines: Array<any>;
    lastXPoint: number = 0;
    updateSize: integer = 200;

    constructor(scene: Phaser.Scene, graph: Graph){
        this.graph = graph;
        this.scene = scene;
        this.lines = new Array<any>();
    }

    showLine(x1: number, y1: number, x2: number, y2: number){
        let lineLength = x2 - x1
        let angle = lineAngle(x1,y1,x2,y2);
        let newLine = this.scene.matter.add.rectangle(x1 + lineLength / 2, y1,lineLength,1,
            {render:{lineColor: color.primary}, isStatic: true, angle: angle});

    }

    isUpdateNeeded(playerX: number){
        return playerX + GAME_WIDTH > getScreenX(this.lastXPoint)
    }

    update(){
        console.log('graph update...');
        for(let i=0; i<=this.updateSize; i++){
            let x1: number = (i / 8) + this.lastXPoint;
            let x2: number = (i+1) / 8 + this.lastXPoint;

            let y1 = this.graph.getValue(x1);
            let y2 = this.graph.getValue(x2);

            this.showLine(getScreenX(x1), getScreenY(y1), getScreenX(x2), getScreenY(y2));
        }
        this.lastXPoint += this.updateSize / 8;
    }

}