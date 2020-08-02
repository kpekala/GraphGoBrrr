import Phaser from 'phaser';
import {loadImages} from "../../utils/MediaLoader";
import GraphObject from "../object/graph/GraphObject";
import gameSession from "../GameSession";
import Graph from "../Graph";
import AxesManager from "../object/graph/AxesManager";

export default class RideScene extends Phaser.Scene{

    graphObject!: GraphObject;
    axesManager: AxesManager;

    constructor(config: object) {
        super(config);

        this.axesManager = new AxesManager(this);
    }

    preload(){
        loadImages(this);
    }
    create(){
        this.axesManager.addAxes();

        this.graphObject = new GraphObject(this, new Graph(gameSession.mathExpr));
        this.graphObject.show();


        this.cameras.main.setBackgroundColor('#f9f7f7')
    }
    update(time: number, delta: number) {

    }
}