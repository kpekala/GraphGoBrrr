import Phaser from 'phaser';

export class Rider extends Phaser.Physics.Matter.Sprite{

    constructor(scene: Phaser.Scene, x: number, y: number, key: string, options: any) {
        super(scene.matter.world,x,y,key,undefined,options);
        this.setScale(0.5, 0.5);
        scene.add.existing(this);
        this.setMass(100);
    }

    moveForward(delta: number){
        this.thrust(0.3);
    }
    moveBack(delta: number){
        this.thrustBack(0.2);
    }


}