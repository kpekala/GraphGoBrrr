import Phaser, {Scene} from 'phaser';
import Graph from "../../Graph";
import config from './graph_config'

//GraphObject serves as a container for drawn parts of graph

export default class GraphObject extends Phaser.GameObjects.Container{

    graph: Graph;
    scene: Scene;

    constructor(scene: Phaser.Scene, graph: Graph){
        super(scene, 0, 0);

        this.graph = graph;
        this.scene = scene;

        scene.add.existing(this);
    }

    show(){
        for(let i=0; i<10000; i++){
            //Creating small lines which will look globally like a graph
            let x1: number = (i / 12);
            let x2: number = (i+1) / 12;
            console.log('x1', x1);
            console.log('x2', x2);

            let y1 = this.graph.getValue(x1);
            let y2 = this.graph.getValue(x2);

            let screenX1 = config.axisPosition.x + x1 * config.adjustX
            let screenX2 = config.axisPosition.x + x2 * config.adjustX
            let screenY1 = config.axisPosition.y - y1 * config.adjustY
            let screenY2 = config.axisPosition.y - y2 * config.adjustY
            this.add(new Phaser.GameObjects.Line(this.scene,0,0,screenX1,screenY1,screenX2,screenY2,0x03fcfc));
        }
    }
}