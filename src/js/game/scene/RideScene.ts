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
        this.axesManager.addAxes();

        this.graphObject = new GraphContainer(this, new Graph(gameSession.mathExpr));
        this.graphObject.show();

        this.cameras.main.setBackgroundColor('#f9f7f7')

        this.createTestObject();

        this.physics.add.collider(this.graphObject,this.testCar,this.collideCallback);
    }

    private createTestObject(){
        this.testCar = new TestCar(this,100,100,'car');
    }
    update(time: number, delta: number) {

    }

    private collideCallback(gameObject1: any, gameObject2: any) {
        console.log("collision");
    }
}