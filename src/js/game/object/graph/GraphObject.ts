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
            let x1 = (i * config.lineLength) + config.axisPosition.x;
            let x2 = (x1 + config.lineLength);

            x1 *= config.adjustX;
            x2 *= config.adjustX;

            let y1 = config.axisPosition.y - this.graph.getValue(x1) * config.adjustY;
            let y2 = config.axisPosition.y - this.graph.getValue(x2) * config.adjustY;
            this.add(new Phaser.GameObjects.Line(this.scene,0,0,x1,y1,x2,y2,0x03fcfc));
        }
    }
}