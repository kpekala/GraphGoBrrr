import Phaser from 'phaser';
import {loadImages} from "../../utils/MediaLoader";
import GraphContainer from "../graph/GraphContainer";
import gameSession from "../GameSession";
import Graph from "../Graph";
import AxesManager from "../graph/AxesManager";
import KeysManager from "../input/KeysManager";

export default class RideScene extends Phaser.Scene{

    graphObject!: GraphContainer;
    axesManager: AxesManager;
    keysManager!: KeysManager;
    car!: MatterJS.CompositeType;

    constructor(config: object) {
        super(config);

        this.axesManager = new AxesManager(this);
    }

    preload(){
        loadImages(this);
    }
    create(){
        this.cameras.main.setBackgroundColor('#f9f7f7')
        this.axesManager.addAxes();

        this.graphObject = new GraphContainer(this, new Graph(gameSession.mathExpr));
        this.graphObject.show();

        this.matter.add.circle(400,300,10);
        this.car = this.matter.add.car(600,300,110,20,20);

        this.keysManager = new KeysManager(this);
    }

    update(time: number, delta: number) {
        if (this.keysManager.isKeyDown('w')){
            this.matter.body.applyForce(this.car.bodies[0],
                {x: this.car.bodies[0].position.x, y: this.car.bodies[0].position.y},
                {x: 0.005, y: 0});
        }
        if (this.keysManager.isKeyDown('s')){
            this.matter.body.applyForce(this.car.bodies[0],
                {x: this.car.bodies[0].position.x, y: this.car.bodies[0].position.y},
                {x: -0.005, y: 0});
        }

}

}