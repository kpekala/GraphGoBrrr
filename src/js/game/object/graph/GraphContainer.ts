import Phaser, {Scene} from 'phaser';
import Graph from "../../Graph";
import config from './graph_config'
import TestCar from "../vehicle/TestCar";

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
        for(let i=0; i<10000; i++){
            //Creating small lines which will look globally like a graph
            let x1: number = (i / 12);
            let x2: number = (i+1) / 12;

            let y1 = this.graph.getValue(x1);
            let y2 = this.graph.getValue(x2);

            let screenX1 = config.axisPosition.x + x1 * config.adjustX;
            let screenX2 = config.axisPosition.x + x2 * config.adjustX;
            let screenY1 = config.axisPosition.y - y1 * config.adjustY;
            let screenY2 = config.axisPosition.y - y2 * config.adjustY;
            //let test = new Phaser.Physics.Arcade.Image(this.scene,screenX1,screenY1,'car');
            //let line = new Phaser.GameObjects.Line(this.scene,0,0,screenX1,screenY1,screenX2,screenY2,0x112d4e);
            this.scene.matter.add.rectangle(screenX1, screenY1,screenX2 - screenX1,1,
                {render:{fillColor: 0xa84232}, isStatic: true});
            //this.add(line, true);
        }
    }
}