import Phaser, {Scene} from 'phaser';
import Graph from "../../Graph";
import config from './graph_config'

export default class GraphObject extends Phaser.GameObjects.Container{

    graph: Graph;
    scene: Scene;

    constructor(scene: Phaser.Scene, graph: Graph){
        super(scene, 300, 300);

        this.graph = graph;
        this.scene = scene;

        //scene.add.existing(this);
    }

    show(){
        for(let i=0; i<100; i++){
            let x1 = (i * config.lineLength);
            let x2 = (x1 + config.lineLength);

            x1 /= config.adjustX;
            x2 /= config.adjustX;

            let y1 = config.startY - this.graph.getValue(x1) * config.adjustY;
            let y2 = config.startY - this.graph.getValue(x2) * config.adjustY;
            console.log('line: ',x1,y1,x2,y2 );
            this.scene.add.line(0,0,x1,y1,x2,y2,0x03fcfc);
        }
    }
}