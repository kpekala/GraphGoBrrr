import Phaser from 'phaser';
import {loadImages} from "../../utils/MediaLoader";
import GraphObject from "../object/graph/GraphObject";
import gameSession from "../GameSession";
import Graph from "../Graph";

export default class RideScene extends Phaser.Scene{

    graphObject!: GraphObject;

    constructor(config: object) {
        super(config);
    }

    preload(){
        loadImages(this);
    }
    create(){
        this.graphObject = new GraphObject(this, new Graph(gameSession.mathExpr));
        this.graphObject.show();
    }
    update(time: number, delta: number) {

    }
}