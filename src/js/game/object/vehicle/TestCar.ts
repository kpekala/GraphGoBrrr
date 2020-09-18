
export default class TestCar extends Phaser.Physics.Arcade.Image{

    constructor(scene: Phaser.Scene, x: integer, y: integer, key: string){
        super(scene,x,y,key);

        this.scene.physics.world.enable(this);
        this.setGravityY(500);
        this.setBounce(0.2)
        this.setScale(0.5,0.5);
    }
}