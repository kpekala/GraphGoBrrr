import Phaser from 'phaser';

export class Rider extends Phaser.Physics.Matter.Sprite{

    constructor(scene: Phaser.Scene, x: number, y: number, key: string) {
        super(scene.matter.world,x,y,key);
        this.setScale(0.5, 0.5);
    }

    moveForward(delta: number){
        let vec2 = new Phaser.Math.Vector2();
        vec2.x = 0.05;
        vec2.y = 0;
        this.applyForce(vec2);
    }
    moveBack(delta: number){
        let vec2 = new Phaser.Math.Vector2();
        vec2.x = -0.05;
        vec2.y = 0;
        this.applyForce(vec2);
    }


}