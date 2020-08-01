import {config} from './config';

export default class GameManager{
    private game: Phaser.Game | undefined;

    start(){
        this.game = new Phaser.Game(config);
    }
}