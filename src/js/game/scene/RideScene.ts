import Phaser from 'phaser';
import {loadImages} from "../../utils/MediaLoader";
import GraphContainer from "../object/graph/GraphContainer";
import gameSession from "../GameSession";
import Graph from "../Graph";
import AxesManager from "../object/graph/AxesManager";
import TestCar from "../object/vehicle/TestCar";

export default class RideScene extends Phaser.Scene{

    graphObject!: GraphContainer;
    axesManager: AxesManager;
    testCar!: TestCar;

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

        this.matter.add.rectangle(180,100,100,100);
    }

    update(time: number, delta: number) {

    }
}