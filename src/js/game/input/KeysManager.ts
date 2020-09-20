export default class KeysManager{
    private scene: Phaser.Scene;
    private keys: Map<string, Phaser.Input.Keyboard.Key>;

    constructor(scene: Phaser.Scene) {
        this.scene = scene;
        this.keys = new Map<string, Phaser.Input.Keyboard.Key>();

        this.keys.set('w',this.scene.input.keyboard.addKey('w'))
        this.keys.set('s',this.scene.input.keyboard.addKey('s'))
    }

    isKeyDown(key: string){
        return this.keys.get(key)?.isDown;
    }

    isKeyUp(key: string){
        return this.keys.get(key)?.isUp;
    }

}