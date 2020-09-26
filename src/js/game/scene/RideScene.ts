import Phaser from 'phaser';
import {loadImages} from "../../utils/MediaLoader";
import GraphContainer from "../graph/GraphContainer";
import gameSession from "../GameSession";
import Graph from "../Graph";
import AxesManager from "../graph/AxesManager";
import KeysManager from "../input/KeysManager";
import {Rider} from "../model/Rider";
import {phaser_config} from "../../phaser_config";
import {color} from "../../config";

export default class RideScene extends Phaser.Scene{

    graphObject!: GraphContainer;
    axesManager: AxesManager;
    keysManager!: KeysManager;
    rider!: Rider;

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

        this.setUpRider();
        this.setUpCamera();

        this.keysManager = new KeysManager(this);
    }

    setUpRider(){
        let shape = this.cache.json.get('car_shape');
        this.rider = new Rider(this,300,200,'car',{shape: shape.car});
    }

    setUpCamera(){
        let camera = this.cameras.main;
        camera.setBackgroundColor(color.darker);
        camera.setBounds(0,0,phaser_config.scale.width*15, phaser_config.scale.height);
        camera.startFollow(this.rider);
    }

    update(time: number, delta: number) {
        if (this.keysManager.isKeyDown('w'))
            this.rider.moveForward(delta);
        if (this.keysManager.isKeyDown('s'))
            this.rider.moveBack(delta);
    }




}