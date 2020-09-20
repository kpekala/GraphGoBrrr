import Phaser, {Scene} from 'phaser';
import Graph from "../Graph";
import config from './graph_config'
import {getScreenX, getScreenY} from "./PositionConverter";
import {lineAngle} from "../../utils/geometry";

//GraphObject serves as a container for drawn parts of graph

export default class GraphContainer{

    graph: Graph;
    scene: Scene;
    lines: Array<any>;

    constructor(scene: Phaser.Scene, graph: Graph){
        this.graph = graph;
        this.scene = scene;
        this.lines = new Array<any>();
    }

    show(){
        for(let i=0; i<200; i++){
            let x1: number = (i / 8);
            let x2: number = (i+1) / 8;

            let y1 = this.graph.getValue(x1);
            let y2 = this.graph.getValue(x2);

            this.showLine(getScreenX(x1), getScreenY(y1), getScreenX(x2), getScreenY(y2));
        }
    }

    showLine(x1: number, y1: number, x2: number, y2: number){
        let lineLength = x2 - x1
        let angle = lineAngle(x1,y1,x2,y2);
        this.scene.matter.add.rectangle(x1 + lineLength / 2, y1,lineLength,1,
            {render:{fillColor: 0xa84232}, isStatic: true, angle: angle});
    }

}